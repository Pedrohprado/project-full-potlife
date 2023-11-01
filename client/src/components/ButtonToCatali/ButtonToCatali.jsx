/* eslint-disable react/prop-types */
import {
  Button,
  DescriptionInk,
  CodeInk,
  BoxInfo,
  Color,
  Micras,
  PotLife,
} from "./style";

// import axios from "axios";

export default function ButtonToCatali({
  ink,
  code,
  color,
  micras,
  potlife,
  onClick,
}) {
  // const handleClick = async (potlife) => {
  //   const formData = new FormData();

  //   formData.append("value", potlife);

  //   const config = {
  //     headers: { "content-type": "multipart/form-data" },
  //   };

  //   try {
  //     const response = await axios.post("/value", formData, config);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <Button
      key={ink.toLowerCase()}
      // onClick={() => handleClick(potlife)}
      onClick={onClick}
      potlife={potlife}
      // to={potlife != "" ? "/johndeere/catalizador" : "/"}
    >
      <DescriptionInk>{ink.toUpperCase()}</DescriptionInk>
      <CodeInk>
        código da tinta: <span>{code}</span>
      </CodeInk>
      <BoxInfo>
        <Color color={color}></Color>
        <Micras>{micras} µm</Micras>
        <PotLife>{potlife} min</PotLife>
      </BoxInfo>
    </Button>
  );
}
