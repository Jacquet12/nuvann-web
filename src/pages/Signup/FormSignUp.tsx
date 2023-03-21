import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BaseButton from '../../components/BaseButton';
import BaseInput from '../../components/BaseInput'
import { useAuthContext } from '../../context/authContext';

export const FormSignUp = () => {
  const {signUp} = useAuthContext();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    signUp(email, password, name);
  };

  return (
    <form onSubmit={handleSubmit}>
        <BaseInput label="Nom" type='text' value={name} onChange={e =>setName(e)} />
        <BaseInput label="Email" type='text' value={email} onChange={e =>setEmail(e)} />
        <BaseInput label="Password" type='password' value={password} onChange={e =>setPassword(e)} />

        <BaseButton  label="Enskri"  width={150} background="#000052" color='#ffff'/>
    </form>
  )
}
