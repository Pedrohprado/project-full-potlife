import React from 'react';
import axios from 'axios';
import {
  Container,
  ContainerInfo,
  ContainerMaster,
  TempeHum,
  TempHumHumidade,
  PontoDeOrvalho,
  Aplication,
  Title,
  TitleContainer,
  MicroTitle,
  ControlContainer,
  Loading,
  Loader,
} from './style';

import {
  FaTemperatureArrowUp,
  FaTemperatureArrowDown,
  FaDroplet,
  FaPaintRoller,
  FaRegSnowflake,
} from 'react-icons/fa6';

import DateControl from '../DateControl';

const ControlOrv = () => {
  const [temp, setTemp] = React.useState(null);
  const [hum, setHum] = React.useState(null);
  const [orv, setOrv] = React.useState(null);
  const [tempInk, setTempInk] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(false);
    async function fetchData() {
      try {
        const response = await axios.get(import.meta.env.VITE_BASE_URL_ORV);
        const temperatura = response.data.temperatura;
        const humidade = response.data.umidade;

        setTemp(temperatura);
        setHum(humidade);
        setLoading(true);
      } catch (error) {
        console.error(error);
      }
    }

    const interval = setInterval(fetchData, 3000);

    return () => clearInterval(interval);
  }, []);

  //NOTES: The Pull Request is here, because, humity and Temperature have
  //a small difenrence between real and sensor cap, i can try set a const regulator
  React.useEffect(() => {
    let Tpo = (hum / 100) ** 0.125 * (112 + 0.9 * temp) + 0.1 * temp - 112;

    setOrv(parseFloat(Tpo.toFixed(2)));
  }, [hum, temp]);

  React.useEffect(() => {
    const tempink = orv + 3;
    setTempInk(parseFloat(tempink.toFixed(2)));
  }, [orv]);

  return (
    <Container>
      <ContainerMaster>
        <DateControl />
        {loading ? (
          <ContainerInfo>
            <TitleContainer>Levantamento de hoje</TitleContainer>
            <TempeHum>
              {temp > 23 ? (
                <FaTemperatureArrowUp
                  size={25}
                  fill='#E92424'
                  style={{ marginLeft: '50px' }}
                />
              ) : (
                <FaTemperatureArrowDown
                  size={25}
                  fill='#225DFE'
                  style={{ marginLeft: '50px' }}
                />
              )}
              <ControlContainer>
                <MicroTitle>Temperatura</MicroTitle>
                <Title>{temp}º C</Title>
              </ControlContainer>
            </TempeHum>

            <TempHumHumidade>
              <FaDroplet
                size={20}
                fill='#225DFE'
                style={{ marginLeft: '50px' }}
              />

              <ControlContainer>
                <MicroTitle>Umidade</MicroTitle>
                <Title>{hum}%</Title>
              </ControlContainer>
            </TempHumHumidade>

            <PontoDeOrvalho>
              <FaRegSnowflake
                size={25}
                fill='#225DFE'
                style={{ marginLeft: '50px' }}
              />
              <ControlContainer>
                <MicroTitle>Ponto de orvalho</MicroTitle>
                <Title>{orv}º</Title>
              </ControlContainer>
            </PontoDeOrvalho>

            <Aplication>
              <FaPaintRoller
                size={20}
                fill='#225DFE'
                style={{ marginLeft: '50px' }}
              />

              <ControlContainer>
                <MicroTitle>Aplicação</MicroTitle>
                <Title>{tempInk}º</Title>
              </ControlContainer>
            </Aplication>
          </ContainerInfo>
        ) : (
          <Loading>
            <Loader></Loader>
          </Loading>
        )}
      </ContainerMaster>
    </Container>
  );
};

export default ControlOrv;
