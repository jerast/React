import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { addNewEmptyNote, startSaving, setActiveNote, setNotes, finishSaving, updateActiveNote, setPhotosToActiveNote, deleteNoteById } from '@/store/journal/journal.Slice';
import { FirebaseDB } from '@/firebase/config';
import { fileUpload, loadNotes } from '@/journal/helpers';

export const startNewNote = () => {
	return async (dispatch, getState) => {

		dispatch( startSaving() );

		const { uid } = getState().auth;

		const newNote = {
			title: '',
			body: '',
			date: new Date().getTime(),
			imageURLs: [],
		}

		const newDoc = doc( collection(FirebaseDB, `${ uid }/journal/notes`) )
		const response = await setDoc( newDoc, newNote );

		newNote.id = newDoc.id;

		dispatch( addNewEmptyNote(newNote) );
		dispatch( setActiveNote(newNote) );
		dispatch( finishSaving() );
	};
};

export const startLoadingNotes = () => {
	return async (dispatch, getState) => {

		const { uid } = getState().auth;
		if ( !uid ) throw new Error('The user UID doesnt exist');
		
		const notes = await loadNotes( uid );

		dispatch( setNotes(notes) );
	};
};

export const startSaveNote = () => {
	return async (dispatch, getState) => {
		
		dispatch( startSaving() );

		const { uid } = getState().auth;
		const { active: note } = getState().journal;

		const noteToFireStore = { ...note };
		delete noteToFireStore.id;

		const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );
		await setDoc( docRef, noteToFireStore, { merge: true } );

		dispatch( updateActiveNote(note) );
		dispatch( finishSaving() );
	};
};

export const startUploadingFiles = (files = []) => {
	return async (dispatch, getState) => {

		dispatch( startSaving() );

		const fileUploadPromises = [];
		for (const file of files) {
			fileUploadPromises.push( fileUpload(file) );
		};
		const photosURLs = await Promise.all(fileUploadPromises);

		dispatch( setPhotosToActiveNote( photosURLs ) );
		dispatch( finishSaving() );
	};
};

export const startDeletingNote = () => {
	return async (dispatch, getState) => {
		dispatch( startSaving() );

		const { uid } = getState().auth;
		const { active: note } = getState().journal;

		const docRef = doc(FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
		await deleteDoc( docRef );

		dispatch( deleteNoteById(note.id) );
		dispatch( finishSaving() );
	};
};
