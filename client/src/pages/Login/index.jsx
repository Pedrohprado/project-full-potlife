import React from 'react';
import { GlobalContext } from '../../context/context-form';
import InputModify from '../../components/InputForm';
import { useNavigate } from 'react-router-dom';

import {
  FormLogin,
  ContainerInputsLogin,
  ButtonLogin,
  TitleLogin,
  SubTitleLogin,
  Information,
  LinkForRegister,
  Loading,
  Loader,
  Error,
} from './style';

const Login = () => {
  const { name, setName, card, setCard, sector, setSector, setLogin } =
    React.useContext(GlobalContext);

  const [loading, setLoading] = React.useState(null);
  const [errort, setErrorT] = React.useState(null);

  const navigate = useNavigate();

  async function verifyLogin() {
    setLoading(true);
    setErrorT(false);
    try {
      await fetch(
        // 'http://localhost:3000/login/',
        `${import.meta.env.VITE_BASE_URL}login/`,
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
      )
        .then((response) => response.json())
        .then((data) => {
          const info = data;

          if (info.length >= 1) {
            console.log('login correto!');
            setLoading(false);
            //NOTES: I try created a protectRuter for page /home,
            //problabily, i set setLogin(true) here.
            setLogin(true);
            navigate('/home');
          } else {
            console.log('Nome ou cartão incorretos');
            setLogin(false);
            setLoading(false);
            setErrorT(true);
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
      <TitleLogin>Login</TitleLogin>
      <SubTitleLogin>Preencha os campos abaixo</SubTitleLogin>
      <ContainerInputsLogin>
        <InputModify
          value={name}
          setValue={setName}
          type={'text'}
          label={'Nome'}
          req={'required'}
          errort={errort}
          setErrorT={() => setErrorT(false)}
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

      {errort ? <Error>Nome e/ou cartão incorretos</Error> : null}

      <ButtonLogin>ENTRAR</ButtonLogin>
      <Information>
        Não tem cadastro?{' '}
        <LinkForRegister to={'/createdacount'}>Registre-se</LinkForRegister>
      </Information>
      {loading ? (
        <Loading>
          <Loader></Loader>
        </Loading>
      ) : null}
    </FormLogin>
  );
};

export default Login;
