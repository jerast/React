import { Route, Routes } from 'react-router-dom'
import { PrivateRoutes } from './Private.routes'
import { PublicRoutes } from './Public.routes'

const isAuth = true

export const AppRoutes = () => 
  <Routes>
    {    
      isAuth 
      ? ( <>
        <Route path="/*" element={ <PublicRoutes /> } />
        <Route path="/desktop/*" element={ <PrivateRoutes /> } />
        
      </> )
      : ( <>
        <Route path="/*" element={ <PublicRoutes /> } />
      </> )
    }
  </Routes>
