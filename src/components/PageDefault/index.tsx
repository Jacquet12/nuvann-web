import React from 'react'
import { Footer } from '../Footer';

import './styles.scss'

interface PageDefaultProps {
    children: React.ReactNode;
}
export const PageDefault: React.FC<PageDefaultProps> = ({ children }) =>{
  return (
    <div>
        <h1>Navbar</h1>

        <div className='page_default_main_container'>
            {children}
        </div>

        <Footer />
    </div>
  )
}
