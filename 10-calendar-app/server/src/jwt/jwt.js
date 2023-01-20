import jwt from 'jsonwebtoken';
import { SECRET_JWT_SEED } from '../config.js';

export const generateJWT = (uid, name) => {
	return new Promise((resolve, reject) => {
		const payload = { uid, name };
		const options = { expiresIn: '2h' };

		jwt.sign( 
			payload, 
			SECRET_JWT_SEED, 
			options, 
			(err, token) => {
				(err) 
					? (reject('Could not generate token'), console.log( 'error token' ))
					: resolve( token );
			}
		);
	});
};
