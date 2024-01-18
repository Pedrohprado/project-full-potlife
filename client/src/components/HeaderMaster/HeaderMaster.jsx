import React from 'react';
import { FaUser, FaRegAddressCard } from 'react-icons/fa6';
import { IoMenu, IoCloseSharp, IoHomeSharp } from 'react-icons/io5';
import { MdExitToApp } from 'react-icons/md';
import { GlobalContext } from '../../context/context-form';
import { Button, DropMenu, Header, Optins, TitleList } from './style';
import { useNavigate } from 'react-router-dom';

const HeaderMaster = () => {
  const { name, card, login, setLogin } = React.useContext(GlobalContext);
  const [value, setValue] = React.useState(false);
  const navigate = useNavigate();

  function setLogount() {
    setLogin(false);
    setValue(false);
    navigate('/');
  }

  function goHome() {
    setValue(false);
    navigate('/home');
  }
  return (
    <Header>
      <h1>INK Tec</h1>
      {login ? (
        <Button
          onClick={() => setValue(!value)}
          style={{ transform: value ? 'rotate(180deg)' : '' }}
        >
          {value ? <IoCloseSharp size={20} /> : <IoMenu size={20} />}
        </Button>
      ) : null}
      {value ? (
        <DropMenu>
          <TitleList>Informações</TitleList>
          <Optins>
            {name && <>{name}</>}
            <FaUser size={19} />
          </Optins>
          <Optins>
            {card && <div>{card}</div>} <FaRegAddressCard size={20} />
          </Optins>
          <Optins onClick={goHome}>
            home <IoHomeSharp size={20} />
          </Optins>
          <Optins onClick={setLogount}>
            sair <MdExitToApp size={20} />
          </Optins>
        </DropMenu>
      ) : (
        ''
      )}
    </Header>
  );
};

export default HeaderMaster;
