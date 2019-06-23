import React from 'react';
import "./table.css";
import SizeInput from './SizeInput';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 6,
            board: []
        }
        this.setSizeInput = this.setSizeInput.bind(this);
        this.generateBoard = this.generateBoard.bind(this);
        this.setBoard = this.setBoard.bind(this);
        this.recurseNQ = this.recurseNQ.bind(this);
        this.isSafe = this.isSafe.bind(this);
    }
    componentWillMount() {
        console.log('will mount');
        this.generateBoard(this.state.board, this.state.size);
        const board =[];
        Object.assign(board, this.state.board);
        this.recurseNQ(board, 0, this.state.size);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("check should component update");
        
        return true;
    }
    componentWillUpdate() {
        console.log("Component will update");
    }
    setSizeInput(size) {
        const board = [];
        this.generateBoard(board, size);
        this.recurseNQ(board, 0, size);
        this.setState({size: size});
    }
    printSolution(board, n) {

        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                document.write(" " + board[i][j] + " ");
            }
            document.write("<br>");
        }
        document.write("<br>");
    }

    recurseNQ(board, col, n) {
        if (col === n) {
            this.setBoard(board);
            return;
        }
        
        for (var i = 0; i < n; i++) {
            if (this.isSafe(board, i, col, n)) {
                board[i][col] = 1;
                this.recurseNQ(board, col + 1, n);
                board[i][col] = 0;
            }
        }
    }
    
    setBoard(board) { 
        const newBoard = JSON.parse(JSON.stringify(board));
        this.setState({board: newBoard });
    }
    isSafe(board, row, col, n) {

        // Checks the ← direction
        for (var i = 0; i < col; i++) {
            if (board[row][i] === 1) {
                return false;
            }
        }

        // Checks the ↖ direction 
        for (let i = row, j = col; i >= 0 && j >= 0; i-- , j--) {
            if (board[i][j] === 1) {
                return false;
            }
        }

        // Checks the ↙ direction 
        for (let i = row, j = col; j >= 0 && i < n; i++ , j--) {
            if (board[i][j] === 1) {
                return false;
            }
        }

        return true;
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
        console.log("render");
        const board = this.state.board;
        const size = this.state.size;
        const changeChar = (bool) => {
            return bool? '♕' : ' ';
        }
        const createTable = () => {
            let table = [];
            for (let i = 0; i < size; i++) {
                let children = [];
                //Inner loop to create children
                for (let j = 0; j < size; j++) {
                    children.push(<td key={j}>{`${changeChar(board[i][j])}`}</td>)
                }
                //Create the parent and add the children
                table.push(<tr key={i}>{children}</tr>)
            }
            return table;
        }


        return (
            <div>
                <table id="table">
                    <tbody>
                        {createTable()}
                    </tbody>

                </table>
                <SizeInput setSizeInput={this.setSizeInput} />
            </div>
        )
    }
}

export default Board;

