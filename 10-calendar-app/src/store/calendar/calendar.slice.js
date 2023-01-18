import { createSlice } from '@reduxjs/toolkit'
import { addHours } from 'date-fns'

const tempEvent = {
   _id: new Date().getTime(),
   title: 'Boss birthday',
   notes: 'Purchase the cake',
   start: new Date(),
   end: addHours( new Date(), 2 ),
   user: {
      _id: '123',
      name: 'Jose'
   }
}

export const calendarSlice = createSlice({
   name: 'name',
   initialState: {
      events: [ tempEvent ],
      activeEvent: null
   },
   reducers: {
      onSetActiveEvent: (state, { payload }) => {
         state.activeEvent = payload
      },
      onAddNewEvent: (state, { payload }) => {
         state.events.push( payload )
         state.activeEvent = null
      },
      onUpdateNewEvent: (state, { payload }) => {
         state.events = state.events.map( event => 
            event._id !== payload._id 
               ? event 
                : payload 
         )
         state.activeEvent = null
      },
      onDeleteEvent: (state) => {
         if ( state.activeEvent ) {
            state.events = state.events.filter( event => event._id !== state.activeEvent._id )
            state.activeEvent = null
         }
      },
   },
})

export const {
   onSetActiveEvent,
   onAddNewEvent,
   onUpdateNewEvent,
   onDeleteEvent,
} = calendarSlice.actions