import { useContext } from 'react'
import { SocketContext } from '../context/SocketContext'

export const ConnectionStatus = () => {
  const { isConnected } = useContext( SocketContext )
  
  return (
    <p>
      Service status:
      {
        isConnected
          ? <span className="text-success"> Online</span>
          : <span className="text-danger"> Offline</span>
      }
    </p>
  )
}