import React from 'react';
import {
  ContainerInfo,
  TempeHum,
  TempHumHumidade,
  PontoDeOrvalho,
  Aplication,
  Title,
  MicroTitle,
  ControlContainer,
  ContainerPaintPrep,
  Button,
} from './style';

import {
  FaTemperatureArrowUp,
  FaTemperatureArrowDown,
  FaDroplet,
  FaPaintRoller,
  FaRegSnowflake,
} from 'react-icons/fa6';

import { GET_CONDIT_ORV } from '../../api';
import { GlobalContext } from '../../context/context-form';
import { useNavigate } from 'react-router-dom';
import InputForm from '../InputForm/InputForm';
import ErrorFLag from '../errorflag/ErrorFLag';

const ControlOrv = () => {
  const [error, setError] = React.useState('');
  const [temp, setTemp] = React.useState(null);
  const [hum, setHum] = React.useState(null);
  const [orv, setOrv] = React.useState(null);
  const [tempInk, setTempInk] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const {
    setUmity,
    setTemperature,
    setOrval,
    press,
    setPress,
    filter,
    setFilter,
    visc,
    setVisc,
    flowRate,
    setFlowRate,
  } = React.useContext(GlobalContext);

  const navigate = useNavigate();

  React.useEffect(() => {
    setLoading(false);
    async function fetchData() {
      try {
        const { url, options } = GET_CONDIT_ORV();
        const response = await fetch(url, options);
        const json = await response.json();

        const temperatura = json.temperatura;
        const humidade = json.umidade;
        setTemp(temperatura);
        setHum(humidade);

        setLoading(true);
      } catch (error) {
        console.error(error);
      }
    }

    const interval = setInterval(fetchData, 2000);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    let Tpo = (hum / 100) ** 0.125 * (112 + 0.9 * temp) + 0.1 * temp - 112;

    setOrv(parseFloat(Tpo.toFixed(2)).toString());
  }, [hum, temp]);

  React.useEffect(() => {
    const tempink = +orv + 3;
    setTempInk(parseFloat(tempink.toFixed(2)));
  }, [orv]);

  function handleClick() {
    setUmity(hum);
    setTemperature(temp);
    setOrval(orv);
    if (hum && temp && orv && press && filter && visc && flowRate) {
      navigate('/cron');
    } else {
      setError('Preencha todas as informações');
    }
  }

  return (
    <ContainerInfo>
      {error ? <ErrorFLag error={error} setError={setError} /> : null}
      <ContainerPaintPrep>
        <TempeHum>
          {temp > 23 ? (
            <FaTemperatureArrowUp size={18} fill='#E92424' />
          ) : (
            <FaTemperatureArrowDown size={18} fill='#225DFE' />
          )}
          <ControlContainer>
            <MicroTitle>Temperatura</MicroTitle>
            <Title>{temp}º C</Title>
          </ControlContainer>
        </TempeHum>

        <TempHumHumidade>
          <FaDroplet size={18} fill='#225DFE' />

          <ControlContainer>
            <MicroTitle>Umidade</MicroTitle>
            <Title>{hum}%</Title>
          </ControlContainer>
        </TempHumHumidade>

        <PontoDeOrvalho>
          <FaRegSnowflake size={18} fill='#225DFE' />
          <ControlContainer>
            <MicroTitle>Ponto de orvalho</MicroTitle>
            {!loading ? '-' : <Title>{orv}º</Title>}
          </ControlContainer>
        </PontoDeOrvalho>

        <Aplication>
          <FaPaintRoller size={18} fill='#225DFE' />

          <ControlContainer>
            <MicroTitle>Aplicação</MicroTitle>
            {!loading ? '-' : <Title>{tempInk}º</Title>}
          </ControlContainer>
        </Aplication>
      </ContainerPaintPrep>
      <InputForm
        label={'pressão do tambor'}
        name={'press'}
        type='number'
        onChange={({ target }) => setPress(target.value)}
      />
      <InputForm
        label={'pressão do filtro'}
        name={'filter'}
        type='number'
        onChange={({ target }) => setFilter(target.value)}
      />
      <InputForm
        label={'Viscosidade da tinta'}
        name={'visc'}
        type='number'
        onChange={({ target }) => setVisc(target.value)}
      />
      <InputForm
        label={'Vazão da tinta'}
        name={'flowRate'}
        type='number'
        onChange={({ target }) => setFlowRate(target.value)}
      />
      <Button onClick={handleClick}>iniciar cronomêtro</Button>
    </ContainerInfo>
  );
};

export default ControlOrv;
