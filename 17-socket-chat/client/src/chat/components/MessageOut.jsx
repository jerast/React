import { dateFormat } from "@chat/helpers/dateFormat"

export const MessageOut = ({ message }) => {
  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
        <p>{ message.content }</p>
        <span className="time_date">{ dateFormat(message.createdAt) }</span>
      </div>
    </div>
  )
}
