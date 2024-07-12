import { useEffect, useState } from 'react'
import { socket } from '../socket'

export const useSocket = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [markers, setMarkers] = useState(null)
  const [addedMarker, setAddedMarker] = useState(null)
  const [updatedMarker, setUpdatedMarker] = useState(null)

  useEffect(() => {
    socket.on('connect', () => setIsConnected(true))
    socket.on('disconnect', () => setIsConnected(false))
    socket.on('get-markers', (markers) => setMarkers(markers))
    socket.on('add-marker', (newMarker) => setAddedMarker(newMarker))
    socket.on('update-marker', (updatedMarker) => setUpdatedMarker(updatedMarker))

    return () => {
      socket.off('connect')
      socket.off('disconnect')
      socket.off('get-markers')
      socket.off('add-marker')
      socket.off('update-marker')
    }
  }, [socket])

  const onNewMarker = (newMarker) => 
    socket.emit('add-marker', newMarker)

  const onUpdateMarker = (updatedMarker) => 
    socket.emit('update-marker', updatedMarker)

  return {
    socket,
    isConnected,
    markers,
    addedMarker,
    updatedMarker,

    onNewMarker,
    onUpdateMarker,
  }
}