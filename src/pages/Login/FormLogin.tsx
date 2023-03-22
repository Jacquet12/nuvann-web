import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BaseInput from '../../components/BaseInput'
import CustomButton from '../../components/CustomButton';
import { useAuthContext } from '../../context/authContext';

export const FormLogin = () => {
  const {signIn, loading = false} = useAuthContext();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      signIn(email, password);
    };

  return (
    <form action="" onSubmit={handleSubmit}> <br />
        <BaseInput label="Email" type='text' value={email} onChange={e =>setEmail(e)} />
        <BaseInput label="Password" type='password' value={password} onChange={e =>setPassword(e)} />

        <CustomButton
          backgroundColor='#000052'
          textColor='#ffff'
          width={150}
          height={35}
          type="submit"
          isLoading={!!loading}
        >
            Konekte
          </CustomButton>
            <br />
        <Link to="/passwordreset" className="back-link"><small>Ou bliye ModPas ou? </small></Link>

    </form>
  )
}
