import { Navigate, Route, Routes } from 'react-router-dom'

import { AuthLayout } from '@auth/layout/Auth.layout'
import { LoginPage } from '@auth/pages/Login.page'
import { SigninPage } from '@auth/pages/Signin.page'
import { NotFoundPage } from '@app/pages/NotFound.page'

export const AuthRoutes = () => 
  <AuthLayout>
    <Routes>
      <Route path="/" element={ <Navigate to="/auth/login" replace /> }/>
      <Route path="/auth/login" Component={ LoginPage }/>
      <Route path="/auth/signin" Component={ SigninPage }/>

      <Route path="*" Component={ NotFoundPage } />
    </Routes>
  </AuthLayout> 