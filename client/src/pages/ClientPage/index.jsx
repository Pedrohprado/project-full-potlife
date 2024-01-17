import { Container, Text, ContainerGrid, ButtonClient, TextAux } from './style';
import clients from '../../data/clients';

export default function ClientPage() {
  const cliente = clients.map(({ name, color }) => (
    <ButtonClient
      key={name.toLowerCase()}
      //NOTES:I need modify route, for dinamic link
      //i think use useParams-()
      to={`/clients/${name.toLowerCase().replace(' ', '')}`}
      color={color}
    >
      <TextAux>{name}</TextAux>
    </ButtonClient>
  ));

  return (
    <Container>
      <Text>Selecione o cliente:</Text>
      <ContainerGrid>{cliente}</ContainerGrid>
    </Container>
  );
}
