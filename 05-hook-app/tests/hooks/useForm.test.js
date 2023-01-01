import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks"

describe('Testing on useForm Hook', () => {

   const initialForm = {
      name: 'Jerast',
      email: 'jerast@google.com'
   }

   test('should return the default values', () => {
      const { result } = renderHook( () => useForm( initialForm ) );
      
      expect( result.current ).toEqual({
         ...initialForm,
         formState: initialForm,
         onFormChange: expect.any( Function ),
         onFormReset: expect.any( Function ),
      });
   });

   test('should change the form.name value', () => {
      const newName = 'Joseph';
      const { result } = renderHook( () => useForm( initialForm ) );
      const { onFormChange } = result.current;
      
      act(() => {
         onFormChange({ target: { name: 'name', value: newName } });
      });

      expect( result.current.name ).toEqual( newName );
      expect( result.current.formState.name ).toEqual( newName );
   });

   test('should reset the form values', () => {
      const newName = 'Joseph';
      const { result } = renderHook( () => useForm( initialForm ) );
      const { onFormChange, onFormReset } = result.current;
      
      act(() => {
         onFormChange({target: { name: 'name', value: newName } });
         onFormReset();
      });

      expect( result.current.name ).toEqual( initialForm.name );
      expect( result.current.formState.name ).toEqual( initialForm.name );
   });

});