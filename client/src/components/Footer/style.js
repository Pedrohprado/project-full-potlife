import styled from 'styled-components';

export const Footeres = styled.footer`
  background-color: white;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const Descrip = styled.p`
  font-size: 14px;
  font-weight: 400;
  padding: 15px 10px;

  @media screen and (max-width: 500px) {
    font-size: 13px;
    font-weight: 500;
    padding: 10px;
    text-align: center;
    line-height: 1rem;
  }
`;

export const Logo = styled.img`
  width: 4.5rem;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
