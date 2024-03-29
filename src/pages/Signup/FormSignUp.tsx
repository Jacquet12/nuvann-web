import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BaseButton from '../../components/BaseButton';
import BaseInput from '../../components/BaseInput'
import CustomButton from '../../components/CustomButton';
import { useAuthContext } from '../../context/authContext';

export const FormSignUp = () => {
  const {signUp, loading = false} = useAuthContext();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    signUp(name,email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
        <BaseInput label="Nom" type='text' value={name} onChange={e =>setName(e)} />
        <BaseInput label="Email" type='text' value={email} onChange={e =>setEmail(e)} />
        <BaseInput label="Password" type='password' value={password} onChange={e =>setPassword(e)} />

        <CustomButton
          backgroundColor='#000052'
          textColor='#ffff'
          width={150}
          height={35}
          isLoading={!!loading}
          type="submit"
        >
            Enskri
          </CustomButton>
    </form>
  )
}
