import styled from "styled-components";

export const Headeing = styled.header`
  width: 100%;

  margin: 0px 0px 10px 0px;
  padding: 0px 35px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
    gap: 30px;
  }
`;

export const LogoPedertractor = styled.img`
  width: 10rem;
`;
