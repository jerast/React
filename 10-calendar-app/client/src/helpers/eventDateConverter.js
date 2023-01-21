// import { parseISO } from "date-fns"

export const eventDateConverter = ( calendarEvent ) => ({
   ...calendarEvent,
   start: new Date( calendarEvent.start ),
   end: new Date( calendarEvent.end )
})