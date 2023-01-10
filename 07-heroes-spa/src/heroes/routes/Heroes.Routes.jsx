import { Navigate, Route, Routes } from 'react-router-dom';
import { DcPage, HeroPage, MarvelPage, SearchPage } from '@/heroes';
import { Navbar } from '@/ui';

export const HeroesRoutes = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/marvel" element={ <MarvelPage /> } />
				<Route path="/dc" element={ <DcPage /> } />

				<Route path="/search" element={ <SearchPage /> } />
				<Route path="/hero/:id" element={ <HeroPage /> } />

				<Route path="/" element={ <Navigate to="/marvel" /> } />
				<Route path="*" element={ <Navigate to="/login" /> } />
			</Routes>
		</>
	);
};
