import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { GlobalForm } from './context/context-form';
import './App.css';

import HomePage from './pages/HomePage';
import ClientPage from './pages/ClientPage';
import SelectForn from './pages/SelectForn';
import SelectTypeInk from './pages/SelectTypeInk';
import ClientInks from './pages/ClientInks';
import ControlOrv from './components/ControlOrv';
import MoveLogin from './pages/MoveLogin';
import Login from './pages/Login';
import Form from './pages/Form';

import ProtectedRoute from './protect/ProtectedRoute';
import ControlCronCharts from './pages/CrontrolCronCharts';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalForm>
          <Routes>
            <Route path='/' element={<MoveLogin />} />
            <Route path='login' element={<Login />} />
            <Route path='createdacount' element={<Form />} />
            <Route
              path='home'
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route path='pontodeorvalho' element={<ControlOrv />} />
            <Route path='clients' element={<ClientPage />} />
            <Route path='clients/:id' element={<SelectForn />} />
            <Route path='clients/:id/:for' element={<SelectTypeInk />} />
            <Route path='clients/:id/:for/:type' element={<ClientInks />} />
            <Route path='cron/*' element={<ControlCronCharts />} />
          </Routes>
          <Normalize />
        </GlobalForm>
      </BrowserRouter>
    </>
  );
}

export default App;
