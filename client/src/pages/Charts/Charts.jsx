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
      const some = [...getLocalTime];
      // const some = getLocalTime.map((obj) => {
      //   if (obj.hora === 0) {
      //     obj.hora;
      //   } else {
      //     obj.hora = obj.hora * 60;
      //   }
      //   const multiply = {
      //     ...obj,
      //     diference: obj.potlife - (obj.hora + obj.minuto),
      //   };

      //   const newObj = {
      //     minuto: multiply.hora + multiply.minuto,
      //     trabalhado: multiply.diference,
      //     potlife: multiply.potlife,
      //     situacao: multiply.situacao,
      //   };
      //   return newObj;
      // });
      console.log(some);
      setData(some);
    }
  }, [getLocalTime]);

  return (
    <Container>
      <h2 style={{ marginBottom: '50px' }}>Levantamento</h2>
      <ContainerGraphics>
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

        <ComposedChart width={500} height={350} data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey='rest'
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
      </ContainerGraphics>
    </Container>
  );
};

export default Charts;
