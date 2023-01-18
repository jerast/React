import { useCalendarStore, useInterfaceStore } from "@/hooks"
import { addHours } from "date-fns"

export const FabAddNew = () => {

   const { openDateModal } = useInterfaceStore()
   const { setActiveEvent } = useCalendarStore()

   const onClickNew = () => {
      setActiveEvent({
         title: '',
         notes: '',
         start: new Date(),
         end: addHours( new Date(), 2 ),
         user: {
            _id: '123',
            name: 'Jose'
         }
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