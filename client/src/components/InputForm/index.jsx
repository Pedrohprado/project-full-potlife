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
}) => {
  const verifElement = React.useRef();

  if (error) {
    verifElement.current.focus();
  }

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
