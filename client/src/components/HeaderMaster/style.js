import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Button = styled.button`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 100%;
  background-color: #f4f4f5;
`;

export const DropMenu = styled.div`
  display: flex;

  background-color: white;
  flex-direction: column;
  border-radius: 7px;
  border: 1px solid #f4f4f5;
  list-style: none;
  position: absolute;
  top: 62px;
  right: 50px;
  width: 40%;
`;

export const TitleList = styled.p`
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  display: flex;
  padding: 20px 30px;
  border-bottom: 1px solid #f4f4f5;
`;

export const Optins = styled.button`
  font-size: 14px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: transparent;
  border: none;

  padding: 25px 30px;

  transition: 0.3s;
  :hover {
    background-color: red;
  }
`;
