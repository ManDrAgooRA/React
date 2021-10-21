import React from 'react'
import { useGameStore } from '../../context';
import MyButton from '../UI/Button/MyButton';
import { showNextPlayer, setAnotherStep, } from '../../actions';


export default function FirstStepX() {
    const [{ firstPlayer, isDisabledButton }, dispatch] = useGameStore();

    const changePlayer = () => {
        dispatch(setAnotherStep(0))
        dispatch(showNextPlayer(firstPlayer))
    }

    return (
        <MyButton onClick={changePlayer} disabled={isDisabledButton}>First step X</MyButton>
    )
}
