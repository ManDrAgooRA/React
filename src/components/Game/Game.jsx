import React from 'react';
import './Game.scss';
import Board from '../Board/Board';
import { useGameStore } from '../../context';
import { getSignTurn, calculateWinner, getWinner, getNewGame } from '../../utils';
import showWinner from '../../utils/showWinner';
import { addToHistory, showNextPlayer, setWinner, changeDisabledGameButton } from '../../actions';
import { initialState } from '../../reducer';
import InformationList from '../InformationList/InformationList'

export default function Game() {
    const [{ history, firstPlayer, secondPlayer }, dispatch] = useGameStore();
    const currentStep = history[history.length - 1];

    const handleClick = (i) => {
        const squares = [...currentStep.squares];
        squares[i] = getSignTurn(history.length);
        // squares[i] = getSignTurn(step);

        const winner = calculateWinner(squares);

        // if (squares[i] === 'x') {
        //     console.log('o')
        //     dispatch(showNextPlayer({ name: 'vasay', value: 'o' }))
        // } else {
        //     // dispatch(showNextPlayer(firstPlayer))

        //     dispatch(showNextPlayer({ name: 'petay', value: 'x' }))

        //     console.log('x')
        // }

        if (squares[i] === firstPlayer.value) {
            dispatch(showNextPlayer(secondPlayer))

        } else {
            dispatch(showNextPlayer(firstPlayer))
        }

        // console.log(getSignTurn(history.length));
        // //show  symbol
        getWinner(dispatch, setWinner, winner)
        // console.log(squares[i])

        // if (getSignTurn(history.length) === firstPlayer.value) {

        //     showWinner(dispatch, showNextPlayer, secondPlayer)

        // } else {
        //     showWinner(dispatch, showNextPlayer, firstPlayer)

        // }

        dispatch(addToHistory(squares));

        if (getNewGame(squares)) {
            dispatch(changeDisabledGameButton(false))
        }
    };

    return (
        <div className="game">
            <Board squares={currentStep.squares} onClick={handleClick} />
            <InformationList></InformationList>
        </div>
    )
}