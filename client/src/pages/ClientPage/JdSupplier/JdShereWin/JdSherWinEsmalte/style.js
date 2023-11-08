import styled from "styled-components";

export const ContainerMaster = styled.main`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  padding: 20px 20px;
`;

export const ContainerNav = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0px 0px 10px 0px;
  padding: 0px 35px;
`;

export const LogoPedertractor = styled.img`
  width: 10rem;
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
`;
