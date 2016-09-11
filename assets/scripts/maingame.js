'use strict';

const getFormFields = require('../../lib/get-form-fields');

let gameBoard = ["","","","","","","","",""];
let player = 1;
let turns = 0;
let win = false;


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
    $('#tile').on('click', winCondition(gameBoard));
    player = 0;
    turns++;
  }
  else if (player === 0) {
    this.innerHTML = "O";
    gameBoard.insert(tileClicked, "O");
    winCondition(gameBoard);
    player = 1;
    turns++;
  }
};

Array.prototype.insert = function (index, item) {
  this.splice(index, 1, item);
};


const winCondition = function(input){
  //across for x
  console.log(gameBoard);
  if (((input[0] === "X") && (input[1] === "X") && (input[2] === "X"))||
((input[3] === "X") && (input[4] === "X") && (input[5] === "X")) ||
((input[6] === "X") && (input[7] === "X") && (input[8] === "X")) ||
//down for x
((input[0] === "X") && (input[3] === "X") && (input[6] === "X")) ||
((input[1] === "X") && (input[4] === "X") && (input[7] === "X")) ||
((input[2] === "X") && (input[5] === "X") && (input[8] === "X")) ||
//diag for x
((input[0] === "X") && (input[4] === "X") && (input[8] === "X")) ||
((input[2] === "X") && (input[4] === "X") && (input[6] === "X"))) {
  console.log("X wins");
  win = true;
}
else if
(((input[0] === "O") && (input[1] === "O") && (input[2] === "O"))||
((input[3] === "O") && (input[4] === "O") && (input[5] === "O")) ||
((input[6] === "O") && (input[7] === "O") && (input[8] === "O")) ||
//down for x
((input[0] === "O") && (input[3] === "O") && (input[6] === "O")) ||
((input[1] === "O") && (input[4] === "O") && (input[7] === "O")) ||
((input[2] === "O") && (input[5] === "O") && (input[8] === "O")) ||
//diag for x
((input[0] === "O") && (input[4] === "O") && (input[8] === "O")) ||
((input[2] === "O") && (input[4] === "O") && (input[6] === "O"))) {
  console.log("O wins");
  console.log(gameBoard);
  win = true;
}
else if (input[0] !== "" && input[1] !== "" && input[2] !== "" &&
input[3] !== "" && input[4] !== "" && input[5] !== "" &&
input[6] !== "" && input[7] !== "" && input[8] !== "") {
  console.log("draw");
  win = false;
}
else {
  win = false;
}
};


const onNewGame = function() {
  $('.tile').empty();
  gameBoard.splice(0,9,"","","","","","","","","");
  turns = 0;
  player = 1;
  console.log(gameBoard);
};

// const endGame = function() {
//   if (win = true){
// saveGame();
//   }
//   else if ((win = false) && (gameBoard.length = 9)) {
//
//   }
// }

const addGameHandlers = () => {
  $('#new-game').on('click', onNewGame);
};

module.exports = {
  createBoard,
  onClick,
  getFormFields,
  addGameHandlers,
  winCondition,
  // endGame
  // winCondition,
  // clearBoard,
};
