import { useEffect, useState, useContext } from 'react'
import { AuthContext } from '@auth/context/AuthContext'
import { socket } from '@app/connection/socket'

export const useSocket = () => {
  const { auth } = useContext(AuthContext)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    socket.on('connect', () => setIsConnected(true))
    socket.on('disconnect', () => setIsConnected(false))

    return () => {
      socket.off('connect')
      socket.off('disconnect')
    }
  }, [socket])

  useEffect(() => {
    auth.isLogged
      ? socket.connect()
      : socket.disconnect()
  }, [auth])

  return {
    isConnected,
  }
}
