import { InboxSearch } from './InboxSearch'
import { InboxChatList } from './InboxChatList'

export const Inbox = () => {
  return (
    <div className="inbox_people">
      <InboxSearch />
      <InboxChatList />
    </div>
  )
}
