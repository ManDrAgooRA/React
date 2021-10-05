import React, { useState } from 'react';
import useSound from 'use-sound';
import fanfareSfx from '../audio/click.mp3';
import MyButton from './UI/button/MyButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function Buttons({ timerStatus, time, parseTime, setTime, setTimerStatus, setTimes, times }) {
    const [interV, setInterV] = useState();
    const [isDisabled, setIsDesabled] = useState({ start: false, stop: true, reset: true });
    const [play] = useSound(fanfareSfx);

    const timers = {
        h: parseTime(time.h),
        m: parseTime(time.m),
        s: parseTime(time.s),
        ms: parseTime(time.ms),
    }

    let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

    const start = () => {
        changeTime()
        setInterV(setInterval(changeTime, 10));
        setIsDesabled({ start: true })
        play()
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

    const continueTimer = () => {
        setInterV(setInterval(changeTime, 10));
        setIsDesabled({ start: true })
        setTimerStatus(false)
        play()
    }

    const stop = () => {
        clearInterval(interV)
        setTimerStatus(true)
        setIsDesabled({ start: false, stop: true, reset: false })
        setTimes([...times, timers])
        localStorage.setItem('array', JSON.stringify(times))
        play()
    }

    const reset = () => {
        clearInterval(interV)
        setTimerStatus(false)
        setIsDesabled({ start: false, stop: true, reset: true })
        setTime({ ms: 0, s: 0, m: 0, h: 0 })
        setTimes([...times, timers])
        localStorage.setItem('array', JSON.stringify(times))
        play()
    }

    return (
        <div className="time__buttons">

            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                {timerStatus ? <MyButton onClick={continueTimer} disabled={isDisabled.start}>Continue</MyButton> : <MyButton onClick={start} disabled={isDisabled.start}>Start</MyButton>}
                <MyButton onClick={stop} disabled={isDisabled.stop}>Stop</MyButton>
                <MyButton onClick={reset} disabled={isDisabled.reset}>Reset</MyButton>
            </ButtonGroup>

        </div>
    )
}

export default Buttons
