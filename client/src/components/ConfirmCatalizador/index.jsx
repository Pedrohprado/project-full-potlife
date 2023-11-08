/* eslint-disable react/prop-types */
import React from "react";

import axios from "axios";

import {
  Container,
  Squad,
  Title,
  ContainerInfo,
  Ink,
  Color,
  Input,
  ContainerButtons,
  Button,
} from "./style";

const ConfirmCatalizador = ({
  ink,
  potlife,
  color,
  catalizador,
  onClick,
  setValue,
}) => {
  const [verific, setVerific] = React.useState("");
  const inputFocus = React.useRef();

  React.useEffect(() => {
    inputFocus.current.focus();
  }, []);

  async function onChange() {
    const formData = new FormData();

    formData.append("value", potlife);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    if (verific == catalizador) {
      try {
        const response = await axios.post("/value", formData, config);
        window.alert("código enviado!");
        console.log(response.data);
      } catch (error) {
        console.error(error);
        window.alert(`Erro ao enviar: ${error}`);
      }

      setValue(false);
    } else {
      window.alert("catalizador incorreto: erro na mistura");
      setVerific("");
      inputFocus.current.focus();
    }
  }
  return (
    <Container key={ink}>
      <Squad>
        <Title>Confirme o catalizador</Title>

        <ContainerInfo>
          <Ink>{ink}</Ink>
          <Color color={color}></Color>
        </ContainerInfo>

        <Input
          ref={inputFocus}
          type="number"
          value={verific}
          onChange={(e) => setVerific(e.target.value)}
        />
        <ContainerButtons>
          <Button onClick={onClick}>VOLTAR</Button>
          <Button color="green" onClick={onChange}>
            ENVIAR
          </Button>
        </ContainerButtons>
      </Squad>
    </Container>
  );
};

export default ConfirmCatalizador;
