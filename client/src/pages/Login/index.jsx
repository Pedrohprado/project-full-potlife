import React from 'react';
import { GlobalContext } from '../../context/context-form';
import InputModify from '../../components/InputForm';
import { useNavigate } from 'react-router-dom';

import { FormLogin, ContainerInputsLogin, ButtonLogin } from './style';

const Login = () => {
  const { name, setName, card, setCard, sector, setSector } =
    React.useContext(GlobalContext);

  const navigate = useNavigate();

  async function verifyLogin() {
    console.log('teste');
    try {
      await fetch(`https://api-register-ink.onrender.com/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: name,
          cartao: card,
          setor: sector,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          const info = data;

          if (info.length >= 1) {
            console.log('login correto!');

            navigate('/home');
          } else {
            console.log('Nome ou cartão incorretos');
          }
        });
    } catch (erro) {
      console.log(erro);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    verifyLogin();
  };

  return (
    <FormLogin onSubmit={handleSubmit}>
      <ContainerInputsLogin>
        <InputModify
          value={name}
          setValue={setName}
          type={'text'}
          label={'Nome'}
          req={'required'}
        />
        <InputModify
          value={card}
          setValue={setCard}
          type={'number'}
          label={'Cartão'}
          req={'required'}
        />
        <InputModify
          value={sector}
          setValue={setSector}
          type={'number'}
          label={'Setor'}
          req={'required'}
        />
      </ContainerInputsLogin>

      <ButtonLogin>ENTRAR</ButtonLogin>
    </FormLogin>
  );
};

export default Login;
