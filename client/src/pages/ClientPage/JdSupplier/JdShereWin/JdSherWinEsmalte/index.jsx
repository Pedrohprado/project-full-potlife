import {
  Container,
  ButtonPaints,
  DescriptionInk,
  CodeInk,
  BoxInfo,
  Color,
  Micras,
  PotLife,
} from "./style";

import paintsSherEsmalte from "../../../../../data/paints";

export default function JdSherWinEsmalte() {
  const InkInfo = paintsSherEsmalte.map(
    ({ ink, code, color, micras, potlife }) => (
      <ButtonPaints key={ink.toLowerCase()}>
        <DescriptionInk>{ink.toUpperCase()}</DescriptionInk>
        <CodeInk>
          código da tinta: <span>{code}</span>
        </CodeInk>
        <BoxInfo>
          <Color color={color}></Color>
          <Micras>{micras} µm</Micras>
          <PotLife>{potlife} min</PotLife>
        </BoxInfo>
      </ButtonPaints>
    )
  );
  return <Container>{InkInfo}</Container>;
}
