import { useDispatch, useSelector } from 'react-redux'
import { onOpenDateModal, onCloseDateModal } from '@/store'

export const useInterfaceStore = () => {

   const { isDateModalOpen, lastView } = useSelector( state => state.interface )
   const dispatch = useDispatch()

   const openDateModal = () => {
      dispatch( onOpenDateModal() )
   }

   const closeDateModal = () => {
      dispatch( onCloseDateModal() )
   }

   const setLastView = (view) => {
      localStorage.setItem('lastView', view)
   }

   return {
      // Properties
      isDateModalOpen,
      lastView,

      // Methods
      openDateModal,
      closeDateModal,
      setLastView,
   }
}