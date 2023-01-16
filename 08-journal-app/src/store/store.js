import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '@/store/auth';
import { journalSlice } from '@/store/journal';

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		journal: journalSlice.reducer,
	},
});
