/* eslint-disable react/prop-types */
import React from 'react';

import {
  Button,
  DescriptionInk,
  CodeInk,
  BoxInfo,
  Color,
  Micras,
  PotLife,
} from './style';

import ConfirmCatalizador from '../ConfirmCatalizador';

export default function ButtonToCatali({
  ink,
  code,
  color,
  micras,
  potlife,
  catalisador,
}) {
  const [value, setValue] = React.useState(false);
  const [pot, setPot] = React.useState('');

  React.useEffect(() => {
    if (potlife === 180) {
      setPot('3:00');
    }
    if (potlife === 120) {
      setPot('2:00');
    } else {
      setPot('1:30');
    }
  }, [potlife]);

  function handleClick() {
    setValue(!value);
    returnTop();
  }

  function returnTop() {
    window.scrollTo(0, 0);
  }

  if (value) {
    return (
      <ConfirmCatalizador
        ink={ink}
        potlife={potlife}
        color={color}
        catalizador={catalisador}
        onClick={() => handleClick()}
        setValue={setValue}
      />
    );
  } else {
    return (
      <Button key={ink.toLowerCase()} onClick={handleClick}>
        <DescriptionInk>{ink.toUpperCase()}</DescriptionInk>
        <CodeInk>
          código da tinta: <span>{code}</span>
        </CodeInk>
        <BoxInfo>
          <Color color={color}></Color>
          <Micras>{micras} µm</Micras>
          <PotLife>{pot} Horas</PotLife>
        </BoxInfo>
      </Button>
    );
  }
}
