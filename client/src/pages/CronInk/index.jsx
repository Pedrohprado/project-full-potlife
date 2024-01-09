import React from 'react';
import { GlobalContext } from '../../context/context-form';
import {
  Container,
  Title,
  SubTitle,
  ContainerCron,
  Navgation,
  Button,
} from './style';

const CronInk = () => {
  const [stopcron, setStopcron] = React.useState(true);
  const [transform, setTransform] = React.useState(null);

  const {
    potlifeTest,
    name,
    card,
    hours,
    minutes,
    seconds,
    setHours,
    setMinutes,
    setSeconds,
    localTime,
    setLocalTime,
  } = React.useContext(GlobalContext);

  React.useEffect(() => {});

  React.useEffect(() => {
    switch (potlifeTest) {
      case 90:
        setTransform('01:30');
        break;
      case 120:
        setTransform('02:00');
        break;
      case 180:
        setTransform('03:00');
        break;
      case 240:
        setTransform('04:00');
        break;
      default:
        setTransform(null);
        break;
    }
  }, [potlifeTest]);

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

    setLocalTime([
      ...localTime,
      {
        funcionario: name,
        cartao: card,
        hora: hours,
        minuto: minutes,
        segundo: seconds,
      },
    ]);
  }

  function SendLocal() {
    localStorage.setItem('time', JSON.stringify(localTime));
  }

  function returnCron() {
    setStopcron(true);
    const newArray = [...localTime];
    newArray.pop();
    setLocalTime(newArray);
    console.log(newArray);
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

      {stopcron ? null : (
        <div
          style={{
            width: '50%',
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p>deseja interromper o cronometro?</p>
          <button onClick={SendLocal}>sim</button>
          <button onClick={returnCron}>não</button>
        </div>
      )}
    </Container>
  );
};

export default CronInk;
