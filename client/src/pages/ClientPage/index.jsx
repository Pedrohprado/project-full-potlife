import {
  Container,
  ButtonReturn,
  Text,
  ContainerGrid,
  ButtonClient,
  TextAux,
  Fotter,
} from "./style";

import { AiOutlineArrowLeft } from "react-icons/ai";

export default function ClientPage() {
  const clientes = [
    {
      name: "Caterpillar",
      colortotals: 45,
      color: "#ebc334",
    },
    {
      name: "JohnDeere",
      colortotals: 15,
      color: "#3f8b1a",
    },
    {
      name: "CNH",
      colortotals: 2,
      color: "#853434",
    },
    {
      name: "Volvo",
      colortotals: 2,
      color: "#727272",
    },
    {
      name: "Jacto",
      colortotals: 2,
      color: "#cf5e0e",
    },
  ];

  const clients = clientes.map(({ name, color }) => (
    <ButtonClient key={name.toLowerCase()} to={`/${name}`} color={color}>
      <TextAux>{name}</TextAux>
    </ButtonClient>
  ));

  return (
    <Container>
      <ButtonReturn to={"/"}>
        <AiOutlineArrowLeft size={15} fill={"#f1f1f1"} />
        Voltar
      </ButtonReturn>
      <Text>A peça que vai ser pintada é de qual cliente?</Text>
      <ContainerGrid>{clients}</ContainerGrid>
      <Fotter>@desenvolvimento</Fotter>
    </Container>
  );
}
