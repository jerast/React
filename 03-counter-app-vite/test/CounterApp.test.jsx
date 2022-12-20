import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp />', () => {

	const initialValue = 10;

	test('should match the snapshot', () => {
		const { container } = render( <CounterApp value={ initialValue } /> );
		expect( container ).toMatchSnapshot();
	});

	test('should display the initial value of 100 ', () => {
		render( <CounterApp value={ 100 } /> );
		expect( screen.getByText(100) ).toBeTruthy();
	});

	test('should be increased with the +1 button', () => {
		render( <CounterApp value={ initialValue } /> );
		fireEvent.click( screen.getByText('+1') );
		expect( screen.getByText( initialValue + 1 ) ).toBeTruthy();
	});

	test('should be decreased with the -1 button', () => {
		render( <CounterApp value={ initialValue } /> );
		fireEvent.click( screen.getByText('-1') );
		expect( screen.getByText( initialValue - 1 ) ).toBeTruthy();
	});

	test('should reset the value to 0 with the reset button', () => {
		render( <CounterApp value={ initialValue } /> );
		fireEvent.click( screen.getByText('+1') );
		fireEvent.click( screen.getByText('+1') );
		fireEvent.click( screen.getByText('+1') );

		// fireEvent.click( screen.getByText('Reset') );
		// fireEvent.click( document.querySelectorAll('button')[2] );
		fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) );

		expect( screen.getByText( initialValue ) ).toBeTruthy();
	})

});