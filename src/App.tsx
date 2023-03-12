import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ProductProvider from './context/productContext'
import './Global.scss'
import Home from './pages/Home'

function App() {
  return (
    <ProductProvider>
      <Home />
    </ProductProvider>
  )
}

export default App
