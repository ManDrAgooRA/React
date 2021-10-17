import React from 'react'
import { useGameStore } from '../../context';
import { gameParams } from '../../constants';
import './InformationList.scss';
import MyButton from '../UI/Button/MyButton';
import NextStepPlayer from '../NextStepPlayer/NextStepPlayer';
import { showNextPlayer, newGames, changeDisabledGameButton } from '../../actions';
import Winner from '../Winner/Winner';
import MyButon from '../UI/Button/MyButton';
import { initialState } from '../../reducer';

export default function InformationList() {
    const [{ history, firstPlayer, secondPlayer, isDisabledNewGameButton, step }, dispatch] = useGameStore();

    const historyShow = (item, i) => {
        // console.log(item)
        // console.log(history)
    }

    const newGame = () => {
        let arr = new Array(Math.pow(gameParams.size, 2)).fill(null);
        dispatch(newGames(arr))
        dispatch(showNextPlayer(firstPlayer))
        dispatch(changeDisabledGameButton(true))
    }
    // console.log(firstPlayer)

    const changePlayer = () => {
        console.log(firstPlayer.value)
        if (firstPlayer.value === 'x') {
            dispatch({
                type: 'fisrtPlayers',
                payload: secondPlayer
            })
        }
        // } else {
        //     dispatch({
        //         type: 'fisrtPlayers',
        //         payload: secondPlayer

        //     })
        // }

        // dispatch(showNextPlayer(secondPlayer))
        // console.log(firstPlayer)
        // dispatch({
        //     type: 'fisrtPlayers',
        //     payload: { name: 'player2', value: 'o' }
        // })
        console.log(firstPlayer.value)

        console.log('смена игрока')
    }

    // console.log(initialState)


    return (
        <div className="container">
            <MyButon onClick={changePlayer}>Сменить игрока</MyButon>
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
