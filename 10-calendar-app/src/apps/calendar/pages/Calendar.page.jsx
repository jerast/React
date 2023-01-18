import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { Navbar, CalendarEvent, CalendarModal, FabAddNew } from '@Calendar'
import { calendarMessages, CalendarLocalizer } from '@/helpers'
import { useCalendarStore, useInterfaceStore } from '@/hooks'
import { FabDelete } from '..'

export const CalendarPage = () => {
	
	const { events, setActiveEvent } = useCalendarStore()
	const { lastView, openDateModal, setLastView } = useInterfaceStore()
	
	const eventStyleGetter = ( event, start, end, isSelected ) => {
		return {
			style: {
				backgroundColor: '#347CF7',
				borderRadius: '0px',
				border: 'none',
				opacity: 0.8,
				color: 'white'
			}
		}
	}
	
	const onSelect = ( event ) => {
		setActiveEvent( event )
	}

	const onViewChanged = ( event ) => {
		setLastView( event )
	}

	return (
		<>
			<Navbar />
			<Calendar
				defaultView={ lastView }
				localizer={ CalendarLocalizer }
				events={ events }
				startAccessor="start"
				endAccessor="end"
				style={{ height: 'calc( 100vh - 80px )' }}
				messages={ calendarMessages() }
				eventPropGetter={ eventStyleGetter }
				components={{
					event: CalendarEvent
				}}
				onDoubleClickEvent={ openDateModal }
				onSelectEvent={ onSelect }
				onView={ onViewChanged }
			/>
			<CalendarModal />
			<FabDelete /> 
			<FabAddNew />
		</>
	)
}