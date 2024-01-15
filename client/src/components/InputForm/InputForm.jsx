/* eslint-disable react/prop-types */
const InputForm = ({ setValue, label, type, name }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        onChange={({ target }) => setValue(target.value)}
      ></input>
    </div>
  );
};

export default InputForm;
