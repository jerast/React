import { useContext } from 'react'
import { ChatContext } from '@chat/context/ChatContext'
import { dateFormat } from '@chat/helpers/dateFormat'

const getUserPicture = (state) => {
  const userChat = state.users.find(user => user.uid === state.activeChat)
  return userChat.picture || '/images/user-profile.jpg'
}

export const MessageIn = ({ message }) => {
  const { chat } = useContext(ChatContext)

  return (
    <div className="incoming_msg">
      <div className="incoming_msg_img">
        <img src={getUserPicture(chat)} alt="chat" />
      </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>{ message.content }</p>
          <span className="time_date">{ dateFormat(message.createdAt) }</span>
        </div>
      </div>
    </div>
  )
}
