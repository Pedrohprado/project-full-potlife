import { useParams } from 'react-router-dom';
import { Container, Button, ContainerButton, Title } from './style';

export default function SelectTypeInk() {
  const parans = useParams();
  return (
    <>
      <Container>
        <Title>Selecione o tipo de tinta:</Title>
        <ContainerButton>
          <Button to={`/clients/${parans.id}/${parans.for}/esmalte`}>
            ESMALTE
          </Button>
          <Button to={`/clients/${parans.id}/${parans.for}/primer`}>
            PRIME
          </Button>
        </ContainerButton>
      </Container>
    </>
  );
}
