import { Container, Text, Button } from "./style";

export default function HomePage() {
  return (
    <Container>
      <Text>Iniciar controle do Pot-life</Text>
      <Button to={"/clients"}>Iniciar</Button>
    </Container>
  );
}
