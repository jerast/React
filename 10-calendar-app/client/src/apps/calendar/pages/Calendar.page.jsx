import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { useEffect } from 'react'
import { Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from '@Calendar'
import { useAuthStore, useCalendarStore, useInterfaceStore } from '@/hooks'
import { calendarMessages, CalendarLocalizer } from '@/helpers'

export const CalendarPage = () => {
	
	const { user } = useAuthStore()
	const { events, setActiveEvent, startLoadingEvents } = useCalendarStore()
	const { lastView, openDateModal, setLastView } = useInterfaceStore()
	
	const eventStyleGetter = (event, start, end, isSelected) => {
		
		const isMyEvent = ( user.uid === event.user._id ) ||  ( user.uid === event.user.uid )

		return {
			style: {
				backgroundColor: isMyEvent ? '#347CF7' : '#465660',
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

	useEffect(
		() => {
			startLoadingEvents()
		}, 
	[])

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