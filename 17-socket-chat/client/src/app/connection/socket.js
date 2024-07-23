import { io } from 'socket.io-client'

const URL = import.meta.env.VITE_SOCKET_PATH ?? 'http://localhost:1234'

export const socket = io(URL, { 
  autoConnect: false,
  forceNew: true,
  query: {
    'x-token': localStorage.getItem('socket-chat-token')
  }
});