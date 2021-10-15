import { winnerLines } from '../constants';

export function calculateWinner(squares) {
    const winnerLine = winnerLines.find(([a, b, c]) => squares[a] && squares[a] === squares[b] && squares[b] === squares[c]);

    if (winnerLine) {
        return squares[winnerLine[0]];
    }

    if (squares.every(Boolean)) {
        return 'Draw';
    }

    return null;
}

// second variant (4-8 rows)
// for (let [a, b, c] of winnerLines) {
//     if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
//       return squares[a];
//     }
// }