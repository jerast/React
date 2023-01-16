import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
	name: 'journal',
	initialState: {
		isSaving: false,
		messageSaved: '',
		notes: [],
		active: null,
	},
	reducers: {
		startSaving: (state) => {
			state.isSaving = true;
		},
		finishSaving: (state) => {
			state.isSaving = false;
		},
		addNewEmptyNote: (state, { payload }) => {
			state.notes.push( payload );
		},
		setActiveNote: (state, { payload }) => {
			state.active = payload;
			state.messageSaved = '';
		},
		updateActiveNote: (state, { payload }) => {
			state.notes = state.notes.map( note => 
				note.id === payload.id ? payload : note 
			);
			state.messageSaved = `${ payload.title }, Updated!`; 
		},
		setPhotosToActiveNote: (state, { payload }) => {
			state.active.imageURLs = [ ...state.active.imageURLs, ...payload ]
		},
		setNotes: (state, { payload }) => {
			state.notes = payload;
		},
		resetState: (state) => {
			state.isSaving = false;
			state.messageSaved = '';
			state.notes = [];
			state.active = null;
		},
		deleteNoteById: (state, { payload }) => {
			state.notes = state.notes.filter( note => note.id !== payload );
			state.active = null;
		},
	},
});

export const { 
	startSaving, 
	finishSaving, 
	addNewEmptyNote, 
	setActiveNote, 
	clearActiveNote, 
	updateActiveNote, 
	setPhotosToActiveNote, 
	setNotes, 
	resetState, 
	deleteNoteById 
} = journalSlice.actions;
