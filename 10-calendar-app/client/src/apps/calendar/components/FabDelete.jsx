import { useAuthStore, useCalendarStore, useInterfaceStore } from "@/hooks"

export const FabDelete = () => {

   const { user } = useAuthStore()
   const { activeEvent, hasEventSelected, startDeletingEvent } = useCalendarStore()
   const { isDateModalOpen } = useInterfaceStore()

   const onClickDelete = async () => {
      await startDeletingEvent()
   }

   if ( !hasEventSelected || isDateModalOpen ) {
      return
   }

   if ( user.uid !== activeEvent?.user?._id ) {
      return
   }

   return (
      <button
         className="btn btn-danger fab-danger"
         onClick={ onClickDelete }
      >
         <i className="fas fa-trash-alt" />
      </button>
   )
}