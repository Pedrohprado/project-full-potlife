import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;

  padding: 10px 0px 0px 0px;
  overflow-y: hidden;
`;

export const ButtonReturn = styled(Link)`
  font-size: 0%.8;
  color: #f1f1f1;

  margin-top: 10px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  border-radius: 4px;

  background-color: #101010;

  transition: background 0.3s;

  &:hover {
    background-color: #181717b7;
  }
`;

export const Text = styled.h3`
  font-size: 1.2rem;
  text-align: center;
  color: #101010;
  font-weight: 400;
  font-size: 1.6rem;
`;

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  text-align: center;
`;

export const ButtonClient = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 45px 55px;

  color: #f1f1f1;
  background-color: ${(props) => props.color || "#7f8c8d"};

  border-radius: 2px;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    border-radius: 10%;
  }
`;

export const TextAux = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  text-shadow: 2px 2px #101010;
`;

export const Fotter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;

  padding: 15px 0px 10px 0px;

  background-color: #101010;
  color: #f1f1f1;
  font-size: 0.8rem;
`;
