import styled from 'styled-components';

export const ButtonReturnMaster = styled.button`
  padding: 17px 40px;
  background-color: black;
  color: white;

  border-radius: 7px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  font-size: 1.2rem;

  border: none;

  transition: background 0.3s;

  &:hover {
    background-color: #181717b7;
  }

  @media screen and (max-width: 500px) {
    width: 200px;
  }
`;
