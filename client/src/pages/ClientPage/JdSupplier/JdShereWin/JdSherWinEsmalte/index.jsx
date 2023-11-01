import { Container } from "./style";

import paintsSherEsmalte from "../../../../../data/paints";
import ButtonToCatali from "../../../../../components/ButtonToCatali/ButtonToCatali";

import axios from "axios";

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
      <ButtonToCatali
        key={ink.toLowerCase()}
        ink={ink}
        code={code}
        color={color}
        micras={micras}
        potlife={potlife}
        onClick={() => handleClick(potlife)}
      />
    )
  );
  return (
    <>
      <h3>Escolha a tinta Esmalte da JhonDeere</h3>
      <Container>{InkInfo}</Container>
    </>
  );
}
