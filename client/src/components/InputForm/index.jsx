/* eslint-disable react/prop-types */
import React from 'react';
import { InputLabel, InputMain } from './style';
import { FaRegAddressCard, FaPerson, FaIndustry } from 'react-icons/fa6';

const InputModify = ({
  value,
  setValue,
  type,
  label,
  handleBlur,
  error,
  validateCard,
  req,
  errort,
  setErrorT,
}) => {
  const verifElement = React.useRef();

  if (errort) {
    verifElement.current.focus();
  }

  React.useEffect(() => {
    let timer = null;
    if (errort) {
      timer = setTimeout(() => {
        setErrorT();
        console.log('testando');
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [errort, setErrorT]);

  function handleChange({ target }) {
    if (error) validateCard(target.value);
    setValue(target.value);
  }

  return (
    <InputLabel>
      {label === 'Nome' ? (
        <FaPerson size={30} />
      ) : label === 'Cartão' ? (
        <FaRegAddressCard size={30} />
      ) : (
        <FaIndustry size={30} />
      )}

      {label}
      <InputMain
        color={errort ? 'red' : null}
        ref={verifElement}
        required={req ? true : false}
        onBlur={handleBlur}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={
          label === 'Cartão' ? 'ex: 0000' : label === 'Setor' ? 'ex: 2530' : ''
        }
      />
    </InputLabel>
  );
};

export default InputModify;
