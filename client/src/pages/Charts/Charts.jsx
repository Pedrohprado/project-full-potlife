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
  Area,
} from 'recharts';
import { Container, ContainerGraphics } from './style';

const Charts = () => {
  const [getLocalTime, setGetLocalTime] = React.useState([]);
  const [data, setData] = React.useState(null);

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
          trabalhado: multiply.diference,
          potlife: multiply.potlife,
          situacao: multiply.situacao,
        };
        return newObj;
      });
      setData(some);
      console.log(some);
    }
  }, [getLocalTime]);

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
          <XAxis dataKey='situacao' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey='potlife' type='monotone' stroke='orange' />
          <Line dataKey='minuto' type='monotone' stroke='purple' />
          <Line dataKey='trabalhado' type='monotone' stroke='blue' />
        </LineChart>

        <ComposedChart width={500} height={350} data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='situacao' />
          <YAxis />
          <Tooltip />
          <Line dataKey='potlife' type='monotone' stroke='orange' />

          <Area
            type='monotone'
            dataKey='trabalhado'
            stackId='1'
            stroke='blue'
            fill='blue'
          />
          {/* <Line dataKey='minuto' type='monotone' stroke='purple' />
          <Line dataKey='diferencia' type='monotone' stroke='blue' /> */}
        </ComposedChart>
      </ContainerGraphics>
    </Container>
  );
};

export default Charts;
