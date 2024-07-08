import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/Login.page'
import { TicketQueuePage } from '../pages/TicketQueue.page'
import { TicketGenPage } from '../pages/TicketGen.page'
import { FullLayout } from '../layout/Full.layout'

export const PublicRoutes = () => 
  <Routes>
    <Route index element= { <Navigate to="/login" /> }/>
    <Route path="/login" element= { <LoginPage /> }/>
    <Route path="/queue" element= { <TicketQueuePage /> }/>
    <Route path="/new" element= { <TicketGenPage /> }/>
    <Route path="/*" element={ <h1>Not found page</h1> } />
  </Routes>