import React from 'react'
import ReactDOM from 'react-dom/client'
import { Context } from './Context.jsx'
import './main.css'
import './assets/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context />
  </React.StrictMode>,
)
