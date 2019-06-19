function Game(promoCallback) {
    this.board = [];
    this.turn = [];
    for (var i = 0; i < 8; i++) {
        const arrayIn = [];
        for (var j = 0; j < 8; j++) {
            arrayIn.push(null);
        }
        this.board.push(arrayIn);
    }
}


export default Game;
