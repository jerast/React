import { SocketContext } from "@app/context/SocketContext"
import { AuthContext } from "@auth/context/AuthContext"
import { ChatContext } from "@chat/context/ChatContext"
import { useContext } from "react"
import { useState } from "react"

export const ChatInput = () => {
  const [message, setMessage] = useState('')
  const { auth } = useContext(AuthContext)
  const { chat } = useContext(ChatContext)
  const { sendMessage } = useContext(SocketContext)

  const handleChange = ({ target }) => {    
    setMessage(target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!message) return

    sendMessage({
      from : auth.user.uid, 
      to: chat.activeChat, 
      content: message}
    )
    setMessage('')
  }

  return (
    <form
      className="type_msg"
      onSubmit={handleSubmit}
    >
      <input 
        type="text" 
        className="write_msg" 
        placeholder="Mensaje..." 
        value={message}
        onChange={handleChange}
      />
      <button 
        className="msg_send_btn" 
        type="submit"
        disabled={!message}
      >
        enviar
      </button>
    </form>
  )
}
