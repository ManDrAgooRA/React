import React from 'react';
import { useGameStore } from '../../context';

import './winner.scss'

export default function Winner() {
    const [{ winner }] = useGameStore();

    return (
        <div>
            <p>{winner ? `Победитель : ${winner}` : `Победитель : in progress...`}</p>
        </div>
    )
}
