import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '@/auth/routes';
import { JournalRoutes } from '@/journal/routes';
import { CheckingAuth } from '@/interface/components';
import { useCheckAuth } from '@/hooks';

export const AppRoutes = () => {

	const status = useCheckAuth();

	if ( status === 'checking' ) 
		return <CheckingAuth />;

	return (
		<Routes>
			{
				(status == 'authenticated')
					? <Route path="/*" element={ <JournalRoutes /> } />
					: <Route path="auth/*" element={ <AuthRoutes /> } />
			}
			<Route path="/*" element={ <Navigate to="auth/login" /> } />
		</Routes>
	);
};
