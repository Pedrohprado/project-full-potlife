import {
  Container,
  ContainerMaster,
  ContainerNav,
  LogoPedertractor,
  Title,
} from "./style";

import paintsSherEsmalte from "../../../../../data/paints";
import ButtonToCatali from "../../../../../components/ButtonToCatali/ButtonToCatali";

import "react-confirm-alert/src/react-confirm-alert.css";
import { ButtonReturn } from "../../../style";

import { AiOutlineArrowLeft } from "react-icons/ai";

export default function JdSherWinEsmalte() {
  const InkInfo = paintsSherEsmalte.map(
    ({ ink, code, color, micras, potlife, catalisador }, i) => (
      <ButtonToCatali
        key={i}
        ink={ink}
        code={code}
        color={color}
        micras={micras}
        potlife={potlife}
        catalisador={catalisador}
      />
    )
  );
  return (
    <ContainerMaster>
      <ContainerNav>
        <ButtonReturn to={"/johndeere/sherwin"}>
          <AiOutlineArrowLeft size={15} fill={"#f1f1f1"} />
          VOLTAR
        </ButtonReturn>
        <LogoPedertractor
          src="../../../../../public/logo.png"
          alt="logo do grupo pedertractor"
        />
      </ContainerNav>
      <Title>Selecione a tinta</Title>

      <Container>{InkInfo}</Container>
    </ContainerMaster>
  );
}
