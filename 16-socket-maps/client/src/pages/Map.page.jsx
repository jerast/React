import { useContext, useEffect } from 'react'
import { useMapbox } from '../hooks/useMapbox'
import { SocketContext } from '../context/SocketContext'

export const MapPage = () => {
  const { mapContainer, coords, newMarker$, moveMarker$, addMarker, updateMarker } = useMapbox()
  const { markers, addedMarker, updatedMarker, onNewMarker, onUpdateMarker } = useContext( SocketContext )

  // get and drwa in map all active markers
  useEffect(() => {
    if (markers) {
      for (const key of Object.keys(markers)) {
        addMarker(markers[key], key)
      }
    }
  }, [markers])

  // When others add new markers
  useEffect(() => {
    if (addedMarker) addMarker(addedMarker, addedMarker.id)
  }, [addedMarker])

  // When others update created markers
  useEffect(() => {
    if (updatedMarker) updateMarker(updatedMarker)
  }, [updatedMarker])

  // When me add new markers
  useEffect(() => {
    newMarker$.subscribe(newMarker => {
      onNewMarker(newMarker)
    })
  }, [newMarker$])

  // When me update a created marker
  useEffect(() => {
    moveMarker$.subscribe(updatedMarker => {
      onUpdateMarker(updatedMarker)
    })
  }, [moveMarker$])
  
  return (
    <>
      <div className="locationInfo">
        <span>Lng: { coords.lng }</span>
        <span>Lat: { coords.lat }</span>
        <span>Zoom: { coords.zoom }</span>
      </div>
      <div ref={mapContainer} className="mapContainer" />
    </>
  )
}