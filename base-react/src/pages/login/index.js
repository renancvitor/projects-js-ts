import React from "react";

import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>Olá!</small>
      </Title>
      <Paragrafo>Texto qualquer.</Paragrafo>
      <a href="">Oii!</a>
    </Container>
  );
}
