import React from 'react';
import { FaUser, FaRegAddressCard } from 'react-icons/fa6';
import { IoMenu, IoCloseSharp, IoHomeSharp } from 'react-icons/io5';
import { MdExitToApp } from 'react-icons/md';
import { GlobalContext } from '../../context/context-form';
import { Button, DropMenu, Header, Optins, TitleList } from './style';
import { useNavigate } from 'react-router-dom';

const HeaderMaster = () => {
  const [user, setUser] = React.useState({
    name: '',
    card: '',
    cabin: '',
    unit: '',
  });

  const { login, setLogin } = React.useContext(GlobalContext);

  const [value, setValue] = React.useState(false); //drop menu
  const navigate = useNavigate();

  React.useEffect(() => {
    const keys = ['name', 'card', 'cabin', 'unit'];
    let newState = {};

    for (let key of keys) {
      newState[key] = localStorage.getItem(key);
    }
    setUser(newState);
  }, []);

  function setLogount() {
    const keys = ['name', 'card', 'cabin', 'unit'];

    for (let key of keys) {
      localStorage.setItem(key, '');
    }

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
            {user.name && <>{user.name}</>}
            <FaUser size={19} />
          </Optins>
          <Optins>
            {user.card && <div>{user.card}</div>} <FaRegAddressCard size={20} />
          </Optins>
          <Optins>
            {user.cabin} <MdExitToApp size={20} />
          </Optins>
          <Optins>
            {user.unit} <MdExitToApp size={20} />
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
