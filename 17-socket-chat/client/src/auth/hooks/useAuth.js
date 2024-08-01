import { useState, useCallback } from 'react'
import { apiFetch } from '@app/helpers/fetch'
import { useContext } from 'react'
import { ChatContext } from '@chat/context/ChatContext'

const authInitState = {
  isChecking: true,
  isLogged: false,
  user: {
    uid: null,
    name: null,
    email: null,
    picture: null,
  },
  error: null,
}

export const useAuth = () => {
  const [auth, setAuth] = useState(authInitState)
  const { onClearState } = useContext(ChatContext)

  const setSession = useCallback((user, token) => {
    localStorage.setItem('socket-chat-token', token)
    document.title = user.name

    setAuth({ 
      ...authInitState,
      isChecking: false,
      isLogged: true, 
      user,
    })
  }, [])
  
  const cleanSession = useCallback((error = null) => {
    localStorage.removeItem('socket-chat-token')
    document.title = 'Auth - Chat Socket'

    setAuth({ 
      ...authInitState,
      isChecking: false,
      error,
    })

    onClearState()
  }, [])
  
  const verifyToken = useCallback(async () => {
    const token = localStorage.getItem('socket-chat-token')
    
    // if no token
    if (!token) 
      return cleanSession()

    // if token
    const { ok, user, newToken, error } = await apiFetch({
      method: 'GET',
      endpoint: '/auth/renew',
      token
    })

    await (ok)
      ? setSession(user, newToken)
      : cleanSession(error)

    return { ok, error }
  }, [])

  const login = useCallback(async (email, password) => {
    const { ok, user, token, error } = await apiFetch({
      method: 'POST', 
      endpoint: '/auth/login', 
      data: { email, password }
    })

    await (ok)
      ? setSession(user, token)
      : cleanSession(error)

    return { ok, error }
  }, [])

  const signin = useCallback(async (name, email, password) => {
    const { ok, newUser, token, error } = await apiFetch({
      method: 'POST', 
      endpoint: '/users/new', 
      data: { name, email, password },
    })

    await (ok) 
      && localStorage.setItem('socket-chat-email', email)

    await (ok)
      ? setSession(newUser, token)
      : cleanSession(error)

    return { ok, error }
  }, [])
  
  const logout = useCallback(() => {
    cleanSession()
  }, [])
  
  return {
    auth,
    login,
    signin,
    logout,
    verifyToken,
  }
}