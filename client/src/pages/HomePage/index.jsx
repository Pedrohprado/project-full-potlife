import { Container, ContainerButtons, Text, Button } from './style';

export default function HomePage() {
  return (
    <Container>
      <Text>Controle Pintura Líquida</Text>
      <ContainerButtons>
        <Button to={'/pontodeorvalho'}>Ponto de orvalho</Button>
        <Button to={'/clients'}>Pot-life</Button>
      </ContainerButtons>
    </Container>
  );
}
