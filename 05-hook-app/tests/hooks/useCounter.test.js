import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks";

describe('Testing on useCounter Hook', () => {

   test('should return default values', () => {
      const { result } = renderHook( () => useCounter() );
      const { counter, increment, decrement, reset } = result.current;

      expect( counter ).toBe( 10 );
      expect( increment ).toEqual( expect.any( Function ) );
      expect( decrement ).toEqual( expect.any( Function ) );
      expect( reset ).toEqual( expect.any( Function ) );
   });

   test('should generate the counter with the number value 100', () => {
      const { result } = renderHook( () => useCounter( 100 ) );
      const { counter } = result.current;

      expect( counter ).toBe( 100 );
   });

   test('should increment the counter', () => {
      const { result } = renderHook( () => useCounter() );
      const { increment } = result.current;

      act(() => {          // counter: 10
         increment();      // counter: 11
         increment( 3 );   // counter: 14
      })

      expect( result.current.counter ).toBe( 14 );
   });

   test('should decrement the counter', () => {
      const { result } = renderHook( () => useCounter() );
      const { decrement } = result.current;

      act(() => {          // counter: 10
         decrement();      // counter: 9
         decrement( 4 );   // counter: 5
      })

      expect( result.current.counter ).toBe( 5 );
   });

   test('should reset the counter', () => {
      const { result } = renderHook( () => useCounter() );
      const { increment, decrement, reset } = result.current;

      act(() => {          // counter: 10
         increment();      // counter: 11
         decrement( 5 );   // counter: 6
         reset();          // counter: 10
      })

      expect( result.current.counter ).toBe( 10 );
   });

});