import React, { useEffect } from 'react';
import './Game.scss';
import Board from '../Board/Board';
import { useGameStore } from '../../context';
import { getSignTurn, calculateWinner, parseTime } from '../../utils';
import { addToHistory, showNextPlayer, setWinner, changeDisabledChangePlayer, addToWinnersHistory, changeDisabledGiveUp } from '../../actions';
import InformationList from '../InformationList/InformationList';
import WinersList from '../WinnersList/WinersList';
import Form from '../Form/Form';

export default function Game() {
    const [{ history, firstPlayer, secondPlayer, step, winnersHistory }, dispatch] = useGameStore();
    const currentStep = history[history.length - 1];

    useEffect(() => {
        let dataFromLocalStorage = localStorage.getItem('winnersList');
        if (JSON.parse(dataFromLocalStorage)) {
            JSON.parse(dataFromLocalStorage).map((item) => {
                dispatch(addToWinnersHistory(item))
            })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('winnersList', JSON.stringify(winnersHistory))
    }, [winnersHistory])

    const handleClick = (i) => {

        const squares = [...currentStep.squares];
        squares[i] = getSignTurn(history.length + step);

        const winner = calculateWinner(squares);

        // show next Player
        if (squares[i] === firstPlayer.value) {
            dispatch(showNextPlayer(secondPlayer))
        } else {
            dispatch(showNextPlayer(firstPlayer))
        }
        // show next Player

        // show Winner
        dispatch(setWinner(winner))
        if (winner) {
            dispatch(changeDisabledGiveUp(true))
        }

        if (winner && winner !== 'Draw') {
            let date = new Date();

            let winTime = `${parseTime(date.getHours())}:${parseTime(date.getMinutes())}:${parseTime(date.getSeconds())}`

            if (winner === firstPlayer.value) {
                dispatch(addToWinnersHistory({ ...firstPlayer, winTime }))
                localStorage.setItem('winnersList', JSON.stringify({ ...firstPlayer, winTime }))
            } else {
                dispatch(addToWinnersHistory({ ...secondPlayer, winTime }))
                localStorage.setItem('winnersList', JSON.stringify({ ...secondPlayer, winTime }))
            }
        }
        // show Winner

        // set Disabled buttons
        if (squares.some((item) => item !== null)) {
            dispatch(changeDisabledChangePlayer(true))
            dispatch(changeDisabledGiveUp(false))
        }

        // set Disabled on a buttons
        dispatch(addToHistory(squares));
    };

    return (
        <div className="game">
            <Form></Form>
            <WinersList></WinersList>
            <Board squares={currentStep.squares} onClick={handleClick} />
            <InformationList></InformationList>
        </div>
    )
}