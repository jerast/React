import { createSlice } from '@reduxjs/toolkit'

export const calendarSlice = createSlice({
   name: 'name',
   initialState: {
      isLoading: true,
      events: [],
      activeEvent: null
   },
   reducers: {
      onSetActiveEvent: (state, { payload }) => {
         state.activeEvent = payload
      },
      onLoadEvents: (state, { payload = [] }) => {
         state.isLoading = false,
         state.events = payload
      },
      onAddNewEvent: (state, { payload }) => {
         state.events.push( payload )
         state.activeEvent = null
      },
      onUpdateEvent: (state, { payload }) => {
         state.events = state.events.map( event => 
            event.id !== payload.id 
               ? event 
               : payload 
         )
         state.activeEvent = null
      },
      onDeleteEvent: (state) => {
         if ( state.activeEvent ) {
            state.events = state.events.filter( event => event.id !== state.activeEvent.id )
            state.activeEvent = null
         }
      },
      onResetValues: (state) => {
         state.isLoading = true
         state.events = []
         state.activeEvent = null
      },
   },
})

export const {
   onSetActiveEvent,
   onLoadEvents,
   onAddNewEvent,
   onUpdateEvent,
   onDeleteEvent,
   onResetValues,
} = calendarSlice.actions