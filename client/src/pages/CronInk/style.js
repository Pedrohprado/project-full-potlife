import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 500;
`;

export const ContainerCronMaster = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerCron = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 10px;

  font-size: 4rem;
`;

export const SubTitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 40px;
`;

export const Navgation = styled.nav`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 20px 35px;
  border: none;
  border-radius: 5px;

  cursor: pointer;

  color: white;
  background-color: #101010;
`;

export const ContainerInfo = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 100%;

  position: fixed;
  bottom: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #303030c7;
`;

export const ContainerAlert = styled.div`
  background-color: white;

  width: 50%;
  height: 15%;

  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 10px;
`;

export const ContainerInfoButton = styled.div`
  width: 80%;

  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: end;
  gap: 5px;
`;

export const ButtonInfo = styled.button`
  padding: 6px 20px;

  font-size: 0.8rem;
  font-weight: 500;

  background-color: ${(props) => (props.color ? props.color : 'white')};
  color: ${(props) => (props.colorText ? props.colorText : '#303030')};
  border: 0.1px solid #30303030;
  border-radius: 5px;

  cursor: pointer;
`;
