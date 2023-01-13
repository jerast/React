// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const FirebaseConfig = {
	apiKey: 'AIzaSyAQxkS1X0WPb03grvhKjzc8LkTq0bS5Hpk',
	authDomain: 'react-redux-7f046.firebaseapp.com',
	projectId: 'react-redux-7f046',
	storageBucket: 'react-redux-7f046.appspot.com',
	messagingSenderId: '503487681862',
	appId: '1:503487681862:web:72ba55fb65ffa241f10147',
};

// Initialize Firebase
export const FirebaseApp = initializeApp( FirebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp ); 