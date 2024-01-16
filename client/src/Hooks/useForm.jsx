import React from 'react';

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');

  const types = {
    number: {
      message: 'Preencha o campo com quatro numeros',
    },
  };

  function validation(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && value.length !== 4) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }
  function onChange({ target }) {
    if (error) validation(target.value);
    setValue(target.value);
  }
  return {
    value,
    setValue,
    onChange,
    error,
    validation: () => validation(value),
    onblur: () => validation(value),
  };
};

export default useForm;
