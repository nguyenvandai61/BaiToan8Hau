var n = 8;

solveNQ();

function printSolution(board){
  for(var i=0; i<n; i++){
    for(var j=0; j<n; j++){
      document.write(" "+board[i][j]+" ");
    }
    document.write("<br>");
  }
  document.write("<br>");
}

function isSafe(board, row, col){

  // Checks the ← direction
  for(var i=0; i<col; i++){
    if (board[row][i] === 1) {
      return false;
    }
  }

  // Checks the ↖ direction 
  for(var i=row, j=col; i>=0 && j>=0; i--, j--){
    if (board[i][j] === 1) {
      return false;
    }
  }

  // Checks the ↙ direction 
  for(var i=row, j=col; j>=0 && i<n; i++, j--){
    if (board[i][j] === 1){
      return false;
    }
  }

  return true;
}


function recurseNQ(board, col){
  if(col===n){
      printSolution(board); // <-- print another solution when n==8
    return;  
  }

  for(var i=0; i<n; i++){
    if(isSafe(board, i, col)){
      board[i][col]=1;

      recurseNQ(board, col+1);
      //if(recurseNQ(board, col+1)===true) //<-- you don't need this
          // return true;

      board[i][col]=0;
    }
  }
  return false;
}


function solveNQ(){
  var board = generateBoard(n);
  recurseNQ(board, 0);
  //if(recurseNQ(board, 0)===false){
    //console.log("No solution found");
   // return false;
 // }
 // printSolution(board);
}

function generateBoard(n){
  var board=[];
  for(var i=0; i<n; i++){
    board[i]=[];
    for(var j=0; j<n; j++){
      board[i][j]=0;
    }
  }
  return board;
}