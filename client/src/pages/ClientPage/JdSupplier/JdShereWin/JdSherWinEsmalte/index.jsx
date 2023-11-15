import { Container, ContainerMaster, Title } from "./style";

import paintsSherEsmalte from "../../../../../data/paints";
import ButtonToCatali from "../../../../../components/ButtonToCatali/ButtonToCatali";

import "react-confirm-alert/src/react-confirm-alert.css";

import Header from "../../../../../components/Header";

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
      <Header />
      <Title>Selecione a tinta</Title>

      <Container>{InkInfo}</Container>
    </ContainerMaster>
  );
}
