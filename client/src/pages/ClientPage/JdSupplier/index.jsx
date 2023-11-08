import { Container, Button, ContainerButton, Title } from "../JdSupplier/style";
import { ButtonReturn } from "../style";

import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  ContainerNav,
  LogoPedertractor,
} from "./JdShereWin/JdSherWinEsmalte/style";

export default function JdSupplier() {
  return (
    <Container>
      <ContainerNav>
        <ButtonReturn to={"/clients"}>
          <AiOutlineArrowLeft size={15} fill={"#f1f1f1"} />
          VOLTAR
        </ButtonReturn>
        <LogoPedertractor src="/logo.png" alt="logo do grupo pedertractor" />
      </ContainerNav>

      <Title>Selecione o fornecedor:</Title>
      <ContainerButton>
        <Button to={"/johndeere/sherwin"}>SherWin</Button>

        <Button to={"/johndeere/ppg"}>PPG</Button>
      </ContainerButton>
    </Container>
  );
}
