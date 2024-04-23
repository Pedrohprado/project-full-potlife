import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ButtonReturn = styled(Link)`
  padding: 17px 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  font-size: 1.2rem;

  color: #f1f1f1;

  border-radius: 4px;

  background-color: gray;
  transition: background 0.3s;

  &:hover {
    background-color: #181717b7;
  }
`;

export const Text = styled.h3`
  margin: 20px 0px 40px 0px;

  text-align: center;

  color: #101010;
  font-weight: 400;
  font-size: 1.6rem;
`;

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  text-align: center;

  @media screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonClient = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 45px 55px;

  color: #f1f1f1;
  background-color: ${(props) => props.color || '#7f8c8d'};

  border-radius: 2px;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    box-shadow: 2px 2px 20px ${(props) => props.color || '#7f8c8d'};
  }
  @media screen and (max-width: 500px) {
    padding: 40px 0px;
    width: 100%;
  }
`;

export const TextAux = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  text-shadow: 2px 2px 10px #101010;
`;
