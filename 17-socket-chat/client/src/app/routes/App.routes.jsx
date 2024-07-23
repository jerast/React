import { useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { AuthContext } from '@auth/context/AuthContext'
import { AuthRoutes } from '@auth/routes/Auth.routes'
import { ChatRoutes } from '@chat/routes/Chat.routes'

import '@app/styles/bootstrap.min.css'
import '@app/styles/font-awesome.min.css'

export const AppRoutes = () => {
  const { auth, verifyToken } = useContext(AuthContext)

  useEffect(() => {
    verifyToken()
  }, [])

  if (auth.isChecking) {
    return <></>
  }

  return ( 
    <Routes>
      {
        auth.isLogged
          ? <Route path="/*" Component={ ChatRoutes }/>
          : <Route path="/*" Component={ AuthRoutes }/>
      }
    </Routes>
  )
}
  
