import { configureStore } from '@reduxjs/toolkit'
import { calendarSlice, interfaceSlice } from '@/store'

export const store = configureStore({
   reducer: {
      calendar: calendarSlice.reducer,
      interface: interfaceSlice.reducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
   }) 
})