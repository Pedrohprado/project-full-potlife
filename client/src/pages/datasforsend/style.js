import styled from 'styled-components';

export const Container = styled.main`
  padding: 90px 10px 50px 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 16px;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
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
  gap: 5px;
`;

export const Th = styled.th`
  font-size: 12px;
  padding: 5px 10px;
  text-align: center;
  font-weight: 400;
  width: 40%;
  background-color: #101010;
  color: white;
  border-radius: 4px 4px 0px 0px;
`;

export const Td = styled.td`
  border-radius: 0px 0px 4px 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  font-size: 14px;
  text-align: center;
  padding: 10px;
  border: 0.5px solid;
`;

export const Button = styled.button`
  margin-top: 25px;
  padding: 10px 30px;
  background-color: #101010;
  color: white;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  transition: 0.3s;

  &:hover {
    background-color: #2b2b2b;
  }
`;
