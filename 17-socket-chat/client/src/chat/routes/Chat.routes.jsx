import { Route, Routes } from 'react-router-dom'
import { ChatPage } from '../pages/Chat.page'
import { NotFoundPage } from '../../app/pages/NotFound.page'

import '../styles/chat.css'

export const ChatRoutes = () => 
  <Routes>
    <Route index Component={ ChatPage }/>
    
    <Route path="/*" Component={ NotFoundPage }/>
  </Routes>