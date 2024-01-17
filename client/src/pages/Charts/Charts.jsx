import React from 'react';
import {
  LineChart,
  Line,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
} from 'recharts';
import { Container, ContainerGraphics } from './style';
import { GlobalContext } from '../../context/context-form';

const Charts = () => {
  const [getLocalTime, setGetLocalTime] = React.useState([]);
  const [data, setData] = React.useState(null);

  const { potlifeTest } = React.useContext(GlobalContext);

  React.useEffect(() => {
    function getDatas() {
      const value = JSON.parse(localStorage.getItem('time'));
      setGetLocalTime(value);
    }
    const interval = setInterval(getDatas, 3000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    if (getLocalTime !== null) {
      const some = getLocalTime.map((obj) => {
        const multiply = {
          ...obj,
          hora: obj.hora * 60 + obj.minuto,
          diference: obj.hora * 60 - obj.minuto,
        };
        const newObj = {
          minuto: multiply.hora,
          diferencia: multiply.diference,
          potlife: potlifeTest,
        };
        return newObj;
      });
      setData(some);
    }
  }, [getLocalTime, potlifeTest]);

  return (
    <Container>
      <h1 style={{ marginBottom: '50px' }}>Cron teste</h1>
      <ContainerGraphics>
        <ComposedChart width={500} height={350} data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey='minuto'
            barSize={10}
            fill='#413ea0'
            activeBar={<Rectangle fill='pink' stroke='blue' />}
          />
          <Line type='monotype' dataKey='potlife' stroke='#ff7300' />
        </ComposedChart>

        <LineChart width={500} height={350} data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey='minuto' type='monotone' stroke='purple' />
          <Line dataKey='potlife' type='monotone' stroke='orange' />
          <Line dataKey='diferencia' type='monotone' stroke='blue' />
        </LineChart>
      </ContainerGraphics>
    </Container>
  );
};

export default Charts;
