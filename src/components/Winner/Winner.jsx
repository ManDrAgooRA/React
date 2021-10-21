import React from 'react';
import { useGameStore } from '../../context';

import './winner.scss'

export default function Winner() {
    const [{ winner }] = useGameStore();

    return (
        <div>
            <p><strong>Winner : </strong> {winner ? `${winner}` : `who knows... who knows...`}</p>
        </div>
    )
}
