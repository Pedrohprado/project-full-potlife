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
  const [transform, setTransform] = React.useState(null);

  const [stopcron, setStopcron] = React.useState(true);

  const [quest, setQuest] = React.useState(false);
  const [createForm, setCreateForm] = React.useState(false);
  const [select, setSelect] = React.useState('');

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
    //BUTTON STOP CLOCK
    setStopcron(false);
    setQuest(true);

    setLocalTime([
      ...localTime,
      {
        funcionario: name,
        cartao: card,
        hora: hours,
        minuto: minutes,
        segundo: seconds,
        situacao: '',
      },
    ]);
  }

  function SendLocal() {
    setCreateForm(true);
    setQuest(false);
  }

  function returnCron() {
    // BUTTON NÂO
    const newArray = [...localTime];
    newArray.pop();
    setLocalTime(newArray);

    setStopcron(true);
    setQuest(false);
    setCreateForm(false);
  }

  function sendForm(event) {
    event.preventDefault();

    const lastObject = localTime[localTime.length - 1];
    const newObject = { ...lastObject, situacao: select };

    setLocalTime([...localTime.slice(0, -1), newObject]);

    localStorage.setItem('time', JSON.stringify(localTime));
  }

  function changeOption({ target }) {
    setSelect(target.value);
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

      {!createForm ? null : (
        <div
          style={{
            width: '50%',
            height: '70px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p>Qual o motivo da parada?</p>
          <form onSubmit={sendForm}>
            <select value={select} onChange={changeOption}>
              <option value='finalizado'>Processo finalizado</option>
              <option value='almoco'>Almoço</option>
              <option value='banheiro'>Banheiro</option>
              <option value='emergencia'>Emergencia</option>
            </select>
            {select}
            <button>Enviar</button>
          </form>
        </div>
      )}
    </Container>
  );
};

export default CronInk;
