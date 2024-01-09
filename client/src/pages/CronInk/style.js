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

  color: white;
  background-color: #101010;
`;
