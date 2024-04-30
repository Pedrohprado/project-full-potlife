/* eslint-disable react/prop-types */

import React from 'react';
import {
  Container,
  ContainerError,
  ContainerLogo,
  MiniContainer,
  Span,
} from './style';

const ErrorFLag = ({ error, setError, art }) => {
  React.useEffect(() => {
    if (error) {
      const timeOut = setTimeout(() => {
        setError('');
      }, 3000);

      return () => clearTimeout(timeOut);
    }
  }, [error, setError]);

  return (
    <Container>
      <MiniContainer>
        <ContainerLogo art={art}></ContainerLogo>
        <ContainerError>
          <Span art={art}>{art ? 'Tudo certo!' : 'Aviso!'}</Span>
          {error || art}
        </ContainerError>
      </MiniContainer>
    </Container>
  );
};

export default ErrorFLag;
