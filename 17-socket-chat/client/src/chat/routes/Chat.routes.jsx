import { Navigate, Route, Routes } from 'react-router-dom'
import { ChatPage } from '@chat/pages/Chat.page'
import { NotFoundPage } from '@app/pages/NotFound.page'

import '@chat/styles/chat.css'

export const ChatRoutes = () => 
  <Routes>
    <Route index Component={ ChatPage }/>
    
    <Route path="*" element={ <Navigate to="/" replace /> }/>
    {/* <Route path="/*" Component={ NotFoundPage } replace /> */}
  </Routes>