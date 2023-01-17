// Import the functions you need from the SDKs you need
import { getEnvironments } from '@/helpers';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore/lite";

const { 
	VITE_APIKEY,
	VITE_AUTHDOMAIN,
	VITE_PROJECTID,
	VITE_STORAGEBUCKET,
	VITE_MESSAGINGSENDERID,
	VITE_APPID 
} = getEnvironments();

//  Set Firebase Environment
const FirebaseConfig = {
	apiKey: VITE_APIKEY,
	authDomain: VITE_AUTHDOMAIN,
	projectId: VITE_PROJECTID,
	storageBucket: VITE_STORAGEBUCKET,
	messagingSenderId: VITE_MESSAGINGSENDERID,
	appId: VITE_APPID
};

// Initialize Firebase
export const FirebaseApp = initializeApp( FirebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp ); 