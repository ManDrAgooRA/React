import React, { useEffect, useState } from 'react';
import Buttons from './components/Buttons';
import Time from './components/Time';
import TimerList from './components/TimerList';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0, });
  const [timerStatus, setTimerStatus] = useState(false);
  const [times, setTimes] = useState([]);

  // localStorage.removeItem('array')

  useEffect(() => {
    const timelist = localStorage.getItem('array');
    setTimes(JSON.parse(timelist));
  }, [])

  useEffect(() => {
    localStorage.setItem('array', JSON.stringify(times))
  }, [times])

  const parseTime = (time) => {
    if (time < 10) {
      return `0${time}`
    } else {
      return time
    }
  }

  return (
    <div className="App">

      <div className="container">

        <Time
          time={time}
          parseTime={parseTime}
        />

        <Buttons
          time={time}
          timerStatus={timerStatus}
          parseTime={parseTime}
          setTime={setTime}
          setTimes={setTimes}
          setTimerStatus={setTimerStatus}
          times={times}
        />

        <TimerList times={times} uuidv4={uuidv4} />

      </div>
    </div >
  );
}

export default App;