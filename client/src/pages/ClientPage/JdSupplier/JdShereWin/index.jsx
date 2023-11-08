import { ButtonReturn } from "../../style";
import { ContainerNav, LogoPedertractor } from "./JdSherWinEsmalte/style";
import { Container, Button, ContainerButton, Title } from "./style";

import { AiOutlineArrowLeft } from "react-icons/ai";

export default function JdShereWin() {
  return (
    <>
      <Container>
        <ContainerNav>
          <ButtonReturn to={"/johndeere"}>
            <AiOutlineArrowLeft size={15} fill={"#f1f1f1"} />
            VOLTAR
          </ButtonReturn>
          <LogoPedertractor src="/logo.png" alt="logo do grupo pedertractor" />
        </ContainerNav>

        <Title>Selecione o tipo de tinta:</Title>
        <ContainerButton>
          <Button to={"/johndeere/sherwin/esmalte"}>ESMALTE</Button>
          <Button to={"/johndeere/sherwin/prime"}>PRIME</Button>
        </ContainerButton>
      </Container>
    </>
  );
}
