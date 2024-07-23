import { ChatBox } from '@chat/components/ChatBox'
import { ChatSelect } from '@chat/components/ChatSelect'
import { Inbox } from '@chat/components/Inbox'

export const ChatPage = () => {
  return (
    <div className="messaging">
      <div className="inbox_msg">
        <Inbox />
        {
          true
            ? <ChatBox />
            : <ChatSelect />
        }
      </div>
    </div>
  )
}
