import { Container, Button, ContainerButton, Title } from '../JdSupplier/style';

import Header from '../../../components/Header';
import { useParams } from 'react-router-dom';

export default function JdSupplier() {
  const parans = useParams();
  return (
    <Container>
      <Header />
      <Title>Selecione o fornecedor:</Title>
      <ContainerButton>
        <Button to={`/clients/${parans.id}/sherwin`}>SherWin</Button>
        <Button to={`/clients/${parans.id}/ppg`}>PPG</Button>
      </ContainerButton>
    </Container>
  );
}
