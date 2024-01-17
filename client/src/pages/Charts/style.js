import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerGraphics = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 100px;
  }
`;
