import { useEffect } from 'react'
import { useMapbox } from '../hooks/useMapbox'

export const MapPage = () => {
  const { mapContainer, coords, newMarker$, moveMarker$ } = useMapbox()

  useEffect(() => {
    newMarker$.subscribe( marker => {
    })
  }, [newMarker$])

  useEffect(() => {
    moveMarker$.subscribe( marker => {
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