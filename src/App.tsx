import { useState } from 'react'
import { BrowserRouter, Router } from 'react-router-dom'
import { AuthProvider } from './context/authContext'
import ProductProvider from './context/productContext'
import ToastProvider from './context/useToast'
import './Global.scss'
import {PrincipalRoutes} from './routes/routes'


function App() {

  return (
    <BrowserRouter>
    <ToastProvider >
      <ProductProvider>
          <AuthProvider >
            <PrincipalRoutes /> 
          </AuthProvider>
        </ProductProvider>
    </ToastProvider> 
    </BrowserRouter>
  )
}

export default App
