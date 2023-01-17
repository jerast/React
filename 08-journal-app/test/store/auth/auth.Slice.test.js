import { authSlice, checkingCredentials, login, logout } from '@/store/auth';
import { authenticatedState, demoUser, initialState } from '@test/fixtures/authFixtures';

describe('Testing on auth.Slice', () => {

   test('should return the Initial State and be called "auth"', () => {
      const state = authSlice.reducer(initialState, {});
         
      expect( authSlice.name ).toBe('auth');
      expect( state ).toEqual({
         status: 'checking',
         uid: null,
         email: null,
         displayName: null,
         photoURL: null,
         errorMessage: null,
      });
   });

   test('should to do Authentication', () => {
      const state = authSlice.reducer( initialState, login(demoUser) );

      expect( state ).toEqual({
         status: 'authenticated',
         uid: demoUser.uid,
         email: demoUser.email,
         displayName: demoUser.displayName,
         photoURL: demoUser.photoURL,
         errorMessage: null,
      });
   });

   test('should to do Logout', () => {
      const state = authSlice.reducer( authenticatedState, logout() );

      expect( state ).toEqual({
         status: 'not-authenticated',
         uid: null,
         email: null,
         displayName: null,
         photoURL: null,
         errorMessage: null,
      });
   });
   
   test('should to do Logout and display the error message', () => {
      const state = authSlice.reducer( authenticatedState, logout('Mensaje de error') );

      expect( state ).toEqual({
         status: 'not-authenticated',
         uid: null,
         email: null,
         displayName: null,
         photoURL: null,
         errorMessage: 'Mensaje de error',
      });
   });
   
   test('should change status to "checking"', () => {
      const state = authSlice.reducer( authenticatedState, checkingCredentials() );

      expect( state ).toEqual({
         status: 'checking',
         uid: demoUser.uid,
         email: demoUser.email,
         displayName: demoUser.displayName,
         photoURL: demoUser.photoURL,
         errorMessage: null,
      });
   });

});