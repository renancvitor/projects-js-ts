import React from "react";
import { useDispatch } from "react-redux";

import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from './styled';

export default function Login() {
  const dispatch = useDispatch();

  function HandleClick(e) {
    e.preventDefault();

    dispatch({
      type: 'BOTAO_CLICADO',
    });
  }

  return (
    <Container>
      <Title>
        Login
        <small>Olá!</small>
      </Title>
      <Paragrafo>Texto qualquer.</Paragrafo>
      <button type="button" onClick={HandleClick}>Enviar</button>
    </Container>
  );
}
