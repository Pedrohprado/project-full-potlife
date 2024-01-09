import Charts from '../Charts/Charts';
import CronInk from '../CronInk';
import { Route, Routes } from 'react-router-dom';
import { Navigation, ButtonNav } from './style';

const ControlCronCharts = () => {
  return (
    <div>
      <Navigation>
        <ButtonNav to={'/cron/timer'}>Cronômetro</ButtonNav>
        <ButtonNav to={'/cron/charts'}>Gráficos</ButtonNav>
      </Navigation>

      <Routes>
        <Route path='timer' element={<CronInk />} />
        <Route path='charts' element={<Charts />} />
      </Routes>
    </div>
  );
};

export default ControlCronCharts;
