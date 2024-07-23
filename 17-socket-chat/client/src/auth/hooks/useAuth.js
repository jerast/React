import { useState, useCallback } from 'react'
import { apiFetch } from '@auth/helpers/fetch'

export const useAuth = () => {
  const [auth, setAuth] = useState({
    isChecking: true,
    isLogged: false,
    user: {
      uid: null,
      name: null,
      email: null,
      picture: null,
    },
    error: null,
  })

  const setSession = useCallback((user, token) => {
    localStorage.setItem('socket-chat-token', token)

    setAuth({ 
      isChecking: false,
      isLogged: true, 
      user,
      error: null,
    })
  })
  
  const cleanSession = useCallback((error = null) => {
    localStorage.removeItem('socket-chat-token')

    setAuth({ 
      isChecking: false,
      isLogged: false, 
      user: {
        uid: null,
        name: null,
        email: null,
        picture: null,
      },
      error,
    })
  })
  
  const verifyToken = async () => {
    const token = localStorage.getItem('socket-chat-token')
    
    // if no token
    if (!token) 
      return cleanSession()

    // if token
    const { ok, user, newToken, error } = await apiFetch(
      'GET',
      '/auth/renew',
      null,
      token
    )

    await (ok)
      ? setSession(user, newToken)
      : cleanSession(error)

    return { ok, error }
  }

  const login = async (email, password) => {
    const { ok, user, token, error } = await apiFetch(
      'POST', 
      '/auth/login', 
      { email, password },
      null
    )

    await (ok)
      ? setSession(user, token)
      : cleanSession(error)

    return { ok, error }
  }

  const signin = async (name, email, password) => {
    const { ok, newUser, token, error } = await apiFetch(
      'POST', 
      '/users/new', 
      { name, email, password },
      null
    )

    await (ok) 
      && localStorage.setItem('socket-chat-email', email)

    await (ok)
      ? setSession(newUser, token)
      : cleanSession(error)

    return { ok, error }
  }
  
  const logout = () => {
    cleanSession()
  }
  
  return {
    auth,
    login,
    signin,
    logout,
    verifyToken,
  }
}