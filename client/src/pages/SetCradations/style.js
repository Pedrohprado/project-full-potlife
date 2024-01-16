import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  width: 40%;
  height: 300px;

  padding: 20px;

  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 17px 40px;
  background-color: black;
  color: white;

  border: none;
  border-radius: 7px;
`;
