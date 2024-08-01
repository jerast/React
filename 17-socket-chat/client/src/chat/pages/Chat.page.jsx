import { useContext } from 'react'
import { ChatContext } from '@chat/context/ChatContext'
import { ChatBox } from '@chat/components/ChatBox'
import { ChatSelect } from '@chat/components/ChatSelect'
import { Inbox } from '@chat/components/Inbox'

export const ChatPage = () => {
  const { chat } = useContext(ChatContext)

  return (
    <div className="inbox_msg">
      <Inbox />
      {
        chat.activeChat
          ? <ChatBox />
          : <ChatSelect />
      }
    </div>
  )
}
