import { responseError } from '../middlewares/responseError.js';
import { generateJWT } from '../jwt/jwt.js';
import User from '../models/user.models.js';
import bcrypt from 'bcryptjs';


export const createUser = async (request, response) => {

	const { email, password } = request.body;

	try {

		const validUser = await User.findOne({ email });
		if ( validUser ) return response.status(400).json({
			ok: true,
			message: 'This email is already used.',
		});

		const user = new User( request.body );
		user.password = bcrypt.hashSync( password, bcrypt.genSaltSync() );
		await user.save();

		const token = await generateJWT( user.id, user.name, user.email );

		return response.status(201).json({
			ok: true,
			user,
			token,
		});

	} catch (error) { responseError(response, error) }
};

export const loginUser = async (request, response) => {

	const { email, password } = request.body;

	try {

		const user = await User.findOne({ email });
		if ( !user ) return response.status(400).json({
			ok: false,
			message: 'User and Password are not correct.',
		});

		const validPassword = bcrypt.compareSync( password, user.password );
		if ( !validPassword ) return response.status(400).json({
			ok: false,
			message: 'User and Password are not correct.',
		});

		const token = await generateJWT( user.id, user.name, user.email );

		return response.json({
			ok: true,
			user: {
				uid: user._id,
				name: user.name,
				email: user.email
			},
			token,
		});

	} catch (error) { responseError(response, error) }
};

export const revalidateJWT = async (request, response) => {
	try {
		
		const { uid, name, email } = request;

		const token = await generateJWT( uid, name, email );

		return response.json({
			ok: true,
			user: {
				uid,
				name, 
				email
			},
			token,
		});

	} catch (error) { responseError(response, error) }
};
