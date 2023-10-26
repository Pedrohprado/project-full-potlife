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

import { useState } from "react";
import axios from "axios";

import paintsSherEsmalte from "../../../../../data/paints";

export default function JdSherWinEsmalte() {
  const [value, setValue] = useState("");

  const formData = new FormData();

  formData.append("value", value);

  const config = {
    headers: { "content-type": "multipart/form-data" },
  };

  const handleClick = async () => {
    await axios.post("/value", formData, config);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const InkInfo = paintsSherEsmalte.map(
    ({ ink, code, color, micras, potlife }) => (
      <ButtonPaints key={ink.toLowerCase()} onClick={handleClick}>
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
  return (
    <Container>
      {InkInfo}
      <input type="text" value={value} onChange={handleChange} />
    </Container>
  );
}
