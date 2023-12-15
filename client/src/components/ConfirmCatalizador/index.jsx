/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import { GlobalContext } from '../../context/context-form';

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
} from './style';
import { useNavigate } from 'react-router-dom';

const ConfirmCatalizador = ({
  ink,
  potlife,
  color,
  catalizador,
  onClick,
  setValue,
}) => {
  const [verific, setVerific] = React.useState('');
  const inputFocus = React.useRef();
  const { setPotlifeTest, setHours, setMinutes, setSeconds } =
    React.useContext(GlobalContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    inputFocus.current.focus();
  }, []);

  async function onChange() {
    const data = {
      potlife: potlife,
    };
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };

    if (verific == catalizador) {
      try {
        const response = await axios.post(
          'http://localhost:3333/potlife',
          // "https://api-pintura-comun.onrender.com/potlife",
          JSON.stringify(data),
          config
        );
        window.alert('código enviado!');
        console.log(response.data);
        setPotlifeTest(potlife);
      } catch (error) {
        console.error(error);
        window.alert(`Erro ao enviar: ${error}`);
      }
      if (potlife === 120) {
        setHours(2);
        setMinutes(0);
        setSeconds(0);
      }
      setValue(false);
      navigate('/cron');
    } else {
      window.alert('catalizador incorreto: erro na mistura');
      setVerific('');
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
          type='text'
          value={verific.toLocaleUpperCase()}
          onChange={(e) => setVerific(e.target.value)}
        />
        <ContainerButtons>
          <Button onClick={onClick}>VOLTAR</Button>
          <Button color='green' onClick={onChange}>
            ENVIAR
          </Button>
        </ContainerButtons>
      </Squad>
    </Container>
  );
};

export default ConfirmCatalizador;
