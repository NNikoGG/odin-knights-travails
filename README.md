# Knight's Travails

This program simulates a knight's legal moves on a standard 8x8 chessboard and determines the shortest path from a specified starting square to an ending square using the BFS algorithm. This problem is a classic example of finding the shortest path in an unweighted graph, where each node represents a square on the chessboard, and each edge represents a legal knight move.

## Features

- Generates all possible moves for a knight from any position on an 8x8 chessboard.
- Uses BFS to determine the shortest path from one point to another.
- Outputs the sequence of moves a knight needs to make to get from the starting point to the destination.

## Usage

To use this program:

1. Clone this repository to your local machine.
2. Open the project in your favorite JavaScript runtime environment or editor that can run JavaScript (like Node.js).
3. Run the script using a JavaScript interpreter, for example:
   ```bash
   node knights_travails.js
   ```

## Example

````bash
// Initialize the chessboard
const chessBoard = generateChessBoard();
getMoves(chessBoard);

// Define start and end positions
const start = [0, 0]; // Starting position of the knight
const end = [7, 6];   // Destination position of the knight

// Find the shortest path and output it
const path = knightMoves(start, end, chessBoard);
console.log("Shortest path from [0,0] to [7,6]:", path);
```bash
````

## How It Works

- **Chessboard Initialization:** The chessboard is represented as a map where each key is a square and each value is an array of possible moves from that square.
- **Move Generation:** For each square on the chessboard, all legal moves of a knight are calculated and stored.
- **BFS Implementation:** BFS is used to explore the shortest path from the starting square to the destination, accounting for all possible moves and paths.
