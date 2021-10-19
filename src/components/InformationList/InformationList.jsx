import React from 'react'
import { useGameStore } from '../../context';
import { gameParams } from '../../constants';
import './InformationList.scss';
import MyButton from '../UI/Button/MyButton';
import NextStepPlayer from '../NextStepPlayer/NextStepPlayer';
import { showNextPlayer, newGames, changeDisabledChangePlayer } from '../../actions';
import Winner from '../Winner/Winner';
import MyButon from '../UI/Button/MyButton';

export default function InformationList() {
    const [{ history, firstPlayer, secondPlayer, isDisabledChangePlayerButton }, dispatch] = useGameStore();

    const historyShow = (item, i) => {
        // console.log(item)
        // console.log(history)
    }

    const newGame = () => {
        let arr = new Array(Math.pow(gameParams.size, 2)).fill(null);
        dispatch(newGames(arr))
        dispatch(showNextPlayer(firstPlayer))
        dispatch({
            type: 'fisrtPlayers',
            payload: firstPlayer
        })
        dispatch(changeDisabledChangePlayer(false))
        dispatch({
            type: 'changeStep',
            payload: 0
        })
    }

    const changePlayer = () => {
        dispatch({
            type: 'changeStep',
            payload: 0
        })
        dispatch(showNextPlayer(firstPlayer))
    }

    const changePlayer2 = () => {
        dispatch({
            type: 'changeStep',
            payload: 1
        })
        dispatch(showNextPlayer(secondPlayer))
    }

    return (
        <div className="container">
            <MyButon onClick={changePlayer} disabled={isDisabledChangePlayerButton}>First step X</MyButon>
            <MyButon onClick={changePlayer2} disabled={isDisabledChangePlayerButton}>First step O</MyButon>
            <MyButton onClick={newGame}>Start New Game</MyButton>
            <Winner></Winner>
            <NextStepPlayer></NextStepPlayer>
            <div className='history__lists'>
                {history.map((item, i) => {
                    if (i) {
                        return <MyButton key={Date.now() + i} onClick={() => historyShow(item, i)}>Go to #{i}</MyButton>
                    }
                })}
            </div>
        </div>

    )
}
