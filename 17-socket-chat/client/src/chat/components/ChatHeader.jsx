import { useContext } from 'react'
import { ChatContext } from '@chat/context/ChatContext'

export const ChatHeader = () => {
  const { chat } = useContext(ChatContext)

  const chatUserName = () => {
    const userFilter = chat.users.find(user => user.uid === chat.activeChat)
    return userFilter.name
  }

  return (
    <div className="msg_header">
      <span>{ chatUserName() }</span>
    </div>
  )
}
