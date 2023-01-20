import { configureStore } from '@reduxjs/toolkit'
import { authSlice, calendarSlice, interfaceSlice } from '@/store'

export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      calendar: calendarSlice.reducer,
      interface: interfaceSlice.reducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
   }) 
})