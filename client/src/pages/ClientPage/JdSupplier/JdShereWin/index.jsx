import { Container, Button } from "../style";
import { Fotter } from "../../style";
export default function JdShereWin() {
  return (
    <>
      <Container>
        <Button to={"/johndeere/sherwin/esmalte"}>Esmalte</Button>
        <Button to={"/johndeere/sherwin/prime"}>Prime</Button>
      </Container>
      <Fotter>@desenvolvimento</Fotter>
    </>
  );
}
