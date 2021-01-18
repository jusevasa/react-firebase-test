import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Contacto from './Contacto';
import db from '../firebase/firebaseConfig';

const ListaContactos = () => {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    db.collection('users')
      .limit(2)
      .onSnapshot((snapshot) => {
        setContactos(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      });
  }, []);

  return (
    contactos.length > 0 && (
      <ContainerContactos>
        {contactos.map((contacto) => {
          return <Contacto key={contacto.id} id={contacto.id} name={contacto.name} email={contacto.email} />;
        })}
      </ContainerContactos>
    )
  );
};
const ContainerContactos = styled.div`
  margin-top: 40px;
`;

export default ListaContactos;
