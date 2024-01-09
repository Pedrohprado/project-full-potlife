import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  width: 100%;
  height: 70px;

  padding: 50px 0px;

  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const ButtonNav = styled(Link)`
  padding: 10px 30px;
  background-color: blue;
  color: white;
  border-radius: 5px;
`;
