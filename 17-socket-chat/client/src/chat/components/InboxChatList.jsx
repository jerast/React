import { useContext } from 'react'
import { InboxChatItem } from './InboxChatItem'
import { ChatContext } from '@chat/context/ChatContext'
import { AuthContext } from '@auth/context/AuthContext'

export const InboxChatList = () => {
  const { chat } = useContext(ChatContext)
  const { auth } = useContext(AuthContext)

  return (
    <div className="inbox_chat">
      {
        chat.users
          .filter(user => user.uid !== auth.user.uid)
          .map(user => 
            <InboxChatItem 
              key={user.uid} 
              user={user}
            />
        )
      }
    </div>
  )
}
