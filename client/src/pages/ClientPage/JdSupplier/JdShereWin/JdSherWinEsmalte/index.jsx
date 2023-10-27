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

import axios from "axios";

import paintsSherEsmalte from "../../../../../data/paints";

export default function JdSherWinEsmalte() {
  const handleClick = async (potlife) => {
    const formData = new FormData();
    formData.append("value", potlife);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    try {
      const response = await axios.post("/value", formData, config);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const InkInfo = paintsSherEsmalte.map(
    ({ ink, code, color, micras, potlife }) => (
      <ButtonPaints
        key={ink.toLowerCase()}
        onClick={() => handleClick(potlife)}
      >
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
