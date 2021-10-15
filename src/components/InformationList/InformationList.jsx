import React from 'react'
import { useGameStore } from '../../context';
import { gameParams } from '../../constants';
import './InformationList.scss';
import MyButton from '../UI/Button/MyButton';
import NextStepPlayer from '../NextStepPlayer/NextStepPlayer';
import { addToHistory, showNextPlayer, setWinner } from '../../actions';
import Winner from '../Winner/Winner';


export default function InformationList() {
    const [{ history, fisrtPlayer }, distpatch] = useGameStore();

    const historyShow = (item, i) => {
        console.log(item)
        console.log(history)
    }

    const newGame = () => {
        // let arr = new Array(Math.pow(gameParams.size, 2)).fill(null);

        // distpatch(newGame('erwwer'))
        //  Не работает

        distpatch({
            type: 'new',
            payload: new Array(Math.pow(gameParams.size, 2)).fill(null),
        })
        // Работает

        distpatch(showNextPlayer(fisrtPlayer))
        // console.log(history)
    }

    return (
        <div className="container">
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
