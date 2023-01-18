import { useEffect, useMemo, useState } from 'react'
import { differenceInSeconds } from 'date-fns'
import Swal from 'sweetalert2'
import Modal from 'react-modal'
import DatePicker, { registerLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'

import 'react-datepicker/dist/react-datepicker.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import { useCalendarStore, useInterfaceStore } from '@/hooks'

registerLocale('es', es)

const modalStyles = {
	content: {
	  top: '50%',
	  left: '50%',
	  right: 'auto',
	  bottom: 'auto',
	  marginRight: '-50%',
	  transform: 'translate(-50%, -50%)'
	}
}

Modal.setAppElement('#root')

export const CalendarModal = () => {

	const { activeEvent, startSavingEvent, setActiveEvent } = useCalendarStore() 
	const { isDateModalOpen, closeDateModal } = useInterfaceStore()

	const [ formValues, setFormValues ] = useState({
		title: '',
		notes: '',
		start: null,
		end: null,
	})
	const [ formSubmit, setFormSubmit ] = useState( false )

	const validClass = useMemo(
		() => {
			if ( !formSubmit ) {
				return ''
			}

			return ( !formValues.title ) ? 'is-invalid' : ''
		}, 
	[ formValues.title, formSubmit ])

	useEffect(
		() => {
			if ( activeEvent ) {
				setFormValues({ ...activeEvent })
			}
		}, 
	[activeEvent])

	const onFormChange = ({ target }) => {
		setFormValues({
			...formValues,
			[target.name]: target.value
		})
	}

	const onFormSubmit = async ( event ) => {
		event.preventDefault()
		setFormSubmit( true )

		const difference = differenceInSeconds( formValues.end, formValues.start )
		if( isNaN(difference) || difference <= 0 ) {
			Swal.fire( '¡Dates error!', 'Start hour should be low than end hour', 'error' )
			return
		}
		if ( !formValues.title ) {
			Swal.fire( '¡Void fields!', 'All fields need to be filled', 'error' )
			return
		}
		
		await startSavingEvent( formValues )
		closeDateModal()
		setFormSubmit( false )
	}

	const onDateChange = ( event, changing ) => {
		setFormValues({
			...formValues,
			[changing]: event
		})
	}

	const onCloseModal = () => {
		setActiveEvent( null )
		closeDateModal()
	}
	
	return (
		<Modal
			isOpen={ isDateModalOpen }
			onRequestClose={ onCloseModal }
			style={ modalStyles }
			className="modal"
			overlayClassName="modal-fondo"
			closeTimeoutMS={ 200 }
		>
			<h1>{ activeEvent?.title ? activeEvent?.title : 'New Event' }</h1>
			<hr />
			<form className="container" onSubmit={ onFormSubmit }>

				<h6 className="mb-3 block">Date and Hour</h6>
				<div className="form-group mb-2">
					<small id="emailHelp" className="form-text text-muted">Start</small>
					<DatePicker 
							className="form-control"
							selected={ formValues.start } 
							onChange={ (event) => onDateChange(event, 'start') }
							dateFormat="Pp"
							showTimeSelect
					/>
				</div>
				<div className="form-group mb-2">
					<small id="emailHelp" className="form-text text-muted">End</small>
					<DatePicker 
							className="form-control"
							minDate={ formValues.start }
							selected={ formValues.end } 
							onChange={ (event) => onDateChange(event, 'end') }
							dateFormat="Pp"
							showTimeSelect
					/>
				</div>

				<hr />

				<h6 className="mb-3 block">Title and notes</h6>
				<div className="form-group mb-2">
					<small id="emailHelp" className="form-text text-muted">Small Title</small>
					<input 
							type="text" 
							className={`form-control ${ validClass }`}
							placeholder="Título del evento"
							name="title"
							autoComplete="off"
							value={ formValues.title }
							onChange={ onFormChange } 
					/>
				</div>
				<div className="form-group mb-2">
					<small id="emailHelp" className="form-text text-muted">Additional Info</small>
					<textarea 
							type="text" 
							className="form-control"
							placeholder="Notas"
							rows="4"
							name="notes"
							value={ formValues.notes }
							onChange={ onFormChange }
					/>
				</div>

				<div className="d-flex justify-content-end">
					<button
						type="submit"
						className="btn btn-primary btn-block"
					>
						<i className="far fa-save me-2" />
						<span>Save</span>
					</button>
				</div>

			</form>
		</Modal>
	)
}