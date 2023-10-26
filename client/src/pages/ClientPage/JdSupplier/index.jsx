import { Container, Button } from "../JdSupplier/style";
import { Fotter } from "../style";

export default function JdSupplier() {
  return (
    <>
      <Container>
        <Button to={"/johndeere/ppg"}>PPG</Button>
        <Button to={"/johndeere/sherwin"}>SherWin</Button>
      </Container>
      <Fotter>@desenvolvimento</Fotter>
    </>
  );
}
