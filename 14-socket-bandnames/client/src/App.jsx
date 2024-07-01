import { useEffect, useState } from 'react'
import { BandAdd } from './components/BandAdd'
import { BandList } from './components/BandList'
import { socket } from './socket';

export const App = () => {
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [bandList, setBandList] = useState([])

  useEffect(() => {
    socket.on('connect', () => setIsConnected(true))
    socket.on('disconnect', () => setIsConnected(false))
    socket.on('get-all', data => setBandList(data))
  }, [socket])

  return (
    <div className="container">
      <div className="alert">
        <p>
          Service status:
          {
            isConnected
              ? <span className="text-success"> Online</span>
              : <span className="text-danger"> Offline</span>
          }
        </p>
      </div>

      <h1>BandNames</h1>
      <hr />

      <div className="row">
        <div className="col-8">
          <BandList bandList={bandList} />
        </div>
        <div className="col-4">
          <BandAdd />
        </div>
      </div>
    </div>
  )
}