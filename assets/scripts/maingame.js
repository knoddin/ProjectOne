'use strict';

let rowOne = [0,1,2,3,4,5,6,7,8];

let newBoard = [];
let playerX = 1;

let gameboardID = document.getElementById("game-board");

const createBoard = function() {
  for (let i = 0; i < boardArray.length; i++) {
    let newTileDiv = document.createElement('div');
    newTileDiv.className = 'tile';
    newTileDiv[i] = boardArray[i];
    newTileDiv.addEventListener('click', isXO);
    gameboardID.appendChild(newTileDiv);
    newBoard.push(boardArray[i]);
    console.log(newBoard);
  }
};

const isXO = function(){
  event.preventDefault();
  if (playerX === 1) {
    this.innerHTML = "X";
    playerX = 0;
  }
  else {
    this.innerHTML = "O";
    playerX = 1;
  }
};

module.exports = {
  createBoard,
  isXO,
};
