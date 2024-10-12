// const grids = document.querySelectorAll('.grid');
// const desk = document.querySelector('.gridContainer');
// const btn = document.getElementById('btn');
// const statusText = document.querySelector('.game-status');
// const  X = "X";
// const O = "O";
// const isGameRunning=false;
// let gameState = ["", "", "", "", "", "", "", "", ""];
// const desktopWinning=[
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [2,4,7],
//     [3,5,8],
//     [0,4,8],
//     [2,4,6]
// ]
// function initializeTheGame(){
//     grids.forEach(gird => grids.addEventListener("click", cellClicked()));
//     btn.addEventListner("click" ,restartGame() );
//     statusText.textContent=player;
//     isGameRunning=true;
// }
// function currentPlayerIdentifier(){
//     const players= ["O","x"];
//     const arrayIndex = Math.floor(Math.random * players.length);
//     const player = players[arrayIndex];
//     return player;
// }
// function changePlayer(){
//     player= (player=="X") ? "O" : "X";
//     statusText.textContent=player;
// }
// function restartGame(){
//     player=player;
//     gameState = ["", "", "", "", "", "", "", "", ""];
//     statusText.textContent=`${palyer} is turn as ....!`;
//     grids.forEach(grid => grid.textContent="");
//     isGameRunning=false;
// }
// function cellClicked(){
//     const gridIndex = this.getAttribute("data-grid-index");
//     if (gameState[gridIndex]!= "" || !isGameRunning){
//         return;
//     }
//     updateCell(this , gridIndex);
//     checkWinner();
// }
// function updateCell(index,grid){
//     gameState[index]=player;
//     grid.textContent=player;
// }
// function checkWinner(){
//     let roundWon=false;
//     for (let i=0;i < desktopWinning.length;i++){
//         const winCondtion= desktopWinning[i];
//         const cellA= gameState[winCondtion[0]];
//         const cellB= gameState[winCondtion[1]];
//         const cellC= gameState[winCondtion[2]];
//         if ( cellA =="" || cellB == "" || cellC =="" ){
//             continue;
//         }
//         if (cellA == cellB && cellB==cellC){
//             winCondtion=true;
//             break;
//         }
//     }
//     if(roundWon){
//         statusText.textContent=`${palyer} won!`;
//         isGameRunning=false;
//     }
//     else if (!desktopWinning.includes("")){
//         statusText.textContent="draw!";
//         isGameRunning=false;
//     }
//     else {
//         changePlayer();
//     }
// }
// initializeTheGame();
const grids = document.querySelectorAll('.grid');
const desk = document.querySelector('.gridContainer'); 
const btn = document.querySelector('.btn'); 
const statusText = document.querySelector('.game-status'); 
// const X = "X";
// const O = "O";
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