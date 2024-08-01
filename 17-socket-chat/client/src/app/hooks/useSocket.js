import { useEffect, useState, useContext, useCallback } from 'react'
import { AuthContext } from '@auth/context/AuthContext'
import { ChatContext } from '@chat/context/ChatContext'
import { SocketIo } from '@app/connection/socket'

export const useSocket = () => {
  const { auth } = useContext(AuthContext)
  const { onLoadUsers, onNewMessage } = useContext(ChatContext)
  const [ socket, setSocket ] = useState(null)
  const [ isConnected, setIsConnected ] = useState(false)

  const connected = useCallback(() => {
    if (socket) return

    const token = localStorage.getItem('socket-chat-token')
    setSocket( SocketIo({ 'x-token': token }).connect() )
  }, [])
  
  const disconnected = useCallback(() => {
    setSocket(socket => {
      socket?.disconnect()
      return null
    })
    setIsConnected(false)
  }, [])

  const sendMessage = useCallback((messagePayload) => {
    socket?.emit('new-message', messagePayload)
  }, [socket])
  
  useEffect(() => {
    socket?.on('connect', () => setIsConnected(true))
    socket?.on('disconnect', () => setIsConnected(false))
    socket?.on('connect-users-list', (data) => onLoadUsers(data.users))
    socket?.on('new-message', (newMessage) => onNewMessage(newMessage))

    return () => {
      socket?.off('connect')
      socket?.off('disconnect')
      socket?.off('connect-users-list')
      socket?.off('new-message')
    }
  }, [socket])

  useEffect(() => {
    auth.isLogged
      ? connected()
      : disconnected()
  }, [auth])

  return {
    isConnected,
    sendMessage
  }
}
