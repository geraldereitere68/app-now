/* complex_code.js */

// This code demonstrates a sophisticated implementation of a tic-tac-toe game in JavaScript.

// Create a game board
const board = document.getElementById('board');
const cells = Array.from(document.getElementsByClassName('cell'));
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let playerTurn = 0;
let gameOver = false;

// Function to handle cell click event
const handleCellClick = (e) => {
  if (gameOver) return;
  
  const cell = e.target;
  const currentPlayer = playerTurn % 2 === 0 ? 'X' : 'O';
  
  if (cell.innerText !== '') return;
  
  cell.innerText = currentPlayer;
  cell.classList.add(currentPlayer);
  
  if (checkWin(currentPlayer)) {
    endGame(currentPlayer + ' wins!');
  } else if (checkDraw()) {
    endGame('Draw!');
  } else {
    playerTurn++;
  }
};

// Function to check if a player has won
const checkWin = (player) => {
  return winningCombos.some((combo) => {
    return combo.every((position) => {
      return cells[position].classList.contains(player);
    });
  });
};

// Function to check if it's a draw
const checkDraw = () => {
  return cells.every((cell) => {
    return cell.innerText !== '';
  });
};

// Function to end the game
const endGame = (message) => {
  gameOver = true;
  alert(message);
};

// Add event listeners to cells
cells.forEach((cell) => {
  cell.addEventListener('click', handleCellClick);
});

// Reset the game
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
  cells.forEach((cell) => {
    cell.innerText = '';
    cell.classList.remove('X', 'O');
  });
  
  playerTurn = 0;
  gameOver = false;
});