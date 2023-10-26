import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const ButtonPaints = styled.button`
  padding: 15px;

  width: 300px;
  height: 70%;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "h2 h2 h2"
    "h3 h3 h3"
    "box box box";

  border-radius: 5px;
  border: 1px solid #101010;

  cursor: pointer;
`;

export const DescriptionInk = styled.h2`
  grid-area: h2;
  font-size: 0.8rem;
`;

export const CodeInk = styled.h3`
  grid-area: h3;
  font-size: 0.8rem;
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
