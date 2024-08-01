import { useEffect, useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { ChatContext } from '@chat/context/ChatContext'
import { ChatPage } from '@chat/pages/Chat.page'
import { NotFoundPage } from '@app/pages/NotFound.page'

import '@chat/styles/chat.css'

export const ChatRoutes = () => {
  const { chat, onLoadUserChat } = useContext(ChatContext)

  useEffect(() => {
    (chat.activeChat) 
      && onLoadUserChat(chat.activeChat)
  }, [])

  return (
    <Routes>
      <Route index Component={ ChatPage }/>
      
      <Route path="*" element={ <Navigate to="/" replace /> }/>
      {/* <Route path="/*" Component={ NotFoundPage } replace /> */}
    </Routes>
  )
}