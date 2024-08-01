import { Toaster } from 'sonner'

import { AppRoutes } from '@app/routes/App.routes'
import { SocketProvider } from '@app/context/SocketProvider'
import { AuthProvider } from '@auth/context/AuthProvider'
import { ChatProvider } from '@chat/context/ChatProvider'

export const App = () => {
  return (
    <>
      {/* Providers */}
      <ChatProvider>
        <AuthProvider>
          <SocketProvider>

            <AppRoutes />

          </SocketProvider>
        </AuthProvider>
      </ChatProvider>

      {/* https://sonner.emilkowal.ski/ */}
      <Toaster 
        richColors 
        theme="light" 
        expand={false}
      />
    </>
  )
}
