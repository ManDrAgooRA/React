import React, { useEffect, useState } from 'react';
import MyButton from './components/UI/button/MyButton';
import './App.css';

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0, });
  const [timerStatus, setTimerStatus] = useState(1);

  let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;
  // useEffect(() => {
  //   if (btnStatus) {
  //     const id = setInterval(() => {
  //       if (seconds >= 10) {
  //         console.log('more')
  //         setSeconds(0);
  //         setMinutes(minutes => minutes + 1)
  //         setSeconds(seconds => seconds + 1)
  //       } else {

  //         setSeconds(seconds => seconds + 1);
  //       }

  //     }, 1000);
  //     return () => clearInterval(id)
  //   }
  // }, [btnStatus])
  // const seconds = () => {
  //   setTime({ ms: time.ms++ })
  //   console.log(updatedMs)
  // }
  const start = () => {
    changeTime();
    setInterval(changeTime, 10);
    setTimerStatus(1)
  }

  const stopTime = () => {
    setTimerStatus(0)
  }

  const changeTime = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }

    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }

    if (updatedMs === 99) {
      updatedS++;
      updatedMs = 0;
    }

    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH })
  }

  return (
    <div className="App">
      <div className="container">
        <div className="time">
          <div className="time__block">
            {time.h < 10 ? `0${time.h}` : `${time.h}`}
            :
            {time.m < 10 ? `0${time.m}` : `${time.m}`}
            :
            {time.s < 10 ? `0${time.s}` : `${time.s}`}
            :
            {time.ms < 10 ? `0${time.ms}` : `${time.ms}`}
          </div>
          <div className="time__buttons">
            {timerStatus ? <MyButton onClick={start}>Start</MyButton> : <MyButton onClick={start}>Continue</MyButton>}
            <MyButton onClick={stopTime}>Stop</MyButton>
            <MyButton >Reset</MyButton>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
