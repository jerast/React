import { checkingAuthentication, startGoogleSignIn, startCreatingUserWithEmailPassword, startLoginWithEmailPassword, startLogOut } from "@/store/auth/auth.Thunks";
import { signInWithGoogle, signInWithEmailPassword, loginWithEmailPassword } from "@/firebase";
import { checkingCredentials, login, logout  } from '@/store/auth/auth.Slice';
import { resetState  } from '@/store/journal/journal.Slice';
import { demoUser } from "@test/fixtures/authFixtures";

jest.mock('@/firebase/providers');

describe('Testing on auth.Thunks.test', () => {

   const dispatch = jest.fn();

   test('checkingAuthentication should invoke checkingCredentials', async () => {
      await checkingAuthentication()( dispatch );

      expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
   });

   test('startGoogleSignIn should invoke checkingCredentials and login - success', async () => {
      const loginData = { ok: true, ...demoUser };
      await signInWithGoogle.mockResolvedValue( loginData );

      await startGoogleSignIn()( dispatch );

      expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
      expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );
   });

   test('startGoogleSignIn should invoke checkingCredentials and logout - error', async () => {
      const loginData = { ok: false, errorMessage: 'Testing error' };
      await signInWithGoogle.mockResolvedValue( loginData );

      await startGoogleSignIn()( dispatch );

      expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
      expect( dispatch ).toHaveBeenCalledWith( logout( loginData.errorMessage ) );
   });

   test('startCreatingUserWithEmailPassword should invoke checkingCredentials and login - success', async () => {
      const formData = { 
         displayName: demoUser.displayName, 
         email: demoUser.email, 
         password: 'PASS123' 
      }   
      const loginData = { 
         ok: true, 
         ...demoUser 
      };
      await signInWithEmailPassword.mockResolvedValue( loginData );
      
      await startCreatingUserWithEmailPassword( formData )( dispatch );

      expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
      expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );
   });

   test('startCreatingUserWithEmailPassword should invoke checkingCredentials and logout - error', async () => {
      const formData = { 
         displayName: demoUser.displayName, 
         email: demoUser.email, 
         password: 'PASS123' 
      }   
      const loginData = { 
         ok: false, 
         errorMessage: 'Testing error' 
      };
      await signInWithEmailPassword.mockResolvedValue( loginData );
      
      await startCreatingUserWithEmailPassword( formData )( dispatch );

      expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
      expect( dispatch ).toHaveBeenCalledWith( logout( loginData.errorMessage ) );
   });

   test('startLoginWithEmailPassword should invoke checkingCredentials and login - success', async () => {
      const formData = { 
         email: demoUser.email, 
         password: 'PASS123' 
      }   
      const loginData = { 
         ok: true, 
         ...demoUser 
      };
      await loginWithEmailPassword.mockResolvedValue( loginData );
      
      await startLoginWithEmailPassword( formData )( dispatch );

      expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
      expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );
   });

   test('startLoginWithEmailPassword should invoke checkingCredentials and logout - error', async () => {
      const formData = {
         email: demoUser.email, 
         password: 'PASS123' 
      }   
      const loginData = { 
         ok: false, 
         errorMessage: 'Testing error' 
      };
      await loginWithEmailPassword.mockResolvedValue( loginData );
      
      await startLoginWithEmailPassword( formData )( dispatch );

      expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
      expect( dispatch ).toHaveBeenCalledWith( logout( loginData.errorMessage ) );
   });

   test('startLogOut should logout - success', async () => {
      await startLogOut()( dispatch );

      expect( dispatch ).toHaveBeenCalledWith( resetState() );
      expect( dispatch ).toHaveBeenCalledWith( logout() );
   });

}); 