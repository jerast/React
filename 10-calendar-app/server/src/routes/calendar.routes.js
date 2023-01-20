import { Router } from 'express';
import { check } from 'express-validator';
import { validateJWT } from '../middlewares/validate_jwt.js';
import { validateRequest } from '../middlewares/validate_request.js';
import { isDate } from '../middlewares/isDate.js';
import {
	getEvents,
	createEvent,
	updateEvent,
	deleteEvent,
} from '../controllers/calendar.controllers.js';

const router = Router();

const validate = {
	title: check('title', 'el nombre es obligatorio').not().isEmpty(),
	start: check('start', 'Fecha de inicio es obligatoria').custom(isDate),
	end: check('end', 'Fecha de inicio es obligatoria').custom(isDate),
};

router.use(validateJWT);

router.get('/', getEvents);
router.post(
	'/', 
	[
		validate.title, 
		validate.start, 
		validate.end, 
		validateRequest
	], 
	createEvent,
);
router.put(
	'/:id', 
	[
		validate.title, 
		validate.start, 
		validate.end, 
		validateRequest
	], 
	updateEvent,
);
router.delete('/:id', deleteEvent);

export default router;
