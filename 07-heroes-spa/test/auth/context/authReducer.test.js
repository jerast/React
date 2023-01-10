import { authReducer, types } from "@/auth";

describe('Testing on authReducer', () => {

   test('should return the inital state', () => {
      const newState = authReducer( { logged: false }, {} );

      expect( newState ).toEqual( { logged: false } );
   });

   test('should (login) call login and set the user', () => {
      const action = {
         type: types.login,
         payload: { id: 123, name: "ABC" }
      };
      const newState = authReducer( { logged: false }, action );

      expect( newState ).toEqual({ 
         logged: true, 
         user: { id: 123, name: "ABC" }
      });
   });

   test('should (login) call logout, delete user and return logged state on false', () => {
      const state = { 
         logged: true, 
         user: { id: 123, name: "ABC" }
      };
      const action = { 
         type: types.logout 
      };
      const newState = authReducer( state, action );

      expect( newState ).toEqual({ logged: false });
   });

});