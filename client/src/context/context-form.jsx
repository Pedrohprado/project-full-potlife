/* eslint-disable react/prop-types */
import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalForm = ({ children }) => {
  const [name, setName] = React.useState('');
  const [card, setCard] = React.useState('');
  const [cabin, setCabin] = React.useState('');
  const [unit, setUnit] = React.useState('');
  const [login, setLogin] = React.useState(false);
  const [client, setClient] = React.useState('');
  const [forn, setForn] = React.useState('');
  const [typeInk, setTypeInk] = React.useState('');
  const [potlifeTest, setPotlifeTest] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [localTime, setLocalTime] = React.useState([]);
  const [data, setData] = React.useState('');

  return (
    <GlobalContext.Provider
      value={{
        name,
        setName,
        card,
        setCard,
        cabin,
        setCabin,
        unit,
        setUnit,
        client,
        setClient,
        forn,
        setForn,
        typeInk,
        setTypeInk,
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
        localTime,
        setLocalTime,
        data,
        setData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
