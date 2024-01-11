import React, { useState } from 'react';
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
} from './style';

const CronInk = () => {
  const [transform, setTransform] = React.useState(null);

  const [stopcron, setStopcron] = React.useState(true);

  const [quest, setQuest] = React.useState(false);
  const [createForm, setCreateForm] = React.useState(false);
  const [select, setSelect] = React.useState('');
  const refEstado = React.useRef('');
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem('time')) || []
  );

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
    data,
    setData,
  } = React.useContext(GlobalContext);

  //Definindo o valor do pot-life, para exibição
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

  //Pegando o valor do array definido, entrando no ultimo obj desse array e mudando o valor da "situacao" para o valor selecionado
  React.useEffect(() => {
    const info = refEstado.current;
    const lastObject = info[info.length - 1];
    const newObject = { ...lastObject, situacao: select };

    if (info.length > 0) {
      setData([...info.slice(0, -1), newObject]);
    }
  }, [select, setData]);

  React.useEffect(() => {
    localStorage.setItem('time', JSON.stringify(value));
  }, [value]);

  function handleClick() {
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
    refEstado.current = localTime;
  }

  function returnCron() {
    const newArray = [...localTime];
    newArray.pop();
    setLocalTime(newArray);

    setStopcron(true);
    setQuest(false);
    setCreateForm(false);
  }

  //NOTAS: nessa function, ela pega o valor que existe dentro o localStorage, caso ja exista um valor, ele concatena com o novo definido
  //caso não, ele define o data como primeiro valor
  function sendForm(event) {
    event.preventDefault();
    //Estou enviando varios arrays
    setValue((prevValue) => {
      if (Array.isArray(prevValue)) {
        console.log('entrou no spreed');
        return [...prevValue, ...data];
      } else {
        console.log('entrou aqui');
        return [data];
      }
    });
    setLocalTime('');
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
        <ContainerInfo>
          <ContainerAlert>
            <h4>deseja interromper o cronometro?</h4>
            <ContainerInfoButton>
              <ButtonInfo onClick={SendLocal}>Sim</ButtonInfo>
              <ButtonInfo
                color='#303030'
                colorText='white'
                onClick={returnCron}
              >
                Não
              </ButtonInfo>
            </ContainerInfoButton>
          </ContainerAlert>
        </ContainerInfo>
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
              <option value=''></option>
              <option value='finalizado'>Finalizado</option>
              <option value='almoco'>Almoço</option>
              <option value='quebra'>Quebra</option>
              <option value='emergencia'>Emergência</option>
            </select>
            <button>Enviar</button>
          </form>
        </div>
      )}
    </Container>
  );
};

export default CronInk;
