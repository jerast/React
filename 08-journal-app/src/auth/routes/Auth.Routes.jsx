import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, SigninPage } from '@/auth/pages';

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path="login" element={ <LoginPage /> } />
			<Route path="register" element={ <SigninPage /> } />

			<Route path="/*" element={ <Navigate to="/" /> } />
		</Routes>
	);
};
