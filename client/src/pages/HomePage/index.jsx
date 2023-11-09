import { Container, ContainerButtons, Text, Button } from "./style";

export default function HomePage() {
  return (
    <Container>
      <Text>Iniciar controle do Pot-life</Text>
      <ContainerButtons>
        <Button to={"/clients"}>Iniciar</Button>
        <Button to={"/pontodeorvalho"}>Ponto de orvalho</Button>
      </ContainerButtons>
    </Container>
  );
}
