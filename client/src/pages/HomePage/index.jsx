import { Container, ContainerButtons, Text, Button } from './style';

export default function HomePage() {
  return (
    <Container>
      <Text>Monitoramento Pintura Líquida</Text>
      <ContainerButtons>
        <Button to={'/pontodeorvalho'}>Ponto de orvalho</Button>
        <Button to={'/clients'}>Controle</Button>
        <Button to={'/graficos'}>Gráficos</Button>
      </ContainerButtons>
    </Container>
  );
}
