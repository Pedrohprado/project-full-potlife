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

  background-color: white;
`;

export const Button = styled.button`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 100%;
  background-color: #f4f4f5;

  transition: transform 0.5s;
`;

export const DropMenu = styled.div`
  width: 40%;
  max-height: 270px;
  display: flex;
  overflow-y: auto;

  flex-direction: column;

  background-color: white;
  border-radius: 7px;
  border: 1px solid #f4f4f5;
  list-style: none;

  z-index: 100;

  position: absolute;
  top: 62px;
  right: 50px;

  opacity: 0;
  transform: translateY(-20px);
  animation: animationUp 0.4s forwards;

  @keyframes animationUp {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  @media screen and (max-width: 500px) {
    right: 20px;
    width: 90%;
    height: 300px;
  }
`;

export const TitleList = styled.p`
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  display: flex;
  padding: 20px 30px;
  border-bottom: 1px solid #f4f4f5;

  @media screen and (max-width: 500px) {
    padding: 10px;
  }
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

  @media screen and (max-width: 500px) {
    padding: 15px 10px;
  }
`;
