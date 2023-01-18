import { createSlice } from '@reduxjs/toolkit'

export const interfaceSlice = createSlice({
   name: 'interface',
   initialState: {
      isDateModalOpen: false,
      lastView: localStorage.getItem('lastView') || 'month',
   },
   reducers: {
      onOpenDateModal: (state) => {
         state.isDateModalOpen = true
      },
      onCloseDateModal: (state) => {
         state.isDateModalOpen = false
      },
   },
})

export const { 
   onOpenDateModal, 
   onCloseDateModal,
} = interfaceSlice.actions