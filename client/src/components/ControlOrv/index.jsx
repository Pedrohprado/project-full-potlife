import React from "react";
import axios from "axios";
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
} from "./style";

import {
  FaTemperatureArrowUp,
  FaTemperatureArrowDown,
  FaDroplet,
  FaPaintRoller,
  FaRegSnowflake,
} from "react-icons/fa6";
import DateControl from "../DateControl";

const ControlOrv = () => {
  const [temp, setTemp] = React.useState(null);
  const [hum, setHum] = React.useState(null);
  const [orv, setOrv] = React.useState(null);
  const [tempInk, setTempInk] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://api-pintura-comun.onrender.com/condicao"
        );
        const temperatura = response.data.temperatura;
        const humidade = response.data.umidade;

        setTemp(temperatura);
        setHum(humidade);
      } catch (error) {
        console.error(error);
      }
    }

    const interval = setInterval(fetchData, 3000);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    let yTUR = Math.log(
      (hum / 100) * Math.exp((17.368 * temp) / (238.88 + temp))
    );
    let Tpo = (238.88 * yTUR) / (17.368 - yTUR);

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
        <ContainerInfo>
          <TitleContainer>Overview de hoje</TitleContainer>
          <TempeHum>
            {temp > 23 ? (
              <FaTemperatureArrowUp
                size={25}
                fill="#E92424"
                style={{ marginLeft: "50px" }}
              />
            ) : (
              <FaTemperatureArrowDown
                size={25}
                fill="#225DFE"
                style={{ marginLeft: "50px" }}
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
              fill="#225DFE"
              style={{ marginLeft: "50px" }}
            />

            <ControlContainer>
              <MicroTitle>Umidade</MicroTitle>
              <Title>{hum}%</Title>
            </ControlContainer>
          </TempHumHumidade>

          <PontoDeOrvalho>
            <FaRegSnowflake
              size={25}
              fill="#225DFE"
              style={{ marginLeft: "50px" }}
            />
            <ControlContainer>
              <MicroTitle>Ponto de orvalho</MicroTitle>
              <Title>{orv}º</Title>
            </ControlContainer>
          </PontoDeOrvalho>

          <Aplication>
            <FaPaintRoller
              size={20}
              fill="#225DFE"
              style={{ marginLeft: "50px" }}
            />

            <ControlContainer>
              <MicroTitle>Aplicação</MicroTitle>
              <Title>{tempInk}º</Title>
            </ControlContainer>
          </Aplication>
        </ContainerInfo>
      </ContainerMaster>
    </Container>
  );
};

export default ControlOrv;
