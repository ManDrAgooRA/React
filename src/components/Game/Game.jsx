import React, { useEffect } from 'react';
import './Game.scss';
import Board from '../Board/Board';
import { useGameStore } from '../../context';
import { getSignTurn, calculateWinner, getWinner, parseTime } from '../../utils';
import { addToHistory, showNextPlayer, setWinner, changeDisabledChangePlayer, addToWinnersHistory } from '../../actions';
import InformationList from '../InformationList/InformationList';
import WinersList from '../WinnersList/WinersList';
import { winnerLines } from '../../constants';

export default function Game() {
    const [{ history, firstPlayer, secondPlayer, step, winnersHistory }, dispatch] = useGameStore();
    const currentStep = history[history.length - 1];

    useEffect(() => {
        let arrOfWinners = localStorage.getItem('key');
        dispatch(addToWinnersHistory(JSON.parse(arrOfWinners)))
    }, [])

    useEffect(() => {
        localStorage.setItem('key', JSON.stringify(winnersHistory))
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
        getWinner(dispatch, setWinner, winner)

        if (winner) {
            let date = new Date();

            let winTime = `${parseTime(date.getHours())}:${parseTime(date.getMinutes())}:${parseTime(date.getSeconds())}`
            // console.log(winner)

            if (winner === firstPlayer.value) {
                console.log(firstPlayer)
                dispatch(addToWinnersHistory({ ...firstPlayer, winTime }))
                // dispatch(addToWinnersHistory({ firstPlayer, winTime }))

            } else {
                console.log(secondPlayer)
                dispatch(addToWinnersHistory({ ...secondPlayer, winTime }))

            }
        }
        // console.log(winnersHistory)

        // show Winner

        // set Disabled button change player
        if (squares.some((item) => item !== null)) {
            dispatch(changeDisabledChangePlayer(true))
        }
        // set Disabled button change player


        dispatch(addToHistory(squares));
    };

    return (
        <div className="game">
            <WinersList></WinersList>
            <Board squares={currentStep.squares} onClick={handleClick} />
            <InformationList></InformationList>
        </div>
    )
}