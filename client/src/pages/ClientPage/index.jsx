import Header from "../../components/Header";

import { Container, Text, ContainerGrid, ButtonClient, TextAux } from "./style";

export default function ClientPage() {
  const clientes = [
    {
      name: "JOHN DEERE",
      color: "#3f8b1a",
    },
    {
      name: "CATERPILLAR",
      color: "#ebc334",
    },
    {
      name: "CNH",
      color: "#853434",
    },
    {
      name: "VOLVO",
      color: "#727272",
    },
    {
      name: "JACTO",
      color: "#cf5e0e",
    },
  ];

  const clients = clientes.map(({ name, color }) => (
    <ButtonClient
      key={name.toLowerCase()}
      to={`/${name.toLowerCase().replace(" ", "")}`}
      color={color}
    >
      <TextAux>{name}</TextAux>
    </ButtonClient>
  ));

  return (
    <Container>
      <Header />
      <Text>Selecione o cliente:</Text>
      <ContainerGrid>{clients}</ContainerGrid>
    </Container>
  );
}
