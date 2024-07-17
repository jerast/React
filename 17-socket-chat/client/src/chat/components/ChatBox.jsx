import { ChatInput } from './ChatInput'
import { MessageIn } from './MessageIn'
import { MessageOut } from './MessageOut'

export const ChatBox = () => {
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
