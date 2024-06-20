// All available moves from a position
const knightMoveset = [
  [2, 1],
  [1, 2],
  [-1, 2],
  [-2, 1],
  [-2, -1],
  [-1, -2],
  [1, -2],
  [2, -1],
];

// Generate chessboard using map
function generateChessBoard() {
  const chessBoard = new Map();
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      chessBoard.set(`${x},${y}`, []);
    }
  }
  return chessBoard;
}

// Generate all possible moves for all squares
function getMoves(chessBoard) {
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      let moves = chessBoard.get(`${x},${y}`);
      knightMoveset.forEach((move) => {
        let newX = x + move[0];
        let newY = y + move[1];
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
          moves.push([newX, newY]);
        }
      });
      chessBoard.set(`${x},${y}`, moves);
    }
  }
}

// Find shortest path using BFS
function knightMoves(start, end, chessBoard) {
  let queue = [{ position: start, path: [start] }];
  let visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    let { position, path } = queue.shift();

    if (position[0] === end[0] && position[1] === end[1]) {
      return path;
    }
    let moves = chessBoard.get(position.toString());
    moves.forEach((move) => {
      let moveKey = move.toString();
      if (!visited.has(moveKey)) {
        visited.add(moveKey);
        queue.push({ position: move, path: [...path, move] });
      }
    });
  }

  return "Path not found";
}

// Driver code
const chessBoard = generateChessBoard();
getMoves(chessBoard);

const start = [0, 0];
const end = [7, 6];

const path = knightMoves(start, end, chessBoard);
console.log("Shortest path from [0,0] to [7,6]:", path);
