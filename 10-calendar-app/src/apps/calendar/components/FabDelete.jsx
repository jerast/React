import { useCalendarStore, useInterfaceStore } from "@/hooks"

export const FabDelete = () => {

   const { startDeletingEvent, hasEventSelected } = useCalendarStore()
   const { isDateModalOpen } = useInterfaceStore()

   const onClickDelete = async () => {
      await startDeletingEvent()
   }

   if ( !hasEventSelected || isDateModalOpen ) {
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