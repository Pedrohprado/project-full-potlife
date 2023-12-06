import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Normalize } from 'styled-normalize';

import HomePage from './pages/HomePage';
import ClientPage from './pages/ClientPage';
import JdSupplier from './pages/ClientPage/JdSupplier';
import JdShereWin from './pages/ClientPage/JdSupplier/JdShereWin';
import JdSherWinEsmalte from './pages/ClientPage/JdSupplier/JdShereWin/JdSherWinEsmalte';
import ControlOrv from './components/ControlOrv';
import MoveLogin from './pages/MoveLogin';
import Login from './pages/Login';
import Form from './pages/Form';

import './App.css';
import { GlobalForm } from './context/context-form';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MoveLogin />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/createdacount',
      element: <Form />,
    },
    {
      path: '/home',
      element: <HomePage />,
    },
    {
      path: '/pontodeorvalho',
      element: <ControlOrv />,
    },
    {
      path: '/clients',
      element: <ClientPage />,
    },

    {
      path: '/johndeere',
      element: <JdSupplier />,
    },
    {
      path: '/johndeere/sherwin',
      element: <JdShereWin />,
    },
    {
      path: '/johndeere/sherwin/esmalte',
      element: <JdSherWinEsmalte />,
    },
  ]);
  return (
    <>
      <GlobalForm>
        <RouterProvider router={router} />
        <Normalize />
      </GlobalForm>
    </>
  );
}

export default App;
