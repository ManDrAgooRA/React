import React from 'react'
import MyButton from '../UI/Button/MyButton'
import { useGameStore } from '../../context';
import { showNextPlayer, setAnotherStep, } from '../../actions';


export default function RandomPlayer() {
    const [{ firstPlayer, secondPlayer, isDisabledButton }, dispatch] = useGameStore();

    const randomPlayer = () => {
        let randomNumber = Math.floor(Math.random() * (2 - 1 + 1)) + 1;

        if (randomNumber === firstPlayer.id) {
            dispatch(showNextPlayer(secondPlayer))
            dispatch(setAnotherStep(1))
        } else {
            dispatch(showNextPlayer(firstPlayer))
            dispatch(setAnotherStep(0))
        }
    }

    return (
        <MyButton onClick={randomPlayer} disabled={isDisabledButton}>random player</MyButton>
    )
}
