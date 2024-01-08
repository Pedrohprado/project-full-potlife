import React from 'react';
import { GlobalContext } from '../../context/context-form';

const CronInk = () => {
  const [stopcron, setStopcron] = React.useState(true);
  const [localTime, setLocalTime] = React.useState([]);
  const [getLocalTime, setGetLocalTime] = React.useState(null);
  const {
    potlifeTest,
    hours,
    minutes,
    seconds,
    setHours,
    setMinutes,
    setSeconds,
  } = React.useContext(GlobalContext);

  React.useEffect(() => {
    if (stopcron) {
      const timer = setInterval(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return;
        }
        if (minutes === 0 && seconds === 0) {
          setHours((hours) => hours - 1);
          setMinutes(59);
          setSeconds(59);
        } else if (seconds === 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
        } else {
          setSeconds((seconds) => seconds - 1);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [hours, minutes, seconds, setHours, setMinutes, setSeconds, stopcron]);

  function handleClick() {
    setStopcron(false);
    setLocalTime([
      ...localTime,
      {
        hora: hours,
        minuto: minutes,
        segundo: seconds,
      },
    ]);
    const value = JSON.parse(localStorage.getItem('time')) || [];
    setGetLocalTime(value);
  }

  function SendLocal() {
    localStorage.setItem('time', JSON.stringify(localTime));
  }
  return (
    <div>
      <h1>cron</h1>
      <h2>{potlifeTest}</h2>
      <h3>
        {hours}:{minutes < 10 ? '0' : null}
        {minutes}:{seconds < 10 ? '0' : null}
        {seconds}
      </h3>
      <button onClick={handleClick}>PARAR CRON</button>
      <button onClick={SendLocal}>SEND INFO</button>
      <button onClick={() => setStopcron(true)}>RECOMEÇAR CRON</button>

      <div>
        {getLocalTime !== null
          ? getLocalTime.map(({ hora, minuto, segundo }, i) => (
              <div key={i}>
                <h1>
                  {hora} : {minuto} : {segundo}
                </h1>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default CronInk;
