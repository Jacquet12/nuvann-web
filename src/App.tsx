import { useState } from 'react'
import { BrowserRouter, Router } from 'react-router-dom'
import { AuthProvider } from './context/authContext'
import { CartProvider } from './context/cartContext'
import ProductProvider from './context/productContext'
import PromotionsProvider from './context/promotionsContext'
import ToastProvider from './context/useToast'
import './Global.scss'
import {PrincipalRoutes} from './routes/routes'


function App() {

  return (
    <BrowserRouter>
    <ToastProvider >
      <ProductProvider>
          <PromotionsProvider>
          <AuthProvider >
              <CartProvider >
              <PrincipalRoutes /> 
              </CartProvider>
          </AuthProvider>
          </PromotionsProvider>
        </ProductProvider>
    </ToastProvider> 
    </BrowserRouter>
  )
}

export default App
