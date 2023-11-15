import styled from "styled-components";

export const ButtonReturnMaster = styled.button`
  padding: 17px 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  font-size: 1.2rem;

  color: #f1f1f1;

  border-radius: 4px;
  border: none;

  background-color: gray;
  transition: background 0.3s;

  &:hover {
    background-color: #181717b7;
  }

  @media screen and (max-width: 500px) {
    width: 200px;
  }
`;
