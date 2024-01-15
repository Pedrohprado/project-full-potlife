import { ButtonReturnMaster } from './style';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const ButtonReturn = () => {
  const navigate = useNavigate();

  return (
    <ButtonReturnMaster onClick={() => navigate(-1)}>
      <AiOutlineArrowLeft />
      voltar
    </ButtonReturnMaster>
  );
};

export default ButtonReturn;
