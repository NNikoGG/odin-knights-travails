const knightMoves = [
  [2, 1],
  [1, 2],
  [-1, 2],
  [-2, 1],
  [-2, -1],
  [-1, -2],
  [1, -2],
  [2, -1],
];

function generateChessBoard() {
  const chessBoard = new Map();
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      chessBoard.set(`${x},${y}`, []);
    }
  }
  return chessBoard;
}

function getMoves(chessBoard) {
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      let moves = chessBoard.get(`${x},${y}`);
      knightMoves.forEach((move) => {
        let newX = x + move[0];
        let newY = y + move[1];
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
          moves.push([newX, newY]);
        }
      });
      chessBoard.set(`${x},${y}`, moves);
    }
  }
  console.log("Moves from (0,0):", chessBoard.get("0,0"));
  console.log("Moves from (4,4):", chessBoard.get("4,4"));
}
const chessBoard = generateChessBoard();
getMoves(chessBoard);
