import { useParams } from 'react-router-dom';
import { Container, Button, ContainerButton, Title } from './style';
import React from 'react';
import { GlobalContext } from '../../context/context-form';

export default function SelectTypeInk() {
  const parans = useParams();

  const { setTypeInk } = React.useContext(GlobalContext);

  function handleClick({ target }) {
    const value = target.textContent.toLowerCase();
    setTypeInk(value);
  }
  return (
    <>
      <Container>
        <Title>Selecione o tipo de tinta:</Title>
        <ContainerButton>
          <Button
            onClick={handleClick}
            to={`/clients/${parans.id}/${parans.for}/esmalte`}
          >
            ESMALTE
          </Button>
          <Button
            onClick={handleClick}
            to={`/clients/${parans.id}/${parans.for}/primer`}
          >
            PRIME
          </Button>
        </ContainerButton>
      </Container>
    </>
  );
}
