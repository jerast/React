import { ChatBox } from '../components/ChatBox'
import { ChatSelect } from '../components/ChatSelect'
import { Inbox } from '../components/Inbox'

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
