import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "@/api"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent, onLoadEvents } from "@/store"
import { eventDateConverter } from "@/helpers"
import { default as Swal } from "sweetalert2"

export const useCalendarStore = () => {

   const { events, activeEvent } = useSelector( state => state.calendar )
   const { user } = useSelector( state => state.auth )
   const dispatch = useDispatch()

   const setActiveEvent = ( calendarEvent ) => {
      dispatch( onSetActiveEvent(calendarEvent) )
   }

   const startLoadingEvents = async () => {
      try {
         const { data } = await calendarApi.get('/events')
         const  convertedEvents = (data.events).map( eventDateConverter )
         dispatch( onLoadEvents(convertedEvents) )
      } catch (error) {
         Swal.fire('Algo ha fallado', 'Fallo la carga de los eventos, por favor recarga la página.', 'error')
      }
   }

   const startCreatingEvent = async ( calendarEvent ) => {
      const { data } = await calendarApi.post('/events', calendarEvent)
      dispatch( onAddNewEvent({ ...calendarEvent, id: data.event.id, user }) )
   }

   const startUpdatingEvent = async ( calendarEvent ) => {
      await calendarApi.put(`/events/${ calendarEvent.id }`, calendarEvent)
      dispatch( onUpdateEvent({ ...calendarEvent, user }) )
   }

   const startSavingEvent = async ( calendarEvent ) => {
      try {
         ( calendarEvent?.id )
            ? await startUpdatingEvent( calendarEvent )
            : await startCreatingEvent( calendarEvent )
      } 
      catch ({ response }) {
         Swal.fire('Error al guardar', response.data.message, 'error')
      }
   }

   const startDeletingEvent = async () => {
      try {
         await calendarApi.delete(`/events/${ activeEvent.id }`)
         dispatch( onDeleteEvent() )
      } 
      catch ({ response }) {
         Swal.fire('Algo ha fallado', response?.data?.message, 'error')
      }
   }

   return {
      // Properties
      events,
      activeEvent,
      hasEventSelected: !!activeEvent, 

      // Methods
      setActiveEvent,
      startLoadingEvents,
      startSavingEvent,
      startDeletingEvent,
   }
}