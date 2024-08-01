import { useState, useEffect, useContext } from 'react'
import { ChatContext } from '@chat/context/ChatContext'

export const InboxChatItem = ({ user }) => {
  const { chat, onActiveChat, onLoadUserChat } = useContext(ChatContext)
  const [ active, setActive ] = useState(false)

  useEffect(() => {
    (chat.activeChat === user.uid)
      ? setActive(true)
      : (active) && setActive(false)
  }, [chat])

  const handleActiveChat = async () => {
    (chat.activeChat !== user.uid) && onActiveChat(user.uid)
    await onLoadUserChat(user.uid)
  }
  
  return (
    <div 
      className={`chat_list ${ active ? 'active_chat' : ''}`} 
      onClick={handleActiveChat}
    >
      <div className="chat_people">
        <div className="chat_img">
          <div className={`online-status ${user.online ? 'online' : 'offline'}`}/>
          <img src={user.picture || '/images/user-profile.jpg'} alt="sunil" />
        </div>
        <div className="chat_ib">
          <h5>{user.name}</h5>
          {
            user.online
              ? <span className="text-success">Online</span>
              : <span className="text-danger">Offline</span>
          }
        </div>
      </div>
    </div>
  )
}
