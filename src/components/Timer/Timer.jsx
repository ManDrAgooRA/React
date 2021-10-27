import React from 'react'
import { parseTime } from '../../utils';
import { Box } from '@mui/material';
import TimerButtons from '../Timer/TimersButtons';

export default function Timer({ time, setTime }) {

    return (
        <>
            <Box sx={{ fontSize: '36px', textAlign: 'center' }}>
                {parseTime(time.m)}
                :
                {parseTime(time.s)}
                :
                {parseTime(time.ms)}
            </Box>
            <TimerButtons time={time} setTime={setTime}></TimerButtons>
        </>
    )
}
