import React from 'react';
import { GlobalContext } from '../../context/context-form';
import {
  Container,
  Title,
  SubTitle,
  ContainerCron,
  Navgation,
  Button,
  ContainerInfo,
  ContainerInfoButton,
  ButtonInfo,
  ContainerAlert,
  TitleAlert,
} from './style';
import { useNavigate } from 'react-router-dom';
import { PUT_STATUS } from '../../api';

const CronInk = () => {
  const [transform, setTransform] = React.useState(null);
  const [stopcron, setStopcron] = React.useState(true);
  const [quest, setQuest] = React.useState(false);

  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const [obj, setObj] = React.useState({
    inicio: '',
    finalizado: '',
    segundosiniciado: '',
    segundoparado: '',
    trabalhado: '',
  });

  const { setTimer, cabin } = React.useContext(GlobalContext);

  const navigate = useNavigate();

  const { potlife } = React.useContext(GlobalContext);

  //Definindo o valor do pot-life, para exibição
  React.useEffect(() => {
    switch (potlife) {
      case '90':
        setTransform('01:30');
        setHours(1);
        setMinutes(30);
        setSeconds(0);
        break;
      case '120':
        setTransform('02:00');
        setHours(2);
        setMinutes(0);
        setSeconds(0);
        break;
      case '180':
        setTransform('03:00');
        setHours(3);
        setMinutes(0);
        setSeconds(0);
        break;
      case '240':
        setTransform('04:00');
        setHours(4);
        setMinutes(0);
        setSeconds(0);
        break;
      default:
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setTransform(null);
        break;
    }
  }, [potlife]);

  //Fazendo o cronometro funcionar
  React.useEffect(() => {
    if (stopcron) {
      const timer = setInterval(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return;
        }
        if (minutes === 0 && seconds === 0) {
          setHours((hours) => hours - 1);
          setMinutes(59);
          setSeconds(59);
        } else if (seconds === 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
        } else {
          setSeconds((seconds) => seconds - 1);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [hours, minutes, seconds, setHours, setMinutes, setSeconds, stopcron]);

  function handleClick() {
    setStopcron(false);
    setQuest(true);

    const hours = new Date().getHours() * 60;
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const result = (hours + minutes) * 60 + seconds;

    setObj((objOld) => ({
      ...objOld,
      finalizado: new Date().toLocaleTimeString(),
      segundoparado: result,
    }));
  }

  function returnCron() {
    setQuest(false);
    setStopcron(true);

    setObj((objOld) => ({
      ...objOld,
      finalizado: '',
      segundoparado: '',
    }));
  }

  React.useEffect(() => {
    const dif = (obj.segundoparado - obj.segundosiniciado) / 60;
    setObj((oldObj) => ({
      ...oldObj,
      trabalhado: dif.toFixed(2),
    }));
  }, [obj.segundoparado, obj.segundosiniciado]);

  React.useEffect(() => {
    const hours = new Date().getHours() * 60;
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const result = (hours + minutes) * 60 + seconds;

    setObj((objOld) => ({
      ...objOld,
      inicio: new Date().toLocaleTimeString(),
      segundosiniciado: result,
    }));
  }, []);

  async function handleSend() {
    setTimer((oldTimer) => ({
      ...oldTimer,
      inicio: obj.inicio,
      finalizado: obj.finalizado,
      trabalhado: obj.trabalhado,
    }));

    try {
      const body = {
        status: 'parado',
        cabin: cabin,
        end: new Date(),
      };
      const { url, options } = PUT_STATUS(body);
      const response = await fetch(url, options);

      if (response.ok) navigate('/envio');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Title>Cronômetro</Title>
      <ContainerCron>
        {hours}:{minutes < 10 ? '0' : null}
        {minutes}:{seconds < 10 ? '0' : null}
        {seconds}
      </ContainerCron>
      <SubTitle>O potlife é de {transform}</SubTitle>
      <Navgation>
        <Button onClick={handleClick}>PARAR CRONÔMETRO</Button>
      </Navgation>
      {!quest ? null : (
        <ContainerInfo>
          <ContainerAlert>
            <TitleAlert>processo finalizado?</TitleAlert>
            <ContainerInfoButton>
              <ButtonInfo onClick={handleSend}>Sim</ButtonInfo>
              <ButtonInfo onClick={returnCron}>Não</ButtonInfo>
            </ContainerInfoButton>
          </ContainerAlert>
        </ContainerInfo>
      )}
    </Container>
  );
};

export default CronInk;
