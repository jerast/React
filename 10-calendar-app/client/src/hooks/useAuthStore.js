import { useDispatch, useSelector } from 'react-redux'
import { calendarApi } from '@/api'
import { clearErrorMessage, onChecking, onLogin, onLogout, onResetValues, setErrorMessage } from '@/store'

export const useAuthStore = () => {

   const { status, user, errorMessage } = useSelector( state => state.auth )
   const dispatch = useDispatch()

   const startLogin = async ({ email, password }) => {
      dispatch( onChecking() )

      try {
         const { data } = await calendarApi.post('/auth', { email, password })
         localStorage.setItem( 'token', data.token )
         localStorage.setItem( 'token-init-date', new Date().getTime() ) 
         dispatch( onLogin({ ...data.user }) )
      } 
      catch ({ response }) {
         dispatch( onLogout(response.data.message) )
         setTimeout(() => dispatch(clearErrorMessage()), 10)
      }
   }

   const startSignin = async ({ name, email, password, password2 }) => {
      if (password !== password2) {
         dispatch( setErrorMessage('Las contraseñas no coiciden.') )
         return setTimeout(() => dispatch(clearErrorMessage()), 10)
      }

      try {
         const { data } = await calendarApi.post('/auth/new', { name, email, password })
         await startLogin({ email, password })
      } 
      catch ({ response }) {
         dispatch( onLogout(response.data.message) )
         setTimeout(() => dispatch(clearErrorMessage()), 10)
      }
   }

   const checkAuthToken = async () => {
      const token = localStorage.getItem('token')

      if ( !token ) {
         return dispatch( onLogout() )
      }

      try {
         const { data } = await calendarApi.get('/auth/renew')
         localStorage.setItem( 'token', data.token )
         localStorage.setItem( 'token-init-date', new Date().getTime() )
         dispatch( onLogin({ ...data.user }) )
      } 
      catch {
         localStorage.clear()
         dispatch( onLogout() )
      }
   }

   const startLogout = () => {
      localStorage.clear()
      dispatch( onResetValues() )
      dispatch( onLogout() )
   }

   return {
      // Properties
      status,
      user,
      errorMessage,

      // Methods
      startLogin,
      startSignin,
      startLogout,
      checkAuthToken,
   }
}