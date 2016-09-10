'use strict';

const getFormFields = require('../../lib/get-form-fields');

let gameBoard = ["","","","","","","","",""];
let player = 0;
let turns = 0;

let gameboardID = document.getElementById("game-board");

const createBoard = function() {
  for (let i = 0; i < gameBoard.length; i++) {
    let newTileDiv = document.createElement('div');
    newTileDiv.className = 'tile';
    newTileDiv.setAttribute('data-id', i);
    gameboardID.appendChild(newTileDiv);
    $(newTileDiv).one('click', onClick);
  }
};

const onClick = function(event){
  let tileClicked = $(this).attr('data-id');
  if (player === 1) {
    this.innerHTML = "X";
    gameBoard.insert(tileClicked, "X");
    player = 0;
  }
  else if (player === 0) {
    this.innerHTML = "O";
    gameBoard.insert(tileClicked, "O");
    player = 1;
  }
};

Array.prototype.insert = function (index, item) {
  this.splice(index, 1, item);
};

Array.prototype.clear = function(index, item) {
  this.splice(index, 0, item);
}


const winCondition = function(gameBoard){
  //across
  if (((gameBoard[0] === gameboard[2]) && (gameBoard[1] === gameBoard[2]))||
  ((gameBoard[3] === gameboard[5]) && (gameBoard[3] === gameBoard[4])) ||
  ((gameBoard[6] === gameboard[8]) && (gameBoard[6] === gameBoard[7]))) {
  this.wins=true;
  }
//down
  else if (((gameBoard[0] === gameboard[6]) && (gameBoard[0] === gameBoard[3])) ||
  ((gameBoard[1] === gameboard[7]) && (gameBoard[1] === gameBoard[4])) ||
  ((gameBoard[2] === gameboard[5]) && (gameBoard[2] === gameBoard[8]))) {
  this.wins=true;
  }
  //diagnal
  else if (((gameBoard[0] === gameboard[8]) && (gameBoard[0] === gameBoard[4])) ||
  ((gameBoard[2] === gameboard[6]) && (gameBoard[2] === gameBoard[4]))) {
  this.wins=true;
  }
  else if (gameBoard.length = 9) {
  return false;
  }
}


const endGame = function() {
  document.getElementById("tile").innerHTML = "";
  for (let i = 0; i < gameBoard.length; i++){
  gameBoard.clear(i, "");
  }
};

module.exports = {
  createBoard,
  onClick,
  getFormFields,
  endGame
  // winCondition,
  // clearBoard,
};
