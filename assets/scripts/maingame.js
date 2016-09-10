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

const onClick = function(){
  let tileClicked = $(this).attr('data-id');
  if (player === 1) {
    this.innerHTML = "X";
    gameBoard.insert(tileClicked, "X");
    player = 0;
    turns += 1;
  }
  else if (player === 0) {
    this.innerHTML = "O";
    gameBoard.insert(tileClicked, "O");
    player = 1;
    turns += 1;
  }
};

Array.prototype.insert = function (index, item) {
  this.splice(index, 1, item);
};

Array.prototype.clear = function(index, item) {
  this.splice(index, 0, item);
};


const winCondition = function(input){
  //across
  if (((input[0] === input[2]) && (input[1] === input[2]))||
  ((input[3] === input[5]) && (input[3] === input[4])) ||
  ((input[6] === input[8]) && (input[6] === input[7]))) {
  return true;
  }
//down
  else if (((input[0] === input[6]) && (input[0] === input[3])) ||
  ((input[1] === input[7]) && (input[1] === input[4])) ||
  ((input[2] === input[5]) && (input[2] === input[8]))) {
  return true;
  }
  //diagnal
  else if (((input[0] === input[8]) && (input[0] === input[4])) ||
  ((input[2] === input[6]) && (input[2] === input[4]))) {
  return true;
  }
  else if (gameBoard.length = 9) {
  return false;
  }
}

//
// const endGame = function() {
//   document.getElementsByClassName("tile").innerHTML = " ";
//   }
// };

module.exports = {
  createBoard,
  onClick,
  getFormFields,
  // endGame
  // winCondition,
  // clearBoard,
};
