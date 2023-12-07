/* eslint-disable react/prop-types */
import React from 'react';
import { GlobalContext } from '../context/context-form';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(GlobalContext);

  return login ? children : <Navigate to={'/login'} />;
};

export default ProtectedRoute;
