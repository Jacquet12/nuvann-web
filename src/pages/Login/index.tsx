import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGoogle} from 'react-icons/fa'
import './styles.scss'
import { FormLogin } from './FormLogin'
import { FormSignUp } from './FormSignUp'

export default function Login() {
  const [showSignUp, setShowSignUp] = useState(false)
  const [showLogin, setShowLogin] = useState(true)

  const ShowSelectedForm= (action: boolean)=> {
    setShowLogin(action);
    setShowSignUp(!action);
  }

  return (
    <div className='login_container'>

      <div className="login_card">
        <h3>Nuvann</h3>

        <div className="login_tabs">
          <p  onClick={() => ShowSelectedForm(true)}>Konekte</p>
            <div className="login__separator"></div>
          <p onClick={() => ShowSelectedForm(false)}>Enskri</p>
        </div>
        
        <div className="social_media_button">
          <button className="" onClick={()=>{}}> <FaGoogle/> <span> Konekte avèk Google </span></button>
          <button className="" onClick={()=>{}}><FaFacebook/><span> Konekte avèk Facebook </span></button>
        </div>

        <div className="login_content">
            {showLogin ?
                <FormLogin />
                    : 
                <FormSignUp />
            }
        </div>
      </div>

    </div>
  )
}
