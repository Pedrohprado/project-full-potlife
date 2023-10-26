import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;

export const Text = styled.h1`
  font-weight: 500;
  font-size: 1.3rem;
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: none;
  border-radius: 0.2rem;
  background: #7f8c8d;
  height: 34px;
  width: 136px;
  transition: background 0.3s;

  &:hover {
    background-color: #7f8c8d7c;
  }
`;
