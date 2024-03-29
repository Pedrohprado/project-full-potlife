import React from 'react';
import InputForm from '../../components/InputForm/InputForm';
import { GlobalContext } from '../../context/context-form';
import useForm from '../../Hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Form } from './style';

const SetCradations = () => {
  const nome = useForm();
  const card = useForm('number');
  const { setName, setCard, setLogin } = React.useContext(GlobalContext);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (nome.validation() && card.validation()) {
      setName(nome.value);
      setCard(card.value);
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
        <Button>entrar</Button>
      </Form>
    </Container>
  );
};

export default SetCradations;
