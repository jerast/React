import { useContext } from 'react'
import { ChatInput } from './ChatInput'
import { MessageIn } from './MessageIn'
import { MessageOut } from './MessageOut'
import { AuthContext } from '@auth/context/AuthContext'

export const ChatBox = () => {
  const { auth, login } = useContext(AuthContext)

  const messages = [0,1,1,0,0,1,0,1]

  return (
    <div className="mesgs">
        <div className="msg_history">
          {
            messages.map((message, index) => 
              message 
                ? <MessageOut key={index}/> 
                : <MessageIn key={index}/>
            )
          }
        </div>
        <ChatInput />
    </div>
  )
}
