import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FisrtApp />', () => {
	
	const title = 'Hola, soy Jerast';
	const subtitle = 'Soy un subtitulo';

	test('Debe de hacer match con el snapshot', () => {
		const { container } = render( <FirstApp title={ title } /> );
		expect( container ).toMatchSnapshot();
	});

	test('Debe de mostrar el mensaje "Hola, soy Jerast"', () => {
		render( <FirstApp title={ title } /> );
		expect( screen.getByText(title) ).toBeTruthy();
	});

	test('Debe mostrar el título en un h1', () => {
		render( <FirstApp title={ title } /> );
		expect( screen.getByRole('heading', { level: 1 }).textContent ).toContain( title );
	});

	test('Debe de mostrar el subtitlulo envaido por props', () => {
		render( <FirstApp title={ title } subtitle={ subtitle } /> );
		expect( screen.getAllByText(subtitle).length ).toBe( 2 );
	});

});
