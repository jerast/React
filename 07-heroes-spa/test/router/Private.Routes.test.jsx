import { render, screen } from '@testing-library/react';
import { AuthContext } from '@/auth';
import { PrivateRoutes } from '@/router/Private.Routes';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Testing on <PrivateRoutes />', () => {

	test('should display children if is authenticated', () => {
      Storage.prototype.setItem = jest.fn();

      const contextValue = { 
         logged: true,
         user: {
            name: 'User',
            id: 123,
         }
      };
		render(
			<AuthContext.Provider value={{ authState: contextValue }}>
				<MemoryRouter initialEntries={['/search?query=superman']}>
               <PrivateRoutes>
                  <h1>Private Route</h1> 
               </PrivateRoutes>
            </MemoryRouter>
			</AuthContext.Provider>
		);

      expect( screen.getByText('Private Route') ).toBeTruthy();
      expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/search?query=superman");
	});
   
   test('should Navigate if is not authenticated', () => {
      const contextValue = { 
         logged: false 
      };
      render(
			<AuthContext.Provider value={{ authState: contextValue }}>
				<MemoryRouter initialEntries={['/marvel']}>

               <Routes>
                  <Route path='marvel' element={ <PrivateRoutes /> } />
                  <Route path='login' element={ <h1>Login Page</h1> } />
               </Routes>

            </MemoryRouter>
			</AuthContext.Provider>
		);
      
      expect( screen.getByText('Login Page') ).toBeTruthy();
   });

});
