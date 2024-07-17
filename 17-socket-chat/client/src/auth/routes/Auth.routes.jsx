import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/Login.page'
import { SigninPage } from '../pages/Signin.page'
import { NotFoundPage } from '../../app/pages/NotFound.page'

import '../styles/auth.css'

export const AuthRoutes = () => 
  <div className="limiter">
    <div className="container-login100">
      <div className="wrap-login100 p-t-50 p-b-90">

        <Routes>
          <Route path="/login" Component={ LoginPage }/>
          <Route path="/signin" Component={ SigninPage }/>
          
          <Route path="/*" Component={ NotFoundPage }/>
        </Routes>

      </div>
    </div>
  </div>