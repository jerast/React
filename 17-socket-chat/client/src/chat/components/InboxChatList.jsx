import { InboxChatItem } from "./InboxChatItem"

export const InboxChatList = () => {
  const chats = [1,2,3,4,5,6,7,8,9,0]

  return (
    <div className="inbox_chat">
      {
        chats.map(chat => 
          <InboxChatItem key={chat} />
        )
      }
        
      <div className="extra_space" /> {/* Espacio extra para scroll */}
    </div>
  )
}
