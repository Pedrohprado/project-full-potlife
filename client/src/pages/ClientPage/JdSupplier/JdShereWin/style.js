import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  height: 100vh;

  padding-top: 20px;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  margin-top: 100px;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0px 0px 0px;
  gap: 150px;
`;

export const Button = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px 50px;
  font-size: 1.2rem;

  border-radius: 4px;
  background-color: #101010;

  transition: background 0.3s;

  &:hover {
    background-color: #181717b7;
  }
`;
