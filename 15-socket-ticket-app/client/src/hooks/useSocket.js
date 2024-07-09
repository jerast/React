import { useEffect, useState } from 'react'
import { socket } from '../socket'
import { getCurrents } from '../helpers/getCurrents'

export const useSocket = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [lastTicket, setLastTicket] = useState(null)
  const [currentTicket, setCurrentTicket] = useState(null)
  const [lastTicketsList, setLastTicketsList] = useState([])

  useEffect(() => {
    socket.on('connect', () => setIsConnected(true))
    socket.on('disconnect', () => setIsConnected(false))
    socket.on('ticket-list-updated', (list) => setLastTicketsList(list))

    return () => {
      socket.off('connect')
      socket.off('disconnect')
      socket.off('ticket-list-updated')
    }
  }, [socket])

  useEffect(() => {
    // getCurrents().then(response => {setLastTicketsList(response.tickets)})
    getCurrents().then(setLastTicketsList)
  }, [])

  const onNewTicket = () => 
    // socket.emit('get-new-ticket', null, (newTicket) => setLastTicket(newTicket))
    socket.emit('get-new-ticket', null, setLastTicket)

  const onNextTicket = (user) => 
    // socket.emit('asign-next-ticket', user, (asignedTicket) => setCurrentTicket(asignedTicket))
    socket.emit('asign-next-ticket', user, setCurrentTicket)

  return {
    isConnected,
    lastTicket,
    currentTicket,
    lastTicketsList,
    onNewTicket,
    onNextTicket,
  }
}