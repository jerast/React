import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "@/auth";
import { Navbar } from "@/ui";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedUseNavigate,
}));

describe('Testing on <Navbar />', () => {
   
   const authState = { 
      logged: true,
      user: {
         name: 'Jerast',
         id: 123,
      }
   };

   beforeEach(() => jest.clearAllMocks());

   test('should display the User name if is logged', () => {
		render(
			<AuthContext.Provider value={{ authState }}>
				<MemoryRouter>
					<Navbar />
				</MemoryRouter>
			</AuthContext.Provider>
		);

      expect( screen.getByText('Jerast') ).toBeTruthy();
   });

   test('should call onLogout and Navigate when button is clicked', () => {
      const onLogout = jest.fn();
		render(
			<AuthContext.Provider value={{ authState, onLogout }}>
				<MemoryRouter>
               <Navbar />
				</MemoryRouter>
			</AuthContext.Provider>
		);

      const logoutButton = screen.getByRole('button', { name: 'Logout' });
      fireEvent.click( logoutButton );

      expect( onLogout ).toHaveBeenCalled();
      expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', { replace: true });
   });

});