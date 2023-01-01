import { render, screen } from '@testing-library/react';
import { UserContext } from '../../../src/09-Context/context/UserContext';
import { HomePage } from '../../../src/09-Context/pages';

describe('Testing on < HomePage />', () => {

   const user = {
		id: 123,
		name: 'Jerast',
		email: 'jerast@github.com',
	};

	test('should display the component without user', () => {
		const { container } = render(
			<UserContext.Provider value={{ user: null }}>
				<HomePage />
			</UserContext.Provider>
		);

      expect( container.querySelector('p').textContent ).toBe('!');
      expect( container.querySelector('p').textContent ).not.toContain( user.name );
	});

   test('should display the component with user', () => {
      render(
			<UserContext.Provider value={{ user }}>
				<HomePage />
			</UserContext.Provider>
		);

      expect( screen.getByLabelText('p').textContent ).toContain( user.name );
   });

});
