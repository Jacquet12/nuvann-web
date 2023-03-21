import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BaseButton from '../../components/BaseButton';
import BaseInput from '../../components/BaseInput'

export const FormLogin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

  return (
    <form action=""> <br />
        <BaseInput label="Email" type='text' value={email} onChange={e =>setEmail(e)} />
        <BaseInput label="Password" type='password' value={password} onChange={e =>setPassword(e)} />

        <BaseButton  label="Konekte"  width={150} background="#000052" color='#ffff'/><br />
        <Link to="/passwordreset" className="back-link"><small>Ou bliye ModPas ou? </small></Link>

    </form>
  )
}
