/* eslint-disable react/prop-types */
import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalForm = ({ children }) => {
  const [name, setName] = React.useState('');
  const [card, setCard] = React.useState('');
  const [sector, setSector] = React.useState('');
  const [login, setLogin] = React.useState(false);
  const [potlifeTest, setPotlifeTest] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  return (
    <GlobalContext.Provider
      value={{
        name,
        setName,
        card,
        setCard,
        sector,
        setSector,
        login,
        setLogin,
        potlifeTest,
        setPotlifeTest,
        hours,
        setHours,
        minutes,
        setMinutes,
        seconds,
        setSeconds,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
