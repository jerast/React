import { fireEvent, render, screen } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { LoginPage } from "@/auth/pages/Login.Page";
import { authSlice } from "@/store/auth/auth.Slice";
import { notAuthenticatedState } from "@test/fixtures/authFixtures";

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock('@/store/auth/auth.Thunks', () => ({
   startGoogleSignIn: () => mockStartGoogleSignIn,
   startLoginWithEmailPassword: ({ email, password }) => {
      return () => mockStartLoginWithEmailPassword({ email, password });
   },
}));

jest.mock('react-redux', () => ({
   ...jest.requireActual('react-redux'),
   useDispatch: () => (fn) => fn(),
}));

const store = configureStore({
   reducer: {
      auth: authSlice.reducer
   },
   preloadedState: {
      auth: notAuthenticatedState
   }
});

describe('Testing on <LoginPage />', () => {

   test('should render the component correctly', () => {
      render(
         <Provider store={ store }>
            <MemoryRouter>
               <LoginPage /> 
            </MemoryRouter>
         </Provider>
      );

      expect( screen.getAllByText('Login').length ).toBeGreaterThanOrEqual(1);
   });

   test('Google Button should invoke startGoogleSignIn', () => {
      render(
         <Provider store={ store }>
            <MemoryRouter>
               <LoginPage /> 
            </MemoryRouter>
         </Provider>
      );
      
      const googleButton = screen.getByRole('google-btn');
      fireEvent.click( googleButton );

      expect( mockStartGoogleSignIn ).toHaveBeenCalled();
   });

   test('should invoke startLoginWithEmailPassword on form submitting', () => {
      const email = 'jose.romero.9602@outlook.com';
      const password = '123456';
      
      render(
         <Provider store={ store }>
            <MemoryRouter>
               <LoginPage /> 
            </MemoryRouter>
         </Provider>
      );

      const emailField = screen.getByRole('textbox', { name: 'Email' });
      fireEvent.change( emailField, { target: { name: 'email', value: email } });
      
      const passwordField = screen.getByTestId('password');
      fireEvent.change( passwordField, { target: { name: 'password', value: password } });
      
      const loginForm = screen.getByRole('form');
      fireEvent.submit( loginForm );

      expect( mockStartLoginWithEmailPassword ).toHaveBeenCalledWith({ email, password });
   });

});