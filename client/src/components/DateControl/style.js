import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const ContainerDay = styled.div`
  width: 95%;
  height: 20%;
  border-bottom: 2px solid #f5fafe;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 10%;
    margin-top: 20px;
  }
`;

export const TitleWelcome = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 30px;
`;

export const TitleData = styled.h3`
  font-size: 0%.9;
  font-weight: 500;
  color: gray;
`;

export const Return = styled(Link)`
  border-radius: 50%;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(180deg);
  background-color: gray;

  position: fixed;
  top: 40px;
  right: 40px;

  cursor: pointer;

  @media screen and (max-width: 768px) {
    top: 70px;
  }
`;
