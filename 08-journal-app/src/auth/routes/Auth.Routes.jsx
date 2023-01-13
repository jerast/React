import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, SigninPage } from '@/auth';

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path="login" element={ <LoginPage /> } />
			<Route path="register" element={ <SigninPage /> } />

			<Route path="/*" element={ <Navigate to="/" /> } />
		</Routes>
	);
};
