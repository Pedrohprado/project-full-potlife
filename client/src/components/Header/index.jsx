import { Headeing, ButtonReturn, LogoPedertractor } from "./style";

import { AiOutlineArrowLeft } from "react-icons/ai";

const Header = () => {
  return (
    <Headeing>
      <ButtonReturn>
        <AiOutlineArrowLeft />
        voltar
      </ButtonReturn>
      <LogoPedertractor src="/logo.png" alt="logo do grupo pedertractor" />
    </Headeing>
  );
};

export default Header;
