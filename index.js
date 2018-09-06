//Tictactoe

class Board  {
  constructor() {
    this.board = this.renderBoard();
  }

  renderBoard() {
    let board = [];
    for (let i = 0; i < 3; i++) {
      board.push(['','','']);
    }
    return board;
  }

  printBoard() {
    //print board to console
  }

  placeX(x, y) {
    if (spaceIsEmpty) {
      this.board[y][x] = 'X';
    } else {
      console.log('This space was already taken :(')
    }
  }

  placeO(x,y) {
    if (spaceIsEmpty) {
      this.board[y][x] = 'O';
    } else {
      console.log('This space was already taken :(')
    }
  }

  spaceIsEmpty(x,y) {
    return this.board[y][x] === '';
  }
}

var game = new Board();
console.log(game.board)