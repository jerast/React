import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '@/auth';
import { JournalRoutes } from '@/app';

export const AppRoutes = () => {
	return (
		<Routes>

			{/* Login y Registro */}
			<Route path="auth/*" element={ <AuthRoutes /> } />

			{/* JournalApp */}
			<Route path="/*" element={ <JournalRoutes /> } />

		</Routes>
	);
};
