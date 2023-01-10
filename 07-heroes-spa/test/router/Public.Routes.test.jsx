import { render, screen } from '@testing-library/react';
import { AuthContext } from '@/auth';
import { PublicRoutes } from '@/router/Public.Routes';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Testing on <PublicRoutes />', () => {

	test('should display children if is not authenticated', () => {
		const contextValue = { 
			logged: false 
		};
		render(
			<AuthContext.Provider value={{ authState: contextValue }}>
				<PublicRoutes>
					<h1>Public Route</h1>
				</PublicRoutes>
			</AuthContext.Provider>
		);

		expect( screen.getByText('Public Route') ).toBeTruthy();
	});
	
	test('should Navigate if is authenticated', () => {
		const contextValue = { 
			logged: true,
			user: {
				name: 'User',
				id: 123,
			}
		};
		render(
			<AuthContext.Provider value={{ authState: contextValue }}>
				<MemoryRouter initialEntries={['/login']}>

					<Routes>
						<Route path='login' element={ <PublicRoutes /> } />
						<Route path='marvel' element={ <h1>Marvel Page</h1> } />
					</Routes>

				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect( screen.getByText('Marvel Page') ).toBeTruthy();
	});

});
