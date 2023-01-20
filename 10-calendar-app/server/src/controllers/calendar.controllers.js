import { responseError } from '../middlewares/responseError.js';
import Event from '../models/event.models.js';


export const getEvents = async (request, response) => {
	try {
		const events = await Event.find().populate('user', 'name');
			
		return response.json({
			ok: true,
			events,
		});
	} catch (error) {
		responseError(response, error);
	}
};

export const createEvent = async (request, response) => {
	try {
		const event = new Event(request.body);
		event.user = request.uid;
		await event.save();

		return response.json({
			ok: true,
			event,
		});
	} catch (error) {
		responseError(response, error);
	}
};

export const updateEvent = async (request, response) => {
	try {
		const { id } = request.params;
		const { uid } = request;

		const event = await Event.findById( id );
		if ( !event ) return response.status(404).json({
			ok: false,
			message: `Event not found with id: ${ id }`,
		});

		if ( event.user.toString() !== uid ) return response.status(401).json({
			ok: false,
			message: 'Do not have permissions for this action.'
		});

		const newEvent = {
			...request.body,
			user: uid
		};

		const updatedEvent = await Event.findByIdAndUpdate( id, newEvent, { new: true } );

		return response.json({
			ok: true,
			event: updatedEvent,
		});
	} catch (error) {
		responseError(response, error);
	}
};

export const deleteEvent = async (request, response) => {
	try {
		const { id } = request.params;
		const { uid } = request;

		const event = await Event.findById( id );
		if ( !event ) return response.status(404).json({
			ok: false,
			message: `Event not found with id: ${ id }`,
		});

		if ( event.user.toString() !== uid ) return response.status(401).json({
			ok: false,
			message: 'Do not have permissions for this action.'
		});

		await Event.findByIdAndDelete( id );

		return response.json({
			ok: true 
		});
	} catch (error) {
		responseError(response, error);
	}
};
