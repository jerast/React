import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '@Auth'
import { CalendarPage } from '@Calendar'

export const AppRoutes = () => {

   const authStatus = 'auth' // 'not-auth' 'auth'

   return (
      <Routes>
         
         {
            (authStatus === 'not-auth')
               ? <Route path="/auth" element={ <LoginPage /> } />
               : <Route path="*" element={ <CalendarPage /> } />
         }

         <Route path="*" element={ <Navigate to="/auth" /> } />
         
      </Routes>
   )
}