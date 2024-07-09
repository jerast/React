export const getCurrents = async () => {
  const URL = import.meta.env.VITE_SOCKET_PATH ?? 'http://localhost:1234';

  try {
    const resp = await fetch(`${URL}/currents`)
    const data = await resp.json()
    return data.tickets
  } 
  catch (error) {
    console.log('Something with API fetch goes wrong')
    return []
  }
}