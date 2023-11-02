/* eslint-disable react/prop-types */
import {
  Button,
  DescriptionInk,
  CodeInk,
  BoxInfo,
  Color,
  Micras,
  PotLife,
} from "./style";

export default function ButtonToCatali({
  ink,
  code,
  color,
  micras,
  potlife,
  onClick,
}) {
  return (
    <Button key={ink.toLowerCase()} onClick={onClick}>
      <DescriptionInk>{ink.toUpperCase()}</DescriptionInk>
      <CodeInk>
        código da tinta: <span>{code}</span>
      </CodeInk>
      <BoxInfo>
        <Color color={color}></Color>
        <Micras>{micras} µm</Micras>
        <PotLife>{potlife} min</PotLife>
      </BoxInfo>
    </Button>
  );
}
