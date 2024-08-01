import { SocketContext } from '@app/context/SocketContext'
import { useSocket } from '@app/hooks/useSocket'

export const SocketProvider = ({ children }) => {
  const socket = useSocket()
  
  return (
    <SocketContext.Provider value={socket}>
      { children }
    </SocketContext.Provider>
  )
}