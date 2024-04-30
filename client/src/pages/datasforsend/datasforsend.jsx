import React from 'react';
import { GlobalContext } from '../../context/context-form';
import { POST_DATAS } from '../../api';
import {
  Button,
  Container,
  GridContainer,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Title,
  Tr,
} from './style';
import { useNavigate } from 'react-router-dom';
import ErrorFLag from '../../components/errorflag/ErrorFLag';

const DatasForSend = () => {
  const [art, setArt] = React.useState('');
  const navigate = useNavigate();

  const {
    name,
    card,
    cabin,
    unit,
    client,
    setClient,
    forn,
    setForn,
    typeInk,
    setTypeInk,
    ink,
    setInk,
    codeInk,
    setCodeInk,
    potlife,
    setPotlife,
    batch,
    setBatch,
    catalyst,
    setCatalyst,
    timer,
    setTimer,
    press,
    setPress,
    filter,
    setFilter,
    visc,
    setVisc,
    flowRate,
    setFlowRate,
    umity,
    setUmity,
    temperature,
    setTemperature,
    orval,
    setOrval,
  } = React.useContext(GlobalContext);

  async function sendInformations() {
    const body = {
      name,
      card,
      cabin,
      unit,
      client,
      forn,
      typeInk,
      ink,
      codeInk,
      potlife,
      batch,
      catalyst,
      umity,
      temperature,
      orval,
      press,
      filter,
      visc,
      flowRate,
      timer,
    };

    try {
      const { url, options } = POST_DATAS(body);
      const response = await fetch(url, options);
      const data = await response.json();

      console.log(response);
      console.log(data);

      if (response.status === 201) {
        setArt(data.respost);
      }
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    if (art) {
      const timeOut = setTimeout(() => {
        setArt('');
        setClient('');
        setForn('');
        setTypeInk('');
        setInk('');
        setCodeInk('');
        setPotlife('');
        setBatch('');
        setCatalyst(' ');
        setTimer('');
        setPress('');
        setFilter('');
        setVisc('');
        setFlowRate('');
        setUmity('');
        setTemperature('');
        setOrval('');
        navigate('/home');
      }, 5000);

      return () => clearTimeout(timeOut);
    }
  }, [
    art,
    navigate,
    setBatch,
    setCatalyst,
    setClient,
    setCodeInk,
    setFilter,
    setFlowRate,
    setForn,
    setInk,
    setOrval,
    setPotlife,
    setPress,
    setTemperature,
    setTimer,
    setTypeInk,
    setUmity,
    setVisc,
  ]);

  return (
    <Container>
      {art ? <ErrorFLag art={art} /> : null}
      <Title>revisão do processo</Title>
      <GridContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>nome</Th>
              <Th>cartão</Th>
              <Th>cabine</Th>
              <Th>empresa</Th>
              <Th>cliente</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>{name}</Td>
              <Td>{card}</Td>
              <Td>{cabin}</Td>
              <Td>{unit}</Td>
              <Td>{client}</Td>
            </Tr>
          </Tbody>
        </Table>

        <Table>
          <Thead>
            <Tr>
              <Th>fornecedor</Th>
              <Th>tipo de tinta</Th>
              <Th>tinta</Th>
              <Th>código</Th>
              <Th>potlife</Th>
              <Th>lote</Th>
              <Th>catalizador</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>{forn}</Td>
              <Td>{typeInk}</Td>
              <Td style={{ fontSize: '10px' }}>{ink}</Td>
              <Td>{codeInk}</Td>
              <Td>{potlife} min</Td>
              <Td>{batch}</Td>
              <Td>{catalyst}</Td>
            </Tr>
          </Tbody>
        </Table>

        <Table>
          <Thead>
            <Tr>
              <Th>temperatura</Th>
              <Th>umidade</Th>
              <Th>p. orvalho</Th>
              <Th>pr. tambor</Th>
              <Th>pr. filtro</Th>
              <Th>viscosidade</Th>
              <Th>vaz. de tinta</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>{temperature} ºC</Td>
              <Td>{umity} %</Td>
              <Td>{orval} ºC</Td>
              <Td>{press} psi</Td>
              <Td>{filter} psi</Td>
              <Td>{visc} seg</Td>
              <Td>{flowRate} ml</Td>
            </Tr>
          </Tbody>
        </Table>

        <Table>
          <Thead>
            <Tr>
              <Th>tempo iniciado</Th>
              <Th>tempo finalizado</Th>
              <Th>tempo trabalhado</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>{timer.inicio}</Td>
              <Td>{timer.finalizado}</Td>
              <Td>{timer.trabalhado} min</Td>
            </Tr>
          </Tbody>
        </Table>
      </GridContainer>
      <Button onClick={sendInformations}>enviar</Button>
    </Container>
  );
};

export default DatasForSend;
