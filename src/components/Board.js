import React from 'react';
import "../table.css";
import SizeInput from './SizeInput';
import TextInfo from './TextInfo';
import PropTypes from 'prop-types';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 3, 
            state: 0,
            res: [],
        }
        this.setSizeInput = this.setSizeInput.bind(this);
        this.generateBoard = this.generateBoard.bind(this);
        this.recurseNQ = this.recurseNQ.bind(this);
        this.addRes = this.addRes.bind(this);
        this.isSafe = this.isSafe.bind(this);
        this.handleGetState = this.handleGetState.bind(this);
        this.handleChangeSize = this.handleChangeSize.bind(this);
    }
    componentWillMount() {
        console.log('will mount');
        let board = this.generateBoard(this.state.size);
        this.recurseNQ(board, 0, this.state.size);
    }

    componentWillUpdate() {
        console.log("Component will update");
        console.log(this.state);
    }
    setSizeInput(size) {
        // Clear array res
        let newRes = this.state.res;
        
        newRes.splice(0, this.state.res.length);
        this.setState({size: size});
        
        this.setState({res: newRes, state: 0});

        let board = this.generateBoard(size);
        this.recurseNQ(board, 0, size);
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
        if (n < 4) return;
        if (col === n) {
            // Push board to res;
            console.table(board);
            this.addRes(JSON.stringify(board));
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
    
    addRes(board) { 
        console.table(board);
        let res = this.state.res;
        let n = res.length;
        console.log("Number of cases: "+n);
        res.push((board));
        this.setState({res: res});
    }


    handleGetState(e) {
        let resLen = this.state.res.length;
        if (resLen == 0) return;
        let state = resLen === this.state.state+1? 0: this.state.state+1;
        this.setState({state: state});
        console.log(this.state);
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

    handleChangeSize(event) {
        const value = parseInt(event.target.value);
        if (!Number.isInteger(value) || value < 0) return;
        console.log(value);
        this.setSizeInput(value);
    }

    generateBoard(n) {
        let board = new Array(n);
        for (let i=0; i < n; i++) board[i]= new Array(n);
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                board[i][j] = 0;
            }
        }
        return board;
    }


    render() {
        console.log("render");
        const state = this.state.state;
        const size = this.state.size;
        const resLen = this.state.res.length;
        let board = '';
        if (resLen != 0)
            board = JSON.parse(this.state.res[state]);

        console.log(board);
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
                        {board? createTable(): ''}
                    </tbody>

                </table>
                <SizeInput getState={this.handleGetState} 
                setSizeInput={this.setSizeInput} 
                changeSize={this.handleChangeSize}
                />
                <TextInfo
                nStates={resLen}
                state={this.state.state}/>
            </div>
        )
    }
}

Board.propTypes = {
    size: PropTypes.number.isRequired,
    state: PropTypes.number.isRequired,
    res: PropTypes.array.isRequired
}

export default Board;

