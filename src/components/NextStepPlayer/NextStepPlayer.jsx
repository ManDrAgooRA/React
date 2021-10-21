import React from 'react';
import { useGameStore } from '../../context';

export default function NextStepPlayer() {
    const [{ firstPlayer, nextPlayer }] = useGameStore();

    return (

        <div>
            <p><strong>Next Player : </strong>{Object.keys(nextPlayer).length !== 0 ? `${nextPlayer.name} : ${nextPlayer.value}` : `${firstPlayer.name} : ${firstPlayer.value}`}</p>
        </div>
    )
}
