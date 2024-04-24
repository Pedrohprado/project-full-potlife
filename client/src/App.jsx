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
import SetCradations from './pages/SetCradations';
import CronInk from './pages/CronInk';
import Grafics from './pages/Charts/Charts';
import HeaderMaster from './components/HeaderMaster/HeaderMaster';
import PaintPreparation from './components/paintpreparation/paintpreparation';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalForm>
          <HeaderMaster />
          <Routes>
            <Route path='/' element={<SetCradations />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='pontodeorvalho' element={<ControlOrv />} />
            <Route path='clients' element={<ClientPage />} />
            <Route path='clients/:id' element={<SelectForn />} />
            <Route path='clients/:id/:for' element={<SelectTypeInk />} />
            <Route path='clients/:id/:for/:type' element={<ClientInks />} />
            <Route path='preparacao' element={<PaintPreparation />} />
            <Route path='cron' element={<CronInk />} />
            <Route path='graficos' element={<Grafics />} />
          </Routes>
          <Normalize />
        </GlobalForm>
      </BrowserRouter>
    </>
  );
}

export default App;
