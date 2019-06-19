import React from 'react';
import "./table.css";
import Game from './Game';

export default ({ name }) => {
    const game = new Game();
    return (
        <div>
            <table id="table">
                <tbody>
                    {game.board.map((rank, i) => (
                        <tr key={i}>
                            {rank.map((piece, j) => <td key={j}>C</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

