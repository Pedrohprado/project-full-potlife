/* eslint-disable react/prop-types */

import { Container, Label, SubContainer, Title } from './style';

const FormCheckBox = ({ checkbox, setCheckBox }) => {
  function handleChange({ target }) {
    setCheckBox(target.value);
  }

  return (
    <Container>
      <Title>Empresa</Title>
      <SubContainer>
        <Label>
          <input
            type='checkbox'
            value='pedertractor'
            checked={checkbox === 'pedertractor'}
            onChange={handleChange}
          />
          pedertractor
        </Label>
        <Label>
          <input
            type='checkbox'
            value='tractor'
            checked={checkbox === 'tractor'}
            onChange={handleChange}
          />
          tractor
        </Label>
      </SubContainer>
    </Container>
  );
};

export default FormCheckBox;
