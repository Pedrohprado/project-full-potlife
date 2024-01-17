import styled from 'styled-components';

export const ContainerForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  margin-bottom: 20px;
  gap: 5px;
`;

export const Label = styled.label`
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px;

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;

export const Error = styled.p`
  width: 100%;
  color: #c31d1d;
  font-weight: 500;

  padding: 5px;
`;
