import React from 'react';
import MyButton from './UI/Button/MyButton';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import { showWinner } from '../actions';
import { Box } from '@mui/system';

export default function WinnerInfo() {
    const { winner, filtredUsers } = useSelector((state) => state.users)
    const dispatch = useDispatch();

    const showWinnerFunction = () => {
        dispatch(showWinner())
    }

    return (
        <>
            {Object.keys(winner).length ?
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mt: 2 }} >
                    <Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>The winner</Typography>
                    <span>ID : {winner.id}</span>
                    <span>name : {winner.name}</span>
                    <span>time : {winner.time}</span>
                </Box>
                :
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mt: 2 }} >
                    <Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>Total participants: {filtredUsers.length}</Typography>
                    <MyButton sx={{ mt: 2 }} onClick={showWinnerFunction}>Show winner</MyButton>

                </Box>
            }


        </>

    )
}
