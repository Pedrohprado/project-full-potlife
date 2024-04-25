import styled from 'styled-components';

export const Container = styled.main`
  padding: 90px 10px 50px 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;
`;

export const Table = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Thead = styled.thead`
  width: 100%;
`;

export const Tbody = styled.tbody`
  width: 100%;
`;

export const Tr = styled.tr`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Th = styled.th`
  padding: 2px 5px;
  font-size: 12px;
  text-align: center;
  width: 20%;
  border: 1px solid black;
`;

export const Td = styled.td`
  width: 20%;
  border: 1px solid black;
  padding: 2px 5px;
  font-size: 14px;
  text-align: center;
`;

export const Trb = styled.tr`
  display: flex;

  border-bottom: 1px solid #dddddd;
`;
