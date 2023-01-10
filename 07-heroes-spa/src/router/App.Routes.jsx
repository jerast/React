import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '@/auth';
import { HeroesRoutes } from '@/heroes';
import { PrivateRoutes, PublicRoutes } from '@/router';

export const AppRoutes = () => {
	return (
		<>
			<Routes>
				<Route
					path="/login"
					element={
						<PublicRoutes>
							<LoginPage />
						</PublicRoutes>
					}
				/>
				<Route
					path="/*"
					element={
						<PrivateRoutes>
							<HeroesRoutes />
						</PrivateRoutes>
					}
				/>
			</Routes>
		</>
	);
};
