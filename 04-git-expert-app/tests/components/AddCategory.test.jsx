import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Testing on <AddCategory />', () => {

   const inputValue = 'Saitama';
   const handleAddCategory = jest.fn();

   test('should change the textbox value', () => {
      render( <AddCategory handleAddCategory={ handleAddCategory } /> );
      const input = screen.getByRole( 'textbox' );

      fireEvent.input( input, { target: { value: inputValue } } );
      expect( input.value ).toBe( inputValue );
   });
   
   test('should call handleAddCategory() if input has a value', () => {
      render( <AddCategory handleAddCategory={ handleAddCategory } /> );
      const input = screen.getByRole( 'textbox' );
      const form = screen.getByRole( 'form' );
      
      fireEvent.input( input, { target: { value: inputValue } } ); 
      fireEvent.submit( form );

      expect( input.value ).toBe( '' );
      expect( handleAddCategory ).toHaveBeenCalled();
      expect( handleAddCategory ).toHaveBeenCalledTimes( 1 );
      expect( handleAddCategory ).toHaveBeenCalledWith( inputValue );
   });

   test("shouln't call handleAddCategory() if input hasn't value", () => {
      const handleAddCategory2 = jest.fn();

      render( <AddCategory handleAddCategory={ handleAddCategory2 } /> );

      const form = screen.getByRole( 'form' );      
      fireEvent.submit( form );

      expect( handleAddCategory2 ).not.toHaveBeenCalled();
      // expect( handleAddCategory2 ).toHaveBeenCalledTimes( 0 );
   })

});