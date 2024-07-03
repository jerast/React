import { SocketProvider } from './context/SocketContext.jsx';
import { App } from './App.jsx'

export const Context = () => {
  return (
    <SocketProvider>
      <App />
    </SocketProvider>
  )
}
  