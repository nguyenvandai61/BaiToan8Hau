function Game(size) {
    this.board = [];
    this.turn = [];
    for (var i = 0; i < size; i++) {
        const arrayIn = [];
        for (var j = 0; j < size; j++) {
            arrayIn.push(null);
        }
        this.board.push(arrayIn);
    }
}


export default Game;
