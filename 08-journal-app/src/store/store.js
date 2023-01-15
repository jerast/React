import { configureStore } from '@reduxjs/toolkit';
import { authSlice, journalSlice } from '@/store';

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		journal: journalSlice.reducer,
	},
});
