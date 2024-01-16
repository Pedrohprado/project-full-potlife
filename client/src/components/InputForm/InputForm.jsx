import { ContainerForm, Error, Input, Label } from './style';

/* eslint-disable react/prop-types */
const InputForm = ({
  onChange,
  label,
  type,
  name,
  maxlenght,
  onblur,
  error,
  placeholder,
}) => {
  return (
    <ContainerForm>
      <Label htmlFor={name}>{label}</Label>
      <Input
        placeholder={placeholder}
        maxLength={maxlenght}
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onblur}
      />
      {error && <Error>{error}</Error>}
    </ContainerForm>
  );
};

export default InputForm;
