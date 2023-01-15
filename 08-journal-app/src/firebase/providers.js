import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from '@/firebase';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
	try {
		const response = await signInWithPopup( FirebaseAuth, googleProvider );
		const { displayName, email, photoURL, uid } = response.user;

		return { 
			ok: true,
			displayName, 
			email, 
			photoURL, 
			uid,
		};
	} catch (error) {

		return {
			ok: false,
			errorMessage: error.message,
		}
	}
}

export const signInWithEmailPassword = async ({displayName, email, password}) => {
	try {
		const response = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
		const { uid, photoURL } = response.user;

		await updateProfile( FirebaseAuth.currentUser, { displayName });

		return { 
			ok: true,
			displayName, 
			email, 
			photoURL, 
			uid,
		};
	} catch (error) {

		return {
			ok: false,
			errorMessage: error.message,
		}
	}
}

export const loginWithEmailPassword = async ({email, password}) => {
	try {
		const response = await signInWithEmailAndPassword(FirebaseAuth, email, password);
		const { displayName, email: userEmail, photoURL, uid } = response.user;

		return { 
			ok: true,
			displayName, 
			email: userEmail, 
			photoURL, 
			uid,
		};
	} catch (error) {
		
		return {
			ok: false,
			errorMessage: error.message,
		}
	}
}

export const logoutFirebase = async () => {
	return await FirebaseAuth.signOut();
}