import styled from 'styled-components';

export const ContainerInfo = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 20px;
`;

export const ContainerPaintPrep = styled.section`
  width: 100%;
  margin: 20px 0px 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TempeHum = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  gap: 10px;

  background-color: #fbfbfb;
  border-radius: 7px;
`;

export const TempHumHumidade = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  gap: 10px;

  background-color: #fbfbfb;
  border-radius: 7px;
`;

export const PontoDeOrvalho = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  gap: 10px;

  background-color: #fbfbfb;
  border-radius: 7px;
`;

export const Aplication = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  gap: 10px;
  background-color: #fbfbfb;
  border-radius: 7px;
`;

export const MicroTitle = styled.h4`
  color: gray;
  font-weight: 400;
  font-size: 15px;
`;

export const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 10px;
`;
export const Title = styled.h2`
  font-size: 18px;
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
