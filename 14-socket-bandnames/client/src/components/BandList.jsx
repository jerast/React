import { useState, useEffect } from 'react'
import { socket } from '../socket'


export const BandList = ({ bandList }) => {
  const [bands, setBands] = useState([])

  useEffect(() => { 
    setBands(bandList) 
  }, [bandList])


  const handleRemove = (id) => {
    socket.emit('remove', { id })
  }

  const handleIncreaseVotes = (id) => {
    socket.emit('increase-vote', { id })
  }
  
  const handleDecreaseVotes = (id) => {
    socket.emit('decrease-vote', { id })
  }

  const handleChangeName = (event, id) => {
    const newName = event.target.value

    setBands( bands => 
      bands.map(band => {
        if (band.id === id) {
          band.name = newName
        }
        return band
      }) 
    )
  }

  const handleChangeNameBlur = (id, name) => {
    socket.emit('change-name', { id, name })
  }

  return (
    <>
      <h3>Bandas Actuales</h3>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
            <th>Votes</th>
            <th></th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            bands.map(band => (
              <tr key={band.id}>
                <th>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={band.name}
                    onChange={(event) => handleChangeName(event, band.id)}
                    onBlur={() => handleChangeNameBlur(band.id, band.name)}
                  />
                </th>
                <th>
                  <button 
                    className="btn btn-outline-secondary rounded-circle btn-sm"
                    onClick={() => handleIncreaseVotes(band.id)}
                  > 
                    +1
                  </button>  
                </th>
                <th className="text-center">
                  <h5>{band.votes}</h5>
                </th>
                <th>
                  <button 
                    className="btn btn-outline-secondary rounded-circle btn-sm"
                    onClick={() => handleDecreaseVotes(band.id)}
                    disabled={!band.votes}
                  > 
                    -1
                  </button>  
                </th>
                <th>
                  <button 
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemove(band.id)}
                  >
                    Remove
                  </button>
                </th>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}