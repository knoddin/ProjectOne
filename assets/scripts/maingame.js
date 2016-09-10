'use strict';

const getFormFields = require('../../lib/get-form-fields');

let gameBoard = [];

let player = 1;

let turns=0;

let gameboardID = document.getElementById("game-board");

const createBoard = function() {
  for (let i = 0; i < 9; i++) {
    let newTileDiv = document.createElement('div');
    newTileDiv.className = 'tile';
    newTileDiv.setAttribute('data-id', i);
    gameboardID.appendChild(newTileDiv);
    $(newTileDiv).one('click', onClick);
  }
};

const onClick = function(event){
  event.preventDefault();
  let tileClicked = $(this).attr('data-id');
  if (player === 1) {
    this.innerHTML = "X";
    gameBoard.insert(tileClicked, "X");
    turns += 1;
    player = 0;
  }
  else if (player === 0) {
    this.innerHTML = "O";
    gameBoard.insert(tileClicked, "O");
    turns += 1;
    player = 1;
  }
};

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};


// function winCondition(){
//   //across
//   if (((gameBoard[0] === gameboard[2]) && (gameBoard[1] === gameBoard[2]))||
//   ((gameBoard[3] === gameboard[5]) && (gameBoard[3] === gameBoard[4])) ||
//   ((gameBoard[6] === gameboard[8]) && (gameBoard[6] === gameBoard[7]))) {
//   this.wins=true;
//   }
// //down
//   else if (((gameBoard[0] === gameboard[6]) && (gameBoard[0] === gameBoard[3])) ||
//   ((gameBoard[1] === gameboard[7]) && (gameBoard[1] === gameBoard[4])) ||
//   ((gameBoard[2] === gameboard[5]) && (gameBoard[2] === gameBoard[8]))) {
//   this.wins=true;
//   }
//   //diagnal
//   else if (((gameBoard[0] === gameboard[8]) && (gameBoard[0] === gameBoard[4])) ||
//   ((gameBoard[2] === gameboard[6]) && (gameBoard[2] === gameBoard[4]))) {
//   this.wins=true;
//   }
//   else if (gameBoard.length = 9) {
//   return false;
//   }
// }
//
// // const clearBoard = function(){
// //   $('#tile').empty();
// //   gameBoard = [];
// // };

module.exports = {
  createBoard,
  onClick,
  // winCondition,
  // clearBoard,
};
