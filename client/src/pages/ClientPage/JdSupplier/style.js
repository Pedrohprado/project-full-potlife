import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 93.5vh;

  gap: 5.5rem;
`;

export const Button = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px 40px;

  border-radius: 4px;
  background-color: #101010;

  transition: background 0.3s;

  &:hover {
    background-color: #181717b7;
  }
`;
