/* eslint-disable react/prop-types */
import React from 'react';
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
import { CONFIRM_CATALIZADOR } from '../../api';

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

    console.log(verific);
    console.log(catalizador);

    if (verific == catalizador) {
      try {
        const { url, options } = CONFIRM_CATALIZADOR(data);
        const response = await fetch(url, options);
        window.alert('código enviado!');
        console.log(response);
        setPotlifeTest(potlife);
        navigate('/cron');
      } catch (error) {
        console.error(error);
        window.alert(`Erro ao enviar: ${error}`);
      }

      switch (potlife) {
        case 90:
          setHours(1);
          setMinutes(30);
          setSeconds(0);
          break;
        case 120:
          setHours(2);
          setMinutes(0);
          setSeconds(0);
          break;
        case 180:
          setHours(3);
          setMinutes(0);
          setSeconds(0);
          break;
        case 240:
          setHours(4);
          setMinutes(0);
          setSeconds(0);
          break;
        default:
          setHours(0);
          setMinutes(0);
          setSeconds(0);
          break;
      }

      setValue(false);
    } else {
      window.alert('catalizador incorreto: erro na mistura');
      setVerific('');
      inputFocus.current.focus();
    }
  }
  return (
    <Container key={ink}>
      <Squad>
        <Title>confirme o catalizador</Title>

        <ContainerInfo>
          <Ink>{ink}</Ink>
          <Color color={color}></Color>
        </ContainerInfo>

        <Input
          ref={inputFocus}
          type='text'
          value={verific.toLocaleUpperCase()}
          onChange={(e) => setVerific(e.target.value.toUpperCase())}
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
