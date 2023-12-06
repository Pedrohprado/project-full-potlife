import React from 'react';
import { GlobalContext } from '../../context/context-form';
import { useNavigate } from 'react-router-dom';
import InputModify from '../../components/InputForm';

import {
  FormContainer,
  FormTitle,
  FormSubTitle,
  FormContainerInputs,
  FormButton,
  AlertForm,
  LinkForLogin,
  Information,
} from './style';

const Form = () => {
  const { name, setName, card, setCard, sector, setSector } =
    React.useContext(GlobalContext);

  const navigate = useNavigate();

  const [sucess, setSucess] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [register, setRegister] = React.useState(null);

  React.useEffect(() => {
    let timer = null;
    if (sucess || register) {
      timer = setTimeout(() => {
        setSucess(false);
        setRegister(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [sucess, register]);

  async function createNewUser() {
    const response = await fetch(
      'https://api-register-ink.onrender.com/funcionarios/',
      // 'http://localhost:3000/funcionarios',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: name,
          cartao: card,
          setor: sector,
        }),
      }
    );
    setSucess(response.ok);
    if (response.ok) {
      navigate('/home');
    }
  }

  const checkNewUser = async () => {
    try {
      console.log('test');
      await fetch(
        // `http://localhost:3000/funcionarios/${card}`,
        `https://api-register-ink.onrender.com/funcionarios/${card}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          const equili = data;
          //NOTES: I put condition direct in function verication
          //but i could return True or False for exist card in the database or not, and continue validation from then
          if (equili.length >= 1) {
            setRegister(true);
          } else {
            createNewUser();
            setRegister(false);
          }
        });
    } catch (erro) {
      console.log(erro);
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (validateCard(card)) {
      await checkNewUser();
    }
  }

  function validateCard(value) {
    if (value.length === 0) {
      setError('Preencha um valor no cartão');
      return false;
    } else if (!/^\d{4}$/.test(value)) {
      setError('Utilize 4 digitos do cartão!');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCard(target.value);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      {register ? (
        <AlertForm color='#A75D5D'>Usuário já cadastrado</AlertForm>
      ) : null}
      {sucess ? <AlertForm color='#435334'>Cadastro realizado!</AlertForm> : ''}
      {error ? <AlertForm color='#A75D5D'>{error}</AlertForm> : null}
      <FormTitle>Crie sua conta</FormTitle>
      <FormSubTitle>Informe os dados</FormSubTitle>
      <FormContainerInputs>
        <InputModify
          value={name}
          setValue={setName}
          type={'text'}
          label={'Nome'}
        />
        <InputModify
          value={card}
          setValue={setCard}
          type={'number'}
          label={'Cartão'}
          handleBlur={handleBlur}
          error={error}
          validateCard={validateCard}
        />
        <InputModify
          value={sector}
          setValue={setSector}
          type={'number'}
          label={'Setor'}
        />
      </FormContainerInputs>

      <FormButton>CADASTRAR</FormButton>
      <Information>
        Já tem cadastro? <LinkForLogin to={'/login'}>Clique aqui</LinkForLogin>
      </Information>
    </FormContainer>
  );
};

export default Form;
