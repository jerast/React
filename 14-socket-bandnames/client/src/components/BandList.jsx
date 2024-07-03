import { useState, useEffect, useContext } from 'react'
import { SocketContext } from '../context/SocketContext'

export const BandList = () => {
  const { bandList, onRemove, onIncreaseVotes, onDecreaseVotes, onChangeName } = useContext( SocketContext )
  const [bands, setBands] = useState([])

  useEffect(() => { setBands(bandList) }, [bandList])

  const handleOnChange = (event, id) => {
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
                    onChange={(event) => handleOnChange(event, band.id)}
                    onBlur={() => onChangeName(band.id, band.name)}
                  />
                </th>
                <th>
                  <button 
                    className="btn btn-outline-secondary rounded-circle btn-sm"
                    onClick={() => onIncreaseVotes(band.id)}
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
                    onClick={() => onDecreaseVotes(band.id)}
                    disabled={!band.votes}
                  > 
                    -1
                  </button>  
                </th>
                <th>
                  <button 
                    className="btn btn-danger btn-sm"
                    onClick={() => onRemove(band.id)}
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