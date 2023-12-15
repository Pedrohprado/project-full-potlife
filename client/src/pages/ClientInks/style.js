import styled from 'styled-components';

export const ContainerMaster = styled.main`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  padding: 20px 20px;
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 0px;
  column-gap: 50px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }
`;
