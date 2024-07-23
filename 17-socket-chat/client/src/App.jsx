import { Toaster } from 'sonner'

import { AppRoutes } from '@app/routes/App.routes'
import { AuthProvider } from '@auth/context/AuthContext'
import { SocketProvider } from '@app/context/SocketContext'

export const App = () => {
  return (
    <>
      <AuthProvider>
        <SocketProvider>
          <AppRoutes />
        </SocketProvider>
      </AuthProvider>

      {/* https://sonner.emilkowal.ski/ */}
      <Toaster 
        richColors 
        theme="light" 
        expand={false}
      />
    </>
  )
}
