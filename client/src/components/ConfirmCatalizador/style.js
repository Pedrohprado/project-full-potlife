import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  background-color: #101010c8;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Squad = styled.div`
  width: 50%;
  height: 70%;

  background-color: white;
  border-radius: 7px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.6rem;
  align-items: center;
  width: 80%;

  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Ink = styled.h2`
  font-size: 20px;
  font-weight: bold;
  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;

export const Color = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.color};

  @media screen and (max-width: 500px) {
    width: 100px;
    margin-bottom: 30px;
  }
`;

export const Input = styled.input`
  padding: 5px 20px;
  outline: none;
`;
export const ContainerButtons = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.6rem;
  width: 80%;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 7px;
  color: white;
  font-weight: bold;
  background-color: ${(props) => (props.color ? props.color : "gray")};
  transition: 0.5;

  &:hover {
    box-shadow: 1px 1px 20px ${(props) => (props.color ? props.color : "gray")};
  }
`;
