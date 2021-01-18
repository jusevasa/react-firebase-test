import React, { useState } from 'react';
import styled from 'styled-components';
import db from '../firebase/firebaseConfig';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await db.collection('users').add({
        name,
        email,
      });
      if (response) {
        setName('');
        setEmail('');
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <form action='' onSubmit={handleSubmit}>
      <Input type='text' nombre='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Nombre' />
      <Input type='email' nombre='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Correo' />
      <Boton type='submit'>Agregar</Boton>
    </form>
  );
};

const Input = styled.input`
  padding: 10px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  width: 100%;
  margin-bottom: 10px;
  transition: 0.2s ease all;
  outline: none;
  text-align: center;

  &:focus {
    border: 2px solid #3d76e9;
  }
`;

const Boton = styled.button`
  padding: 10px 30px;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  transition: 0.3s ease all;
  outline: none;
  background: #c4c4c4;
  color: #fff;
  font-size: 12px;

  &:hover {
    background: #3d76e9;
  }
`;
export default Form;
