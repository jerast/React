import { useEffect, useState } from 'react'
import { socket } from '../socket'

export const useSocket = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [bandList, setBandList] = useState([])

  useEffect(() => {
    socket.on('connect', () => setIsConnected(true))
    socket.on('disconnect', () => setIsConnected(false))
    socket.on('get-all', data => setBandList(data))
  }, [socket])

  const onAdd = (name) => socket.emit('add', { name })
  const onRemove = (id) => socket.emit('remove', { id })
  const onIncreaseVotes = (id) => socket.emit('increase-vote', { id })
  const onDecreaseVotes = (id) => socket.emit('decrease-vote', { id })
  const onChangeName = (id, name) => socket.emit('change-name', { id, name })
  
  return {
    isConnected,
    bandList,
    setBandList,
    onAdd,
    onRemove,
    onIncreaseVotes,
    onDecreaseVotes,
    onChangeName,
  }
}