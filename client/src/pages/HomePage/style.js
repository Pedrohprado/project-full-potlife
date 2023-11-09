import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
`;

export const Text = styled.h1`
  font-weight: 500;
  font-size: 1.3rem;
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 50px;
  cursor: pointer;
  border-radius: 0.2rem;
  background: #7f8c8d;

  transition: background 0.3s;

  &:hover {
    background-color: #7f8c8d7c;
  }
`;
