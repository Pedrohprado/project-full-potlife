import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background-color: #dfdfdf;
  border-radius: 3px;

  color: #101010;

  padding: 15px;

  width: 350px;
  height: 80%;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "h2 h2 h2"
    "h3 h3 h3"
    "box box box";

  cursor: pointer;
`;

export const DescriptionInk = styled.h2`
  grid-area: h2;
  font-size: 0.9rem;
  font-weight: 700;
  width: 100%;
`;

export const CodeInk = styled.h2`
  grid-area: h3;
  font-size: 0.9rem;
  font-weight: 400;

  margin: 10px 0px 40px 0px;

  span {
    font-size: 0.8rem;
    font-weight: 700;
  }
`;

export const BoxInfo = styled.div`
  grid-area: box;

  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
`;

export const Color = styled.p`
  border-radius: 2px;
  padding: 12px;
  background-color: ${(props) => props.color};
`;

export const Micras = styled.p`
  font-size: 0.9rem;
`;

export const PotLife = styled.h4`
  font-size: 0.9rem;
`;
