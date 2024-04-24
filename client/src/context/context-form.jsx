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
  const [ink, setInk] = React.useState('');
  const [codeInk, setCodeInk] = React.useState('');
  const [potlife, setPotlife] = React.useState('');
  const [batch, setBatch] = React.useState('');
  const [catalyst, setCatalyst] = React.useState('');
  const [potlifeTest, setPotlifeTest] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [localTime, setLocalTime] = React.useState([]);
  const [data, setData] = React.useState('');
  const [umity, setUmity] = React.useState('');
  const [temperature, setTemperature] = React.useState('');
  const [orval, setOrval] = React.useState('');
  const [press, setPress] = React.useState('');
  const [filter, setFilter] = React.useState('');
  const [visc, setVisc] = React.useState('');
  const [flowRate, setFlowRate] = React.useState('');

  return (
    <GlobalContext.Provider
      value={{
        press,
        setPress,
        filter,
        setFilter,
        visc,
        setVisc,
        flowRate,
        setFlowRate,
        umity,
        setUmity,
        temperature,
        setTemperature,
        orval,
        setOrval,
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
        ink,
        setInk,
        codeInk,
        setCodeInk,
        potlife,
        setPotlife,
        batch,
        setBatch,
        catalyst,
        setCatalyst,
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
