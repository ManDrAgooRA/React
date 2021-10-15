import React from 'react';
import Square from '../Square/Square';
import './Board.scss';
import { gameParams } from '../../constants';

export default function Board({ squares, onClick }) {
    const sizes = new Array(gameParams.size).fill(null);
    return (
        <div className="board">
            {
                sizes.map((col, colIndex) => (
                    <div key={colIndex}>
                        {
                            sizes.map((size, rowIndex) => {
                                const index = colIndex * gameParams.size + rowIndex;
                                return (
                                    <Square key={index} value={squares[index]} onClick={() => onClick(index)} />
                                )
                            })
                        }
                    </div>
                ))
            }
        </div>
    );
}