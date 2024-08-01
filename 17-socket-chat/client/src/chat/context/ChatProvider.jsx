import { ChatContext } from './ChatContext'
import { useChat } from '@chat/hooks/useChat'

export const ChatProvider = ({ children }) => {
  const chat = useChat()
  
  return (
    <ChatContext.Provider value={chat}>
      { children }
    </ChatContext.Provider>
  )
}
