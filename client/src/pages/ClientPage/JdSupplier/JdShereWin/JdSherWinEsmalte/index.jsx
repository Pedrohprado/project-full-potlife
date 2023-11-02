import { Container, Button } from "./style";

import paintsSherEsmalte from "../../../../../data/paints";
import ButtonToCatali from "../../../../../components/ButtonToCatali/ButtonToCatali";

import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function JdSherWinEsmalte() {
  const submit = () => {
    confirmAlert({
      title: "Catalizador",
      message: "Qual catalizador vai ser utilizado?",
      buttons: [
        {
          label: "Yes",
          onClick: () => alert("Click Yes"),
        },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
    });
  };

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
    ({ ink, code, color, micras, potlife, catalisador }) => (
      <ButtonToCatali
        key={ink.toLowerCase()}
        ink={ink}
        code={code}
        color={color}
        micras={micras}
        potlife={potlife}
        catalisador={catalisador}
        onClick={() => handleClick(potlife)}
      />
    )
  );
  return (
    <>
      <h3>Escolha a tinta Esmalte da JhonDeere</h3>
      <Container>{InkInfo}</Container>
      <Button onClick={submit}>testando</Button>
    </>
  );
}
