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
  
  checkForWin() {
    //Check if X or Y has won
    let wonCheck = false;
    for(let y = 0; y < this.board.length; y++) {
      let count = 0;
      for(let x = 0; x < this.board[y].length; x++) {
        if (this.board[y][x] !== '') {
          count++;
        }
      }
      if (count === 3) {
        wonCheck = true;
      }
    }
    return wonCheck;

    function checkRow(index) {
      //check space values for a match
      
    }

    function checkSpace(index) {

    }
  }

  placeX(x, y) {
    if (spaceIsEmpty) {
      this.board[y][x] = 'X';
    } else {
      console.log('This space was already taken :(')
    }
  checkForWin();
  }

  placeO(x,y) {
    if (spaceIsEmpty) {
      this.board[y][x] = 'O';
    } else {
      console.log('This space was already taken :(')
    }
    checkForWin();
  }

  spaceIsEmpty(x,y) {
    return this.board[y][x] === '';
  }
}

var game = new Board();
console.log(game.board)