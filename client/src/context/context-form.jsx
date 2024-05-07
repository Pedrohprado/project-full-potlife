/* eslint-disable react/prop-types */
import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalForm = ({ children }) => {
  const [name, setName] = React.useState('');
  const [card, setCard] = React.useState('');
  const [cabin, setCabin] = React.useState('');
  const [unit, setUnit] = React.useState('');
  const [login, setLogin] = React.useState(true);
  const [client, setClient] = React.useState('');
  const [forn, setForn] = React.useState('');
  const [typeInk, setTypeInk] = React.useState('');
  const [ink, setInk] = React.useState('');
  const [codeInk, setCodeInk] = React.useState('');
  const [potlife, setPotlife] = React.useState('');
  const [batch, setBatch] = React.useState('');
  const [catalyst, setCatalyst] = React.useState('');
  const [umity, setUmity] = React.useState('');
  const [temperature, setTemperature] = React.useState('');
  const [orval, setOrval] = React.useState('0');
  const [press, setPress] = React.useState('');
  const [filter, setFilter] = React.useState('');
  const [visc, setVisc] = React.useState('');
  const [flowRate, setFlowRate] = React.useState('');
  const [timer, setTimer] = React.useState({
    inicio: '',
    finalizado: '',
    trabalhado: '',
  });
  const [reset, setReset] = React.useState(false);

  React.useEffect(() => {
    function resetAll() {
      setClient('');
      setForn('');
      setTypeInk('');
      setInk('');
      setCodeInk('');
      setPotlife('');
      setBatch('');
      setCatalyst('');
      setTimer('');
      setPress('');
      setFilter('');
      setVisc('');
      setFlowRate('');
      setUmity('');
      setTemperature('');
      setOrval('');
      setReset(false);
    }

    if (reset) resetAll();
  }, [reset]);

  React.useEffect(() => {
    if (timer.inicio && timer.finalizado && timer.trabalhado)
      localStorage.setItem('timer', JSON.stringify(timer));
  }, [timer]);

  React.useEffect(() => {
    if (umity && temperature && orval && press && filter && visc && flowRate) {
      localStorage.setItem('umity', umity);
      localStorage.setItem('temperature', temperature);
      localStorage.setItem('orval', orval);
      localStorage.setItem('press', press);
      localStorage.setItem('filter', filter);
      localStorage.setItem('visc', visc);
      localStorage.setItem('flowrate', flowRate);
    }
  }, [filter, flowRate, orval, press, temperature, umity, visc]);

  React.useEffect(() => {
    if (batch && catalyst) {
      localStorage.setItem('batch', batch);
      localStorage.setItem('catalyst', catalyst);
    }
  }, [batch, catalyst]);

  React.useEffect(() => {
    if (name && card && cabin && unit) {
      localStorage.setItem('name', name);
      localStorage.setItem('card', card);
      localStorage.setItem('cabin', cabin);
      localStorage.setItem('unit', unit);
    }
  }, [cabin, card, name, unit]);

  React.useEffect(() => {
    if (client && forn && typeInk) {
      localStorage.setItem('client', client);
      localStorage.setItem('forn', forn);
      localStorage.setItem('typeInk', typeInk);
    }
  }, [client, forn, typeInk]);

  React.useEffect(() => {
    if (ink && codeInk && potlife) {
      localStorage.setItem('ink', ink);
      localStorage.setItem('codeInk', codeInk);
      localStorage.setItem('potlife', potlife);
    }
  }, [codeInk, ink, potlife]);

  return (
    <GlobalContext.Provider
      value={{
        timer,
        setTimer,
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
        setReset,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
