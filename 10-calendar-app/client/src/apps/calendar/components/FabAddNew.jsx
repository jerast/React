import { useAuthStore, useCalendarStore, useInterfaceStore } from "@/hooks"
import { addHours } from "date-fns"
import { useSelector } from "react-redux"

export const FabAddNew = () => {

   const { user } = useAuthStore()
   const { openDateModal } = useInterfaceStore()
   const { setActiveEvent } = useCalendarStore()

   const onClickNew = () => {
      setActiveEvent({
         title: '',
         notes: '',
         start: new Date(),
         end: addHours( new Date(), 2 ),
         user
      })
      openDateModal()
   }

   return (
      <button
         className="btn btn-primary fab"
         onClick={ onClickNew }
      >
         <i className="fas fa-plus" />
      </button>
   )
}