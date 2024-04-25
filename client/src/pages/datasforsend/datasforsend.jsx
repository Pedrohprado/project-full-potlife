import React from 'react';
import { GlobalContext } from '../../context/context-form';
import { POST_DATAS } from '../../api';
import {
  Container,
  GridContainer,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from './style';

const DatasForSend = () => {
  const {
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
      await fetch(url, options);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Container>
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
              <Th>codigo</Th>
              <Th>potlife</Th>
              <Th>lote</Th>
              <Th>catalizador</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>{forn}</Td>
              <Td>{typeInk}</Td>
              <Td>{ink}</Td>
              <Td>{codeInk}</Td>
              <Td>{potlife}</Td>
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
              <Th>ponto de orvalho</Th>
              <Th>pressão do tambor</Th>
              <Th>pressão do filtro</Th>
              <Th>viscosidade</Th>
              <Th>vazão de tinta</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>{temperature}</Td>
              <Td>{umity}</Td>
              <Td>{orval}</Td>
              <Td>{press}</Td>
              <Td>{filter}</Td>
              <Td>{visc}</Td>
              <Td>{flowRate}</Td>
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
              <Td>{timer.trabalhado}</Td>
            </Tr>
          </Tbody>
        </Table>
      </GridContainer>

      <button onClick={sendInformations}>enviar</button>
    </Container>
  );
};

export default DatasForSend;
