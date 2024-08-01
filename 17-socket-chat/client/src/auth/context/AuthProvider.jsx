import { AuthContext } from '@auth/context/AuthContext'
import { useAuth } from '@auth/hooks/useAuth'

export const AuthProvider = ({ children }) => {
  const auth = useAuth()
  
  return (
    <AuthContext.Provider value={auth}>
      { children }
    </AuthContext.Provider>
  )
}
