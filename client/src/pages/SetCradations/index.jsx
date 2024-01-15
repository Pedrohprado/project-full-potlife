import React from 'react';
import InputForm from '../../components/InputForm/InputForm';

const SetCradations = () => {
  const [value, setValue] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <h1>teste</h1>
      <form onSubmit={handleSubmit}>
        <InputForm
          label='Nome'
          type='text'
          name='nome'
          setValue={setValue}
          value={value}
        />
        <InputForm
          label='Senha'
          type='number'
          name='cartao'
          setValue={setValue}
          value={value}
        />

        <button>enviar</button>
      </form>
      {value}
    </div>
  );
};

export default SetCradations;
