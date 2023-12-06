import React from 'react';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import { ContainerDay, TitleWelcome, TitleData, Return } from './style';

const DateControl = () => {
  const [welcome, setWelcome] = React.useState(null);
  const [dayOfWeek, setDayOfWeek] = React.useState(0);

  function updateDate() {
    const date = new Date();
    const wle = date.toLocaleString('pt-BR', { dayPeriod: 'long' });

    if (wle == 'da tarde') {
      setWelcome('Boa tarde');
    } else if (wle == 'da manha' || wle == 'da manhã') {
      setWelcome('Bom dia');
    } else {
      setWelcome('Boa noite');
    }
    setDayOfWeek(date.toLocaleString('pt-BR', { dateStyle: 'full' }));
  }

  React.useEffect(() => {
    updateDate();

    const interval = setInterval(updateDate, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ContainerDay>
      <TitleWelcome>{welcome}</TitleWelcome>
      <TitleData>{dayOfWeek}</TitleData>

      <Return to={'/home'}>
        <AiOutlineArrowLeft size={22} />
      </Return>
    </ContainerDay>
  );
};

export default DateControl;
