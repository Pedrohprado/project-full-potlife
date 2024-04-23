/* eslint-disable react/prop-types */

import { Container, Select, Title } from './style';

const FormSelect = ({ select, setSelect }) => {
  function handleChange({ target }) {
    setSelect(target.value);
  }
  return (
    <Container>
      <Title>Cabine</Title>
      <Select value={select} onChange={handleChange}>
        <option hidden>--</option>
        <option value='CPL-01'>CPL-01</option>
        <option value='CPL-02'>CPL-02</option>
        <option value='CPL-03'>CPL-03</option>
        <option value='CPL-04'>CPL-04</option>
        <option value='CPL-05'>CPL-05</option>
        <option value='CPL-06'>CPL-06</option>
        <option value='CPL-07'>CPL-07</option>
        <option value='CPL-08'>CPL-08</option>
        <option value='CPL-09'>CPL-09</option>
        <option value='CPL-10'>CPL-10</option>
      </Select>
    </Container>
  );
};

export default FormSelect;
