import { useEffect, useRef, useContext } from 'react'
import { AuthContext } from '@auth/context/AuthContext'
import { ChatContext } from '@chat/context/ChatContext'
import { ChatInput } from './ChatInput'
import { MessageIn } from './MessageIn'
import { MessageOut } from './MessageOut'
import { ChatHeader } from './ChatHeader'

export const ChatBox = () => {
  const msg_history = useRef()
  const { auth } = useContext(AuthContext)
  const { chat } = useContext(ChatContext)

  useEffect(() => {
    msg_history.current.scrollTop = msg_history.current.scrollHeight
  }, [chat.messages])

  return (
    <div className="mesgs">
        <ChatHeader />
        <div 
          className="msg_history" 
          ref={msg_history}
        >
          {
            chat.messages.map(message => 
              (message.from === auth.user.uid)
                ? <MessageOut message={message} key={message.id}/> 
                : <MessageIn message={message} key={message.id}/>
            )
          }
        </div>
        <ChatInput />
    </div>
  )
}
