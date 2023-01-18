import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateNewEvent } from "@/store"
import { useDispatch, useSelector } from "react-redux"

export const useCalendarStore = () => {

   const { events, activeEvent } = useSelector( state => state.calendar )
   const dispatch = useDispatch()

   const setActiveEvent = ( calendarEvent ) => {
      dispatch( onSetActiveEvent(calendarEvent) )
   }

   const startSavingEvent = async ( calendarEvent ) => {
      ( calendarEvent?._id )
         ? dispatch( onUpdateNewEvent({ ...calendarEvent }) )
         : dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }) )
   }

   const startDeletingEvent = async () => {
      dispatch( onDeleteEvent() )
   }

   return {
      // Properties
      events,
      activeEvent,
      hasEventSelected: !!activeEvent, 

      // Methods
      setActiveEvent,
      startSavingEvent,
      startDeletingEvent
   }
}