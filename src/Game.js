
class Game {
    constructor(size) {
        this.board = [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0],
            [1, 0, 1, 0, 1, 0, 1, 0]
        ];
        this.board = generateBoard(this.board, size);
        solveNQ(this.board, size);
        console.log(this);

    }
}

function isSafe(board, row, col, n) {

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
function printSolution(board, n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            document.write(" " + board[i][j] + " ");
        }
        document.write("<br>");
    }
    document.write("<br>");
}


function recurseNQ(board, col, n) {
    if (col === n) {
        debugger;
        setTimeout(
        printSolution(board, n), 3000);
        return;
    }

    for (var i = 0; i < n; i++) {
        if (isSafe(board, i, col, n)) {
            board[i][col] = 1;
        
            recurseNQ(board, col + 1, n);
            board[i][col] = 0;
        }
    }
}


function solveNQ(board, n) {
    recurseNQ(board, 0, n);
}

function generateBoard(tempBoard, n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            tempBoard[i][j] = 0;
        }
    }
    return tempBoard;
}



export default Game;
