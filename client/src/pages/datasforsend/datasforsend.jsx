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
  const [body, setBody] = React.useState('');
  const [hour, setHour] = React.useState({
    inicio: '',
    finalizado: '',
    trabalhado: '',
  });

  const navigate = useNavigate();

  const { setReset } = React.useContext(GlobalContext);

  React.useEffect(() => {
    function catchTimer() {
      const time = localStorage.getItem('timer');
      const teste = JSON.parse(time);

      setHour(teste);
    }

    catchTimer();
  }, []);
  React.useEffect(() => {
    function catchLocal() {
      const time = localStorage.getItem('timer');
      const corpo = {
        name: localStorage.getItem('name'),
        card: localStorage.getItem('card'),
        cabin: localStorage.getItem('cabin'),
        unit: localStorage.getItem('unit'),
        client: localStorage.getItem('client'),
        forn: localStorage.getItem('forn'),
        typeInk: localStorage.getItem('typeInk'),
        ink: localStorage.getItem('ink'),
        codeInk: localStorage.getItem('codeInk'),
        potlife: localStorage.getItem('potlife'),
        batch: localStorage.getItem('batch'),
        catalyst: localStorage.getItem('catalyst'),
        umity: localStorage.getItem('umity'),
        temperature: localStorage.getItem('temperature'),
        orval: localStorage.getItem('orval'),
        press: localStorage.getItem('press'),
        filter: localStorage.getItem('filter'),
        visc: localStorage.getItem('visc'),
        flowRate: localStorage.getItem('flowrate'),
        timer: JSON.parse(time),
      };

      setBody(corpo);
    }
    catchLocal();
  }, []);

  async function sendInformations() {
    try {
      const { url, options } = POST_DATAS(body);
      const response = await fetch(url, options);
      const data = await response.json();

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
        setReset(true);
        navigate('/home');
      }, 5000);

      return () => clearTimeout(timeOut);
    }
  }, [art, navigate, setReset]);

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
              <Td>{body.name}</Td>
              <Td>{body.card}</Td>
              <Td>{body.cabin}</Td>
              <Td>{body.unit}</Td>
              <Td>{body.client}</Td>
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
              <Td>{body.forn}</Td>
              <Td>{body.typeInk}</Td>
              <Td style={{ fontSize: '10px' }}>{body.ink}</Td>
              <Td>{body.codeInk}</Td>
              <Td>{body.potlife} min</Td>
              <Td>{body.batch}</Td>
              <Td>{body.catalyst}</Td>
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
              <Td>{body.temperature} ºC</Td>
              <Td>{body.umity} %</Td>
              <Td>{body.orval} ºC</Td>
              <Td>{body.press} psi</Td>
              <Td>{body.filter} psi</Td>
              <Td>{body.visc} seg</Td>
              <Td>{body.flowRate} ml</Td>
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
              <Td>{hour.inicio}</Td>
              <Td>{hour.finalizado}</Td>
              <Td>{hour.trabalhado} min</Td>
            </Tr>
          </Tbody>
        </Table>
      </GridContainer>
      <Button onClick={sendInformations}>enviar</Button>
    </Container>
  );
};

export default DatasForSend;
