import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-Context/MainApp';

describe('Testing on <MainApp />', () => {

	test('should display <HomePAge />', () => {
		render(
			<MemoryRouter>
				<MainApp />
			</MemoryRouter>
		);

      expect( screen.getByText('HomePage') ).toBeTruthy();
	});

	test('should display <LoginPage />', () => {
		render(
			<MemoryRouter initialEntries={['/login']}>
				<MainApp />
			</MemoryRouter>
		);

      expect( screen.getByText('LoginPage') ).toBeTruthy();
	});

	test('should display <AboutPage />', () => {
		render(
			<MemoryRouter initialEntries={['/about']}>
				<MainApp />
			</MemoryRouter>
		);

      expect( screen.getByText('AboutPage') ).toBeTruthy();
	});

	test('should display <NotFoundPage /> when url is not finded', () => {
		render(
			<MemoryRouter initialEntries={['/abc']}>
				<MainApp />
			</MemoryRouter>
		);

      expect( screen.getByText('404') ).toBeTruthy();
	});

});
