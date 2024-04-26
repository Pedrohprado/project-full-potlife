import { Container, ContainerButtons, Text, Button } from './style';

export default function HomePage() {
  return (
    <Container>
      <Text>Monitoramento Pintura Líquida</Text>
      <ContainerButtons>
        <Button to={'/clients'}>Controle</Button>
      </ContainerButtons>
    </Container>
  );
}
