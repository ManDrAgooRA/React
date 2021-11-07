import React from 'react'
import { Box, ButtonGroup } from '@mui/material';
import MyButton from '../UI/Button/MyButton';
import { useDispatch, useSelector } from 'react-redux';
import { changeTimer } from '../../utils'
import { changeBtnDisabled } from '../../actions';

export default function TimersButtons({ time, setTime, interV, setInterV }) {
    const { isDisabled } = useSelector((state) => state.users)
    const dispatch = useDispatch();

    let updated = {
        ms: time.ms,
        s: time.s,
        m: time.m,
    }

    const start = () => {
        setInterV(setInterval(helperFunction, 10));
        dispatch(changeBtnDisabled({ start: true, stop: false, reset: true, save: true, cancel: false }))
    }

    const helperFunction = () => {
        changeTimer(updated)
        return setTime({ ms: updated.ms, s: updated.s, m: updated.m, })
    }

    const stop = () => {
        dispatch(changeBtnDisabled({ start: true, stop: true, reset: false, save: false, cancel: false }))
        clearInterval(interV)
    }

    const reset = () => {
        clearInterval(interV)
        setTime({ ms: 0, s: 0, m: 0, h: 0 })
        dispatch(changeBtnDisabled({ start: false, stop: true, reset: true, save: true, cancel: false }))
    }

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <MyButton disabled={isDisabled.start} onClick={start}>Start</MyButton>
                    <MyButton disabled={isDisabled.stop} onClick={stop}>Stop</MyButton>
                    <MyButton disabled={isDisabled.reset} onClick={reset}>Reset</MyButton>
                </ButtonGroup>
            </Box>
        </>
    )
}
