import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ProductProvider from './context/productContext'
import './Global.scss'
import {PrincipalRoutes} from './routes/routes'

function App() {
  return (
    <ProductProvider>
      <PrincipalRoutes />
    </ProductProvider>
  )
}

export default App
