import styled from "styled-components";

import { Link } from "react-router-dom";

export const Headeing = styled.header`
  width: 100%;

  margin: 0px 0px 10px 0px;
  padding: 0px 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
    gap: 30px;
  }
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

  @media screen and (max-width: 500px) {
    width: 200px;
  }
`;

export const LogoPedertractor = styled.img`
  width: 10rem;
`;
