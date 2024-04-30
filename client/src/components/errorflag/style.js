import styled, { keyframes } from 'styled-components';

const aparecer = keyframes`
from {
  transform: translateY(100%);
  opacity: 0;
}
to {
  transform: translateY(0);
  opacity: 1;
}
`;

export const Container = styled.div`
  position: fixed;
  bottom: 50px;
  right: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${aparecer} 1s ease forwards;
`;

export const MiniContainer = styled.div`
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const ContainerLogo = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 5px;
  color: rebeccapurple;
  border-right: 3px solid ${(props) => (props.art ? 'green' : '#ebba25')};
  border-radius: 1px;
`;

export const ContainerError = styled.section`
  color: #101010;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 5px;
`;

export const Span = styled.span`
  color: ${(props) => (props.art ? 'green' : '#ebba25')};
  font-size: 16px;
  font-weight: 500;
`;
