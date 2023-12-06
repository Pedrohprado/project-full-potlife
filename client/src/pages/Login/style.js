import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormLogin = styled.form`
  width: 100%;
  height: 100vh;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TitleLogin = styled.h1`
  font-size: 1.9rem;
  font-weight: 700;
  color: #225dfe;
`;

export const SubTitleLogin = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: #225dfe;
  margin-bottom: 30px;
`;

export const ContainerInputsLogin = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export const Information = styled.p`
  margin-top: 40px;
  font-size: 0.9rem;
  font-weight: 600;
`;

export const LinkForRegister = styled(Link)`
  font-size: 0.9rem;
  text-decoration: none;
  color: #225dfe;
`;

export const ButtonLogin = styled.button`
  margin-top: 30px;
  width: 150px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 25px;
  background-color: #225dfe;
  color: white;

  font-size: 1rem;
  font-weight: 600;
  transition: background 0.7s;

  &:hover {
    background-color: white;
    color: #225dfe;
  }
`;

export const Loading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fbfbfb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loader = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #225dfe;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media screen and (max-width: 768px) {
    border: 8px solid #f3f3f3;
    border-top: 8px solid #225dfe;
  }
`;

export const Error = styled.p`
  margin-top: 30px;
  font-size: 0.85rem;
  font-weight: 600;
  color: red;
`;
