import { io } from 'socket.io-client'
import { SOCKET_URL } from '@app/config/env'

export const SocketIo = (query) => 
  io( SOCKET_URL, { 
    autoConnect: false, 
    // forceNew: true, 
    query 
  })