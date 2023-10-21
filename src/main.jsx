import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import AuthProvider from './components/ProviderContext/AuthProvider'
import DarkMode from './components/DarkMode'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider><RouterProvider router={router}><DarkMode></DarkMode></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
