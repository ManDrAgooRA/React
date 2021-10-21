import React from 'react'
import { useGameStore } from '../../context';
import { showNextPlayer, setAnotherStep, } from '../../actions';
import MyButton from '../UI/Button/MyButton';

export default function FirstStepO() {
    const [{ secondPlayer, isDisabledButton }, dispatch] = useGameStore();

    const changePlayer = () => {
        dispatch(setAnotherStep(1))
        dispatch(showNextPlayer(secondPlayer))
    }

    return (
        <MyButton onClick={changePlayer} disabled={isDisabledButton}>First step O</MyButton>
    )
}
