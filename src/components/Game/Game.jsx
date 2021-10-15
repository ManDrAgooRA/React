import React from 'react';
import './Game.scss';
import Board from '../Board/Board';
import { useGameStore } from '../../context';
import { getSignTurn, calculateWinner } from '../../utils';
import showWinner from '../../utils/showWinner';
import { addToHistory, showNextPlayer, setWinner } from '../../actions';
import { initialState } from '../../reducer';
import InformationList from '../InformationList/InformationList'

export default function Game() {
    const [{ history }, dispatch] = useGameStore();
    const currentStep = history[history.length - 1];

    const handleClick = (i) => {
        const squares = [...currentStep.squares];
        squares[i] = getSignTurn(history.length);

        const winner = calculateWinner(squares);

        // console.log(getSignTurn(history.length));
        // //show  symbol
        if (winner) {
            dispatch(setWinner(winner))
        }

        if (getSignTurn(history.length) === initialState.firstPlayer.value) {

            showWinner(dispatch, showNextPlayer, initialState.secondPlayer)

        } else {
            showWinner(dispatch, showNextPlayer, initialState.firstPlayer)

        }

        dispatch(addToHistory(squares));
        console.log(currentStep)
        // squares = [null, null, null, null, null, null, null, null, null]
    };

    return (
        <div className="game">
            <Board squares={currentStep.squares} onClick={handleClick} />
            <InformationList></InformationList>
        </div>
    )
}