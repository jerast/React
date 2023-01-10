import { useReducer } from 'react';
import { AuthContext, authReducer, types } from '@/auth';

const init = () => {
   const user = JSON.parse( localStorage.getItem('user') );

   return {
      logged: !!user,
      user: user,
   }
};

export const AuthProvider = ({ children }) => {

   const [ authState, authDispatch ] = useReducer( authReducer, {}, init );

   const onLogin = ( name = '' ) => {
      const user = {
         id: 'ABC',
         name
      };

      localStorage.setItem('user', JSON.stringify(user) );

      authDispatch({
         type: types.login,
         payload: user
      });
   }

   const onLogout = () => {
      localStorage.removeItem('user');

      authDispatch({
         type: types.logout,
      });
   }

	return (
      <AuthContext.Provider value={{  
         authState, 
         onLogin,
         onLogout,
      }}>
         { children }
      </AuthContext.Provider>
   );
};
