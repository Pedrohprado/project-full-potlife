import React from 'react';
import { GlobalContext } from '../../context/context-form';
import { Container, Button, ContainerButton, Title } from './style';

import { useParams } from 'react-router-dom';

export default function SelectForn() {
  const parans = useParams();

  const { setForn } = React.useContext(GlobalContext);

  function handleClick({ target }) {
    const value = target.textContent.toLowerCase();
    setForn(value);
  }
  return (
    <Container>
      <Title>Selecione o fornecedor:</Title>
      <ContainerButton>
        <Button onClick={handleClick} to={`/clients/${parans.id}/sherwin`}>
          SherWin
        </Button>
        <Button onClick={handleClick} to={`/clients/${parans.id}/ppg`}>
          PPG
        </Button>
      </ContainerButton>
    </Container>
  );
}
