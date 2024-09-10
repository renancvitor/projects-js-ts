import React from "react";
import { useDispatch } from "react-redux";

import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function HandleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotao);
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
