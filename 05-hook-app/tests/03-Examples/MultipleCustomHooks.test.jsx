import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-Examples/MultipleCustomHooks";
import { useCounter, useFetch } from "../../src/hooks";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Testing on <MultipleCustomHooks /> component', () => {
   
   const mockIncrement = jest.fn();
   useCounter.mockReturnValue({ 
      counter: 1,
      increment: mockIncrement,
   });

   beforeEach( () => jest.clearAllMocks() );


   test('should match the snapshot', () => {
      useFetch.mockReturnValue({ 
         data: null,
         isLoading: true,
      });
      const { container } = render( <MultipleCustomHooks /> );

      expect( container ).toMatchSnapshot();
   });

   test('should display the component by default', () => {
      useFetch.mockReturnValue({ 
         data: null,
         isLoading: true,
      });
      render( <MultipleCustomHooks /> );

      expect( screen.getByRole('img') ).toBeTruthy();
      expect( screen.getByRole('button', { name: 'Next Quote' }).disabled ).toBeTruthy();
   });

   test('should display a Quote', () => {
      const testingData = [{ author: 'Jerast', quote: 'Hola Mundo' }];
      useFetch.mockReturnValue({ 
         data: testingData,
         isLoading: false,
      });
      render( <MultipleCustomHooks /> );
      
      expect( screen.getByText( testingData[0].author , { exact: false }) ).toBeTruthy();
      expect( screen.getByText( testingData[0].quote, { exact: false } ) ).toBeTruthy();
      expect( screen.getByRole( 'button', { name: 'Next Quote'} ).disabled ).toBeFalsy();
   });

   test('should call the increment function', () => {
      const testingData = [{ author: 'Jerast', quote: 'Hola Mundo' }];
      useFetch.mockReturnValue({ 
         data: testingData,
         isLoading: false,
      });
      render( <MultipleCustomHooks /> );

      const nextButton = screen.getByRole('button', { name: 'Next Quote' });
      fireEvent.click( nextButton );
      
      expect( mockIncrement ).toHaveBeenCalled();
   });

});