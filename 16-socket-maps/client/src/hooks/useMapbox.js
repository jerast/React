import { useState, useEffect, useRef, useCallback } from 'react'
import mapboxgl from 'mapbox-gl'
import { Subject } from 'rxjs'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = import.meta.env.VITE_SOCKET_MAPS_TOCKET ?? 'test-1234'

const SET_STANDARD_DESIGN = false

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


  const addMarker = useCallback((event) => {
    const { lng, lat } = event.lngLat
    const id = crypto.randomUUID()
      
    const marker = new mapboxgl.Marker()
    marker.id = id
    marker.setLngLat([lng, lat]).addTo(map.current).setDraggable(true)

    mapMarkers.current[ marker.id ] = marker
    newMarker.current.next({ id, lng, lat })

    marker.on('drag', ({ target }) => {
      const { id } = target
      const { lng, lat } = target.getLngLat()

      moveMarker.current.next({ id, lng, lat })
    })
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
    SET_STANDARD_DESIGN 
      && map.current?.on('style.load', () => {
        map.current.setConfigProperty('basemap', 'lightPreset', 'dusk')
      })
  }, [SET_STANDARD_DESIGN])

  return {
    coords,
    mapContainer,
    mapMarkers,
    addMarker,

    newMarker$: newMarker.current,
    moveMarker$: moveMarker.current,
  }
}