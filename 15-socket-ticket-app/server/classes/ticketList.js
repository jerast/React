import { Ticket } from './ticket.js';

export class TicketList {
  
  constructor () {
    this.lastNumber = 0
    this.pendings = []
    this.asigned = []
  }

  get nextNumber () {
    this.lastNumber++
    return this.lastNumber
  }

  get lastThirteen () {
    return this.asigned.slice(0, 13)
  }

  createTicket = () => {
    const newTicket = new Ticket( this.nextNumber )
    this.pendings.push( newTicket )
    return newTicket
  }

  asignTicket = ({ agent, desktop }) => {
    if ( this.pendings.length === 0 ) return

    const nextTicket = this.pendings.shift();
    
    nextTicket.agent = agent
    nextTicket.desktop = desktop

    this.asigned.unshift( nextTicket )

    return nextTicket
  }

}
