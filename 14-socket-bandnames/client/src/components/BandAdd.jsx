import { useState } from "react"
import { socket } from "../socket"

export const BandAdd = () => {
  const [addValue, setAddValue] = useState('')

  const handleAdd = (event) => {
    event.preventDefault()

    socket.emit('add', { name: addValue })
  }

  const handleAddValueChange = (event) => {
    setAddValue(event.target.value)
  }


  return (
    <>
      <h3>Agregar Banda</h3>
      <form onSubmit={handleAdd}>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Nuevo nombre de Banda"
          value={addValue}
          onChange={handleAddValueChange}
        />
      </form>
    </>
  )
}