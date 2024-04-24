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
  Label,
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
  const inputFocus = React.useRef();

  const {
    batch,
    setBatch,
    catalyst,
    setCatalyst,
    setPotlifeTest,
    setHours,
    setMinutes,
    setSeconds,
  } = React.useContext(GlobalContext);

  const navigate = useNavigate();

  React.useEffect(() => {
    inputFocus.current.focus();
  }, []);

  function onChange() {
    if (catalyst == catalizador) {
      window.alert('código enviado!');
      setPotlifeTest(potlife);
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
      navigate('/preparacao');
      setValue(false);
    } else {
      window.alert('catalizador incorreto: erro na mistura');
      setCatalyst('');
      inputFocus.current.focus();
    }
  }

  return (
    <Container>
      <Squad>
        <Title>confirme as informações</Title>

        <ContainerInfo>
          <Ink>{ink}</Ink>
          <Color color={color}></Color>
        </ContainerInfo>

        <Label>
          lote da tinta
          <Input
            ref={inputFocus}
            type='text'
            value={batch.toLocaleUpperCase()}
            onChange={({ target }) => setBatch(target.value.toUpperCase())}
          />
        </Label>

        <Label>
          catalizador
          <Input
            type='text'
            value={catalyst.toLocaleUpperCase()}
            onChange={({ target }) => setCatalyst(target.value.toUpperCase())}
          />
        </Label>

        <ContainerButtons>
          <Button onClick={onClick}>voltar</Button>
          <Button color='gray' onClick={onChange}>
            proximo
          </Button>
        </ContainerButtons>
      </Squad>
    </Container>
  );
};

export default ConfirmCatalizador;
