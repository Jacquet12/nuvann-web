import { useState } from 'react'
import { Router } from 'react-router-dom'
import { AuthProvider } from './context/authContext'
import ProductProvider from './context/productContext'
import ToastProvider from './context/useToast'
import './Global.scss'
import {PrincipalRoutes} from './routes/routes'


function App() {

  return (
    <ToastProvider >
      <ProductProvider>
          <AuthProvider >
            <PrincipalRoutes /> 
          </AuthProvider>
        </ProductProvider>
    </ToastProvider> 
  )
}

export default App
