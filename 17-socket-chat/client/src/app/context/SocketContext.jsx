import { createContext } from 'react'
import { useSocket } from '@app/hooks/useSocket'

export const SocketContext = createContext()

export const SocketProvider = ({ children }) => {
  const socket = useSocket()
  
  return (
    <SocketContext.Provider value={socket}>
      { children }
    </SocketContext.Provider>
  )
}