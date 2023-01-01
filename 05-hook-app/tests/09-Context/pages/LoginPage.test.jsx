import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../../src/09-Context/context/UserContext';
import { LoginPage } from '../../../src/09-Context/pages';

describe('Testing on <LoginPage />', () => {

   const user = {
		id: 123,
		name: 'Jerast',
		email: 'jerast@github.com',
	};

	test('should display the component without user', () => {
		render(
			<UserContext.Provider value={{ user: null }}>
				<LoginPage />
			</UserContext.Provider>
		);
      
      expect( screen.getByRole('pre').textContent ).toBe('null');
	});

   test('should call setUser() function when click "Set User" button', () => {
      const setUserMock = jest.fn();
      render(
			<UserContext.Provider value={{ user: null, setUser: setUserMock }}>
				<LoginPage />
			</UserContext.Provider>
		);

      const button = screen.getByRole('button');
      fireEvent.click( button );

      expect( setUserMock ).toHaveBeenCalledWith( user );
   });

});