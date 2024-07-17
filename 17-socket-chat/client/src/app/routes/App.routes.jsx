import { Routes, Route } from 'react-router-dom'
import { AuthRoutes } from '../../auth/routes/Auth.routes'
import { ChatRoutes } from '../../chat/routes/Chat.routes'
import { NotFoundPage } from '../pages/NotFound.page'

export const AppRoutes = () => 
  <Routes>
    <Route path="/*" Component={ ChatRoutes }/>
    <Route path="/auth/*" Component={ AuthRoutes }/>

    {/* <Route path="*" Component={ NotFoundPage }/> */}
  </Routes>
  
