import {
  ContainerNav,
  LogoPedertractor,
} from "./JdSupplier/JdShereWin/JdSherWinEsmalte/style";
import {
  Container,
  ButtonReturn,
  Text,
  ContainerGrid,
  ButtonClient,
  TextAux,
} from "./style";

import { AiOutlineArrowLeft } from "react-icons/ai";

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
      <ContainerNav>
        <ButtonReturn to={"/"}>
          <AiOutlineArrowLeft size={15} fill={"#f1f1f1"} />
          VOLTAR
        </ButtonReturn>
        <LogoPedertractor
          src="../../../../../public/logo.png"
          alt="logo do grupo pedertractor"
        />
      </ContainerNav>
      <Text>Selecione o cliente:</Text>
      <ContainerGrid>{clients}</ContainerGrid>
    </Container>
  );
}
