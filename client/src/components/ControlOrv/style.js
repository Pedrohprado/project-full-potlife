import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 768px) {
    height: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
  }
`;

export const ContainerMaster = styled.div`
  width: 80vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  color: #101010;
`;

export const ContainerInfo = styled.div`
  width: 80vw;
  height: 100%;
  padding: 30px;

  display: grid;
  gap: 10px;
  grid-template-areas:
    'titulo titulo'
    'tempera hum'
    'pont apl';

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
  }
`;

export const TitleContainer = styled.h3`
  grid-area: titulo;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const TempeHum = styled.div`
  grid-area: tempera;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 40px;

  padding: 30px 20px;

  background-color: #fbfbfb;
  border-radius: 7px;

  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;

export const TempHumHumidade = styled.div`
  grid-area: hum;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 40px;

  padding: 30px 20px;

  background-color: #fbfbfb;
  border-radius: 7px;

  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;

export const PontoDeOrvalho = styled.div`
  grid-area: pont;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 40px;

  padding: 30px 20px;

  background-color: #fbfbfb;
  border-radius: 7px;
  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;

export const Aplication = styled.div`
  grid-area: apl;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 40px;

  padding: 30px 20px;

  background-color: #fbfbfb;
  border-radius: 7px;
  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;

export const MicroTitle = styled.h4`
  color: gray;
  font-weight: 400;
`;

export const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 10px;
`;
export const Title = styled.h2`
  font-size: 1.5rem;
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
