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
  TitleAlert,
  ContainerForm,
  SelectForm,
  OptionForm,
  NavHome,
} from './style';

const CronInk = () => {
  const [transform, setTransform] = React.useState(null);

  const [stopcron, setStopcron] = React.useState(true);

  const [quest, setQuest] = React.useState(false);
  const [createForm, setCreateForm] = React.useState(false);
  const [toHome, setToHome] = React.useState(false);
  const [select, setSelect] = React.useState('');
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem('time')) || []
  );

  const refEstado = React.useRef('');

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
    console.log(lastObject);
    if (lastObject) {
      if (lastObject.hora === 0 && lastObject !== null) {
        lastObject.hora;
      } else {
        lastObject.hora = lastObject.hora * 60;
      }
      const modifyObj = {
        cartao: lastObject.cartao,
        funcionario: lastObject.funcionario,
        potlife: lastObject.potlife,
        rest: lastObject.hora + lastObject.minuto,
        situacao: '',
      };

      const thisObj = {
        ...modifyObj,
        trabalhado: modifyObj.potlife - modifyObj.rest,
      };
      const newObject = { ...thisObj, situacao: select };

      if (info.length > 0) {
        setData([...info.slice(0, -1), newObject]);
      }
    } else {
      console.log('falso');
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
        potlife: potlifeTest,
        situacao: '',
      },
    ]);
  }

  function SendLocal() {
    setCreateForm(true);
    setQuest(false);
    refEstado.current = localTime;
  }

  function returnCron(event) {
    event.preventDefault();

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

    setValue((prevValue) => {
      if (Array.isArray(prevValue)) {
        return [...prevValue, ...data];
      } else {
        return [data];
      }
    });
    setLocalTime('');
    if (data[0].situacao === 'finalizado') setToHome(true);
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
            <TitleAlert>deseja interromper o cronômetro?</TitleAlert>
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
        <ContainerInfo>
          <ContainerAlert>
            <TitleAlert>Qual o motivo da parada?</TitleAlert>
            <ContainerForm onSubmit={sendForm}>
              <SelectForm value={select} onChange={changeOption}>
                <OptionForm value=''></OptionForm>
                <OptionForm value='finalizado'>Finalizado</OptionForm>
                <OptionForm value='almoco'>Almoço</OptionForm>
                <OptionForm value='quebra'>Quebra</OptionForm>
                <OptionForm value='emergencia'>Emergência</OptionForm>
              </SelectForm>
              <ContainerInfoButton>
                {toHome ? (
                  <NavHome to='/home'>finalizar</NavHome>
                ) : (
                  <>
                    <ButtonInfo onClick={returnCron}>cancelar</ButtonInfo>
                    <ButtonInfo color='#303030' colorText='white'>
                      parar
                    </ButtonInfo>
                  </>
                )}
              </ContainerInfoButton>
            </ContainerForm>
          </ContainerAlert>
        </ContainerInfo>
      )}
    </Container>
  );
};

export default CronInk;
