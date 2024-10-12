const grids = document.querySelectorAll('.grid');
const desk = document.querySelector('.gridContainer'); 
const btn = document.querySelector('.btn'); 
const statusText = document.querySelector('.game-status'); 
const PLAYER_X = "X";
const PLAYER_O = "O";
let player;
let isGameRunning = false;
let gameState = ["", "", "", "", "", "", "", "", ""];
const desktopWinning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function initializeTheGame() {
    grids.forEach(grid => grid.addEventListener("click", cellClicked)); 
    btn.addEventListener("click", restartGame);
    player = currentPlayerIdentifier();
    statusText.textContent = `${player}'s turn`;
    isGameRunning = true;
}

function currentPlayerIdentifier() {
    const players = ["X", "O"];
    const arrayIndex = Math.floor(Math.random() * players.length); 
    return players[arrayIndex];
}

function changePlayer() {
    player = (player === PLAYER_X) ? PLAYER_O : PLAYER_X; 
    statusText.textContent = `${player}'s turn`;
}

function restartGame() {
    player = currentPlayerIdentifier(); 
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${player}'s turn`;
    grids.forEach(grid => grid.textContent = "");
    isGameRunning = true;
}

function cellClicked() {
    const gridIndex = this.getAttribute("data-grid-index");
    if (gameState[gridIndex] !== "" || !isGameRunning) {
        return;
    }
    updateCell(gridIndex, this);
    checkWinner();
}

function updateCell(index, grid) {
    gameState[index] = player;
    grid.textContent = player;
}

function checkWinner() {
    let roundWon = false;
    for (let i = 0; i < desktopWinning.length; i++) {
        const winCondition = desktopWinning[i];
        const cellA = gameState[winCondition[0]];
        const cellB = gameState[winCondition[1]];
        const cellC = gameState[winCondition[2]];
        if (cellA === "" || cellB === "" || cellC === "") {
            continue;
        }
        if (cellA === cellB && cellB === cellC) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        statusText.textContent = `${player} won!`;
        isGameRunning = false;
    } else if (!gameState.includes("")) {
        statusText.textContent = "Draw!";
        isGameRunning = false;
    } else {
        changePlayer();
    }
}
initializeTheGame();