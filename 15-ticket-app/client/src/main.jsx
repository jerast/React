import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './main.css'
import { App } from './App'
import { SocketProvider } from './context/SocketContext'

const router = createBrowserRouter([
  { path: "*", element: <App /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SocketProvider>
      <RouterProvider router={ router }/>
    </SocketProvider>
  </React.StrictMode>,
)
