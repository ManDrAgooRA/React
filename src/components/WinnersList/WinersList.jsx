import React, { useEffect } from 'react';
import { useGameStore } from '../../context';
import { v4 as uuidv4 } from 'uuid';
import { addToWinnersHistory } from '../../actions';

export default function WinersList() {
    const [{ winnersHistory }, dispatch] = useGameStore();

    return (
        <div>
            <p>Winners List:</p>
            {winnersHistory.map(({ winnersList }, i) => {
                return <p key={uuidv4()}>{winnersList.name}:{winnersList.value} - {winnersList.winTime}</p>
            })}
        </div>
    )
}
