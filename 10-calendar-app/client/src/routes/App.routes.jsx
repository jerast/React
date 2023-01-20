import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '@Auth'
import { CalendarPage } from '@Calendar'
import { useAuthStore } from '@/hooks'
import { useEffect } from 'react'

export const AppRoutes = () => {

   const {status, checkAuthToken } = useAuthStore()

   useEffect(
      () => {
         checkAuthToken()
      }, 
   [])

   if ( status === 'checking' ) {
      return <h1>...Loading</h1>
   }

   return (
      <Routes>
         
         {
            (status === 'not-auth')
               ? (
                  <>
                     <Route path="/auth" element={ <LoginPage /> } />
                     <Route path="*" element={ <Navigate to="/auth" /> } />
                  </>
               )
               : (
                  <>
                     <Route path="/" element={ <CalendarPage /> } />
                     <Route path="*" element={ <Navigate to="/" /> } />
                  </>
               )
         }

         
      </Routes>
   )
}