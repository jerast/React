import { checkingCredentials, login, logout } from '@/store';
import { loginWithEmailPassword, logoutFirebase, signInWithEmailPassword, signInWithGoogle } from '@/firebase';

export const checkingAuthentication = (email, password) => {
	return async (dispatch) => {
		dispatch( checkingCredentials() );
	};
};

export const startGoogleSignIn = () => {
	return async (dispatch) => {
		dispatch( checkingCredentials() );

		const response = await signInWithGoogle();

		if ( !response.ok )
			return dispatch( logout(response.errorMessage) );

		dispatch( login(response) );
	};
};

export const startCreatingUserWithEmailPassword = ({ displayName, email, password }) => {
	return async (dispatch) => {
		dispatch( checkingCredentials() );

		const response = await signInWithEmailPassword({ displayName, email, password });

		if ( !response.ok )
		return dispatch( logout(response.errorMessage) );
		
		dispatch( login(response) );
	}
}

export const startLoginWithEmailPassword = ({email, password }) => {
	return async (dispatch) => {
		dispatch( checkingCredentials() );

		const response =  await loginWithEmailPassword({email, password });

		if ( !response.ok )
		return dispatch( logout(response.errorMessage) );

		dispatch( login(response) );
	}
}

export const startLogOut = () => {
	return async (dispatch) => {
		await logoutFirebase();

		dispatch( logout() );
	}
}