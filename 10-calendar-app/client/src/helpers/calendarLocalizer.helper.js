import { dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay, } from 'date-fns'
import { enUS, es } from 'date-fns/locale'

const locales = {
	// 'en-US': enUS,
   'es': es,
}

export const CalendarLocalizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales,
})