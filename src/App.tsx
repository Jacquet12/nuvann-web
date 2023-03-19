import { useState } from 'react'
import { Router } from 'react-router-dom'
import { AuthProvider } from './context/authContext'
import ProductProvider from './context/productContext'
import './Global.scss'
import {PrincipalRoutes} from './routes/routes'


function App() {

  return (
    <ProductProvider>
      <AuthProvider >
          <PrincipalRoutes /> 
      </AuthProvider>
    </ProductProvider>
  )
}

export default App
