/* eslint-disable react/prop-types */
import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalForm = ({ children }) => {
  const [name, setName] = React.useState('');
  const [card, setCard] = React.useState('');
  const [sector, setSector] = React.useState('');
  const [login, setLogin] = React.useState(false);

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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
