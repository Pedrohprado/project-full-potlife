import { Container, Text, ContainerGrid, ButtonClient, TextAux } from './style';
import clients from '../../data/clients';
import React from 'react';
import { GlobalContext } from '../../context/context-form';

export default function ClientPage() {
  const { setClient } = React.useContext(GlobalContext);

  function handleClick({ target }) {
    const value = target.textContent.toLowerCase();
    setClient(value);
  }

  return (
    <Container>
      <Text>Selecione o cliente:</Text>
      <ContainerGrid>
        {clients.map(({ name, color }) => (
          <ButtonClient
            key={name.toLowerCase()}
            to={`/clients/${name.toLowerCase().replace(' ', '')}`}
            color={color}
            onClick={handleClick}
            value={name}
          >
            <TextAux>{name}</TextAux>
          </ButtonClient>
        ))}
      </ContainerGrid>
    </Container>
  );
}
