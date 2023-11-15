import { Container, Button, ContainerButton, Title } from "../JdSupplier/style";

import Header from "../../../components/Header";

export default function JdSupplier() {
  return (
    <Container>
      <Header />
      <Title>Selecione o fornecedor:</Title>
      <ContainerButton>
        <Button to={"/johndeere/sherwin"}>SherWin</Button>

        <Button to={"/johndeere/ppg"}>PPG</Button>
      </ContainerButton>
    </Container>
  );
}
