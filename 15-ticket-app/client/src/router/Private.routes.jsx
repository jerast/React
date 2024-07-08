import { Route, Routes } from 'react-router-dom'
import { DesktopPage } from '../pages/Desktop.page'

export const PrivateRoutes = () => 
  <Routes>
    <Route index element={ <DesktopPage /> } />
    <Route path="/*" element={ <h1>Not found page</h1> } />
  </Routes>