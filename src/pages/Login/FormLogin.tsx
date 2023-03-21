import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BaseInput from '../../components/BaseInput'
import CustomButton from '../../components/CustomButton';

export const FormLogin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

  return (
    <form action=""> <br />
        <BaseInput label="Email" type='text' value={email} onChange={e =>setEmail(e)} />
        <BaseInput label="Password" type='password' value={password} onChange={e =>setPassword(e)} />

        <CustomButton
          backgroundColor='#000052'
          textColor='#ffff'
          width={150}
        >
            Konekte
          </CustomButton>
            <br />
        <Link to="/passwordreset" className="back-link"><small>Ou bliye ModPas ou? </small></Link>

    </form>
  )
}
