import { AuthContext } from "@/auth/context/AuthContext";
import { AppRoutes } from "@/router/App.Routes";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('testing on <AppRouter />', () => {

   test('should display <LoginPage /> if is not authenticated', () => {
      const contextValue = { 
			logged: false
		};
		render(
			<AuthContext.Provider value={{ authState: contextValue }}>
				<MemoryRouter initialEntries={['/marvel']}>
					<AppRoutes />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect( screen.getAllByText('Login') ).toBeTruthy();
   });

	test('should display <MarvelPage /> if is autheticated', () => {
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
					<AppRoutes />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect( screen.getByRole('heading', { name: 'Marvel Comics' }) ).toBeTruthy();
		expect( screen.getAllByRole('card').length ).toBe( 10 );
	});

});