import React from 'react';
import { GlobalContext } from '../../context/context-form';

const CronInk = () => {
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
  }, [potlifeTest, hours, minutes, seconds, setHours, setMinutes, setSeconds]);

  return (
    <div>
      <h1>cron</h1>
      <h2>{potlifeTest}</h2>
      <h3>
        {hours}:{minutes}:{seconds}
      </h3>
    </div>
  );
};

export default CronInk;
