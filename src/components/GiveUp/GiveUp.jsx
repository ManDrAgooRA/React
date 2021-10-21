import React from 'react';
import MyButton from '../UI/Button/MyButton';
import { useGameStore } from '../../context';
import { setWinner, addToWinnersHistory, changeDisabledGiveUp } from '../../actions';
import { parseTime } from '../../utils';


export default function GiveUp() {
    const [{ firstPlayer, secondPlayer, isDisabledGiveUp, nextPlayer }, dispatch] = useGameStore();

    const giveUp = () => {
        let date = new Date();

        let winTime = `${parseTime(date.getHours())}:${parseTime(date.getMinutes())}:${parseTime(date.getSeconds())}`

        dispatch(setWinner(nextPlayer.value))

        if (nextPlayer.value === 'x') {
            dispatch(addToWinnersHistory({ ...firstPlayer, winTime }))
        } else {
            dispatch(addToWinnersHistory({ ...secondPlayer, winTime }))
        }

        dispatch(changeDisabledGiveUp(true))
    }

    return (
        <MyButton onClick={giveUp} disabled={isDisabledGiveUp}>Give Up</MyButton>
    )
}
