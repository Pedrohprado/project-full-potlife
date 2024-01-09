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
} from 'recharts';
import { Container, ContainerGraphics } from './style';

const Charts = () => {
  const [getLocalTime, setGetLocalTime] = React.useState(null);

  React.useEffect(() => {
    function getDatas() {
      const value = JSON.parse(localStorage.getItem('time'));
      setGetLocalTime(value);
    }

    const interval = setInterval(getDatas, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <h1>Cron teste</h1>
      <ContainerGraphics>
        <BarChart width={500} height={350} data={getLocalTime}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='funcionario' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey='hora'
            fill='#8884d8'
            activeBar={<Rectangle fill='pink' stroke='blue' />}
          />
          <Bar
            dataKey='minuto'
            fill='#82ca9d'
            activeBar={<Rectangle fill='gold' stroke='purple' />}
          />
          <Bar
            dataKey='segundo'
            fill='#829d'
            activeBar={<Rectangle fill='gold' stroke='purple' />}
          />
        </BarChart>

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
      </ContainerGraphics>
    </Container>
  );
};

export default Charts;
