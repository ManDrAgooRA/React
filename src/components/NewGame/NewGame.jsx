import React from 'react'
import MyButton from '../UI/Button/MyButton'
import { showNextPlayer, newGames, changeDisabledChangePlayer, setAnotherStep, changeDisabledGiveUp, changeFirstPlayer } from '../../actions';
import { gameParams } from '../../constants';
import { useGameStore } from '../../context';


export default function NewGame() {
    const [{ firstPlayer }, dispatch] = useGameStore();

    const newGame = () => {
        let arr = new Array(Math.pow(gameParams.size, 2)).fill(null);
        dispatch(newGames(arr))
        dispatch(showNextPlayer(firstPlayer))
        dispatch(changeFirstPlayer(firstPlayer))
        dispatch(changeDisabledChangePlayer(false))
        dispatch(setAnotherStep(0))
        dispatch(changeDisabledGiveUp(true))
    }

    return (
        <MyButton onClick={newGame}>Start New Game</MyButton>
    )
}
