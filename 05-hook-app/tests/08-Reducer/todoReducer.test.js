import { todoReducer } from "../../src/08-Reducer/todoReducer";

describe('Testing on todoReducer', () => {

   const initialState = [
      { id: 1, description: 'Demo Todo', done: false }
   ];

   test('should return the inital state', () => {
      const newState = todoReducer( initialState, {} );

      expect( newState ).toBe( initialState );
   });

   test('should add a Todo', () => {
      const action = { 
         type: '[TODO] Add Todo',
         payload: {
            id: 2,
            description: 'New Todo',
            done: false,
         }
      }
      const newState = todoReducer( initialState, action );

      expect( newState.length ).toBeGreaterThan( 1 );
      expect( newState ).toContain( action.payload );
   });

   test('should remove a Todo', () => {
      const action = { 
         type: '[TODO] Remove Todo',
         payload: 1
      }
      const newState = todoReducer( initialState, action );

      expect( newState.length ).toBe( 0 );
      expect( newState ).toEqual( [] );
   });

   test('should toogle "done" state of a Todo', () => {
      const action = { 
         type: '[TODO] Toggle Todo',
         payload: 1
      }
      
      const newState = todoReducer( initialState, action );
      expect( newState[0].done ).toBe( true );

      const newState2 = todoReducer( newState, action );
      expect( newState2[0].done ).toBe( false );
   });

});