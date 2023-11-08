import { Container } from "./style";

import paintsSherEsmalte from "../../../../../data/paints";
import ButtonToCatali from "../../../../../components/ButtonToCatali/ButtonToCatali";

import "react-confirm-alert/src/react-confirm-alert.css";

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
    <>
      <Container>{InkInfo}</Container>
    </>
  );
}
