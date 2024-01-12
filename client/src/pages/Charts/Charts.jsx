import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
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
        const multiply = { ...obj, hora: obj.hora * 60 + obj.minuto };
        const newObj = {
          ...multiply.hora,
          minuto: multiply.hora,
          potlife: potlifeTest,
        };
        return newObj;
      });
      setData(some);
    }
  }, [getLocalTime, potlifeTest]);

  return (
    <Container>
      <h1>Cron teste</h1>
      <ContainerGraphics>
        <BarChart width={500} height={350} data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey='minuto'
            barSize={10}
            fill='#3e84a0'
            activeBar={<Rectangle fill='pink' stroke='blue' />}
          />
        </BarChart>
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

        <LineChart width={500} height={350} data={getLocalTime}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey='hora' type='monotone' stroke='blue' />
          <Line dataKey='minuto' type='monotone' stroke='purple' />
          <Line dataKey='segundo' type='monotone' stroke='green' />
        </LineChart>

        <LineChart width={500} height={350} data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey='minuto' type='monotone' stroke='purple' />
        </LineChart>
      </ContainerGraphics>
    </Container>
  );
};

export default Charts;
