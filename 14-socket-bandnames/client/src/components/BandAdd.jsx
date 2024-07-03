import { useContext, useState } from 'react'
import { SocketContext } from '../context/SocketContext'

export const BandAdd = () => {
  const { onAdd } = useContext( SocketContext )
  const [newBandName, setNewBandName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!newBandName) return

    onAdd(newBandName)
    setNewBandName('')
  }

  const handleAddValueChange = (event) => 
    setNewBandName(event.target.value)

  return (
    <>
      <h3>Agregar Banda</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Nuevo nombre de Banda"
          value={newBandName}
          onChange={handleAddValueChange}
        />
      </form>
    </>
  )
}