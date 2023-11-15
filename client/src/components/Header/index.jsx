import ButtonReturn from "../ButtonReturn";
import { Headeing, LogoPedertractor } from "./style";

const Header = () => {
  return (
    <Headeing>
      <ButtonReturn />
      <LogoPedertractor src="/logo.png" alt="logo do grupo pedertractor" />
    </Headeing>
  );
};

export default Header;
