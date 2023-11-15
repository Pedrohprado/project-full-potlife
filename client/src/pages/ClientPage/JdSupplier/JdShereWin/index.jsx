import Header from "../../../../components/Header";
import { Container, Button, ContainerButton, Title } from "./style";

export default function JdShereWin() {
  return (
    <>
      <Container>
        <Header />
        <Title>Selecione o tipo de tinta:</Title>
        <ContainerButton>
          <Button to={"/johndeere/sherwin/esmalte"}>ESMALTE</Button>
          <Button to={"/johndeere/sherwin/prime"}>PRIME</Button>
        </ContainerButton>
      </Container>
    </>
  );
}
