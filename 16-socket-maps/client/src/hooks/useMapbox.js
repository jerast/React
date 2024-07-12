import { useState, useEffect, useRef, useCallback } from 'react'
import mapboxgl from 'mapbox-gl'
import { Subject } from 'rxjs'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = import.meta.env.VITE_SOCKET_MAPS_TOCKET ?? 'test-1234'

const SET_STANDARD_DESIGN = false // 3D model maps
const SET_DUSK_EFFECT = false // dusk effect on 3D models

export const useMapbox = () => {
  const [coords, setCoords] = useState({
    lng: -74.2168, // -74.15
    lat: 4.5813, // 4.65
    zoom: 15.65 // 11.5
  })

  const mapContainer = useRef(null)
  const mapMarkers = useRef({})
  const map = useRef(null)

  // RXJS observers
  const moveMarker = useRef( new Subject() )
  const newMarker = useRef( new Subject() )


  const addMarker = useCallback((event, id) => {
    const { lng, lat } = event.lngLat || event
      
    const marker = new mapboxgl.Marker()
    marker.id = id ?? crypto.randomUUID()
    marker.setLngLat([lng, lat]).addTo(map.current).setDraggable(true)

    mapMarkers.current[ marker.id ] = marker

    if (!id) newMarker.current.next({ id: marker.id, lng, lat })

    marker.on('drag', ({ target }) => {
      const { id } = target
      const { lng, lat } = target.getLngLat()

      moveMarker.current.next({ id: marker.id, lng, lat })
    })
  }, [])

  const updateMarker = useCallback((marker) => {
    const { id, lng, lat } = marker

    mapMarkers.current[id].setLngLat([lng, lat])
  }, [])

  useEffect(() => {
    const newMap = map.current ?? new mapboxgl.Map({ 
      container: mapContainer.current,
      style: `mapbox://styles/mapbox/${ SET_STANDARD_DESIGN ? 'standard' : 'outdoors-v12' }`, // outdoors-v12 | standard
      center: [ coords.lng , coords.lat ], // starting position [lng, lat] and zoom
      zoom: coords.zoom, // starting zoom
    })

    map.current = newMap
  }, [])

  useEffect(() => {
    map.current?.on('move', () => {
      const { lng, lat } = map.current.getCenter()
      setCoords({ 
        lng: lng.toFixed(4), 
        lat: lat.toFixed(4),
        zoom: map.current.getZoom().toFixed(2)
      })
    })

    map.current?.on('click', addMarker)
  }, [])

  useEffect(() => {
    SET_STANDARD_DESIGN && SET_DUSK_EFFECT
      && map.current?.on('style.load', () => {
        map.current.setConfigProperty('basemap', 'lightPreset', 'dusk')
      })
  }, [SET_STANDARD_DESIGN])

  return {
    coords,
    mapContainer,
    mapMarkers,
    addMarker,
    updateMarker,

    newMarker$: newMarker.current,
    moveMarker$: moveMarker.current,
  }
}