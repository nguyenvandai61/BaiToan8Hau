import React from 'react';
import "./table.css";
import SizeInput from './SizeInput';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 8,
            board: []
        }
        this.setSizeInput = this.setSizeInput.bind(this);
        this.generateBoard = this.generateBoard.bind(this);
    }
    componentWillMount() {
        console.log(this);
        this.generateBoard(this.state.board, this.state.size);
    }
    setSizeInput(size) {
        const board = [];
        this.generateBoard(board, size);
        this.setState({ size: size, board: board });
        console.log(this);
    }
    
    generateBoard(board, n) {
        for (var i = 0; i < n; i++) {
            const row = [];
            for (var j = 0; j < n; j++) {
                row.push(0);
            }
            board.push(row);
        }
        return board;
    }

    render() {
        return (
            <div>
                <table id="table">
                    <tbody>
                        {this.state.board.map((rank, i) => (
                            <tr key={i}>
                                {rank.map((piece, j) => <td key={j}>{piece}</td>)}
                            </tr>
                        ))}
                    </tbody>

                </table>
                <SizeInput setSizeInput={this.setSizeInput} />
            </div>
        )
    }
}

export default Board;

