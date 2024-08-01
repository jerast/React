export const dateFormat = (d) => {
  // Crear un objeto Date a partir de la fecha ISO
  const date = new Date(d)

  // Obtener las partes individuales de la fecha
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const month = date.toLocaleString('en-US', { month: 'long' })
  const day = date.getDate()

  // Convertir las horas al formato de 12 horas
  const period = hours >= 12 ? 'PM' : 'AM'
  const formattedHours = hours % 12 || 12 // Convertir 0 a 12 para medianoche

  // Asegurar que los minutos tengan dos dígitos
  const formattedMinutes = minutes.toString().padStart(2, '0')

  // Formatear la fecha
  const formattedDate = `${formattedHours}:${formattedMinutes} ${period} | ${month} ${day}`

  return formattedDate
}