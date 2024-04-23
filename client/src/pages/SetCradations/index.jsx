import React from 'react';
import InputForm from '../../components/InputForm/InputForm';
import { GlobalContext } from '../../context/context-form';
import useForm from '../../Hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Form } from './style';
import FormCheckBox from '../../components/formcheckbox/formcheckbox';
import FormSelect from '../../components/formselect/formselect';

const SetCradations = () => {
  const [checkbox, setCheckBox] = React.useState('');
  const [select, setSelect] = React.useState('');
  const nome = useForm();
  const card = useForm('number');
  const { setName, setCard, setLogin, setCabin, setUnit } =
    React.useContext(GlobalContext);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (nome.validation() && card.validation() && select && checkbox) {
      setName(nome.value);
      setCard(card.value);
      setCabin(select);
      setUnit(checkbox);
      setLogin(true);
      navigate('/home');
    } else {
      console.log('erro');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputForm
          placeholder='nome do funcionário'
          label='Nome'
          type='text'
          name='nome'
          {...nome}
        />
        <InputForm
          placeholder='cartão do funcionário'
          label='Cartão'
          type='number'
          name='cartao'
          {...card}
        />
        <FormSelect select={select} setSelect={setSelect} />

        <FormCheckBox checkbox={checkbox} setCheckBox={setCheckBox} />

        <Button>entrar</Button>
      </Form>
    </Container>
  );
};

export default SetCradations;
