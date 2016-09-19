'use strict';

const getFormFields = require('../../lib/get-form-fields');

const api = require('./games/api');
const ui = require('./games/ui');

let gameBoard = ["","","","","","","","",""];
let turns = 0;
let over = false;
let player = 'x';

let gameboardID = document.getElementById("game-board");

const createBoard = function() {
  for (let i = 0; i < gameBoard.length; i++) {
    let newTile = document.createElement('div');
    newTile.className = 'tile';
    newTile.setAttribute('data-id', i);
    gameboardID.appendChild(newTile);
    $(newTile).one('click', onClick);
  }
};

const onClick = function(){
  let tileClicked = $(this).attr('data-id');
  if (turns % 2 === 0) {
    player = 'x';
    this.innerHTML = '<img src = http://i.imgur.com/XvpQ5p5s.png>';
    gameBoard.insert(tileClicked, "X");
    turns++;
    // api.updateGame(tileClicked, player, over);
      // .done(ui.updateGameSuccess)
      // .fail(ui.failure);
    winCondition(gameBoard);
  }
  else {
    player = 'o';
    this.innerHTML = '<img src = http://i.imgur.com/bPWrglqs.png>';
    gameBoard.insert(tileClicked, "O");
    turns++;
    api.updateGame(tileClicked, player, over)
      .done(ui.updateGameSuccess)
      .fail(ui.failure);
    winCondition(gameBoard);
  }
};

Array.prototype.insert = function (index, item) {
  this.splice(index, 1, item);
};


const winCondition = function(gameBoard){
  //across for x
if (((gameBoard[0] === "X") && (gameBoard[1] === "X") && (gameBoard[2] === "X"))||
((gameBoard[3] === "X") && (gameBoard[4] === "X") && (gameBoard[5] === "X")) ||
((gameBoard[6] === "X") && (gameBoard[7] === "X") && (gameBoard[8] === "X")) ||
//down for x
((gameBoard[0] === "X") && (gameBoard[3] === "X") && (gameBoard[6] === "X")) ||
((gameBoard[1] === "X") && (gameBoard[4] === "X") && (gameBoard[7] === "X")) ||
((gameBoard[2] === "X") && (gameBoard[5] === "X") && (gameBoard[8] === "X")) ||
//diag for x
((gameBoard[0] === "X") && (gameBoard[4] === "X") && (gameBoard[8] === "X")) ||
((gameBoard[2] === "X") && (gameBoard[4] === "X") && (gameBoard[6] === "X"))) {
  document.getElementById('player-wins').innerHTML = "Player X Wins!";
  $('.tile').off('click');
  over = true;
  return true;
}
else if
(((gameBoard[0] === "O") && (gameBoard[1] === "O") && (gameBoard[2] === "O"))||
((gameBoard[3] === "O") && (gameBoard[4] === "O") && (gameBoard[5] === "O")) ||
((gameBoard[6] === "O") && (gameBoard[7] === "O") && (gameBoard[8] === "O")) ||
//down for x
((gameBoard[0] === "O") && (gameBoard[3] === "O") && (gameBoard[6] === "O")) ||
((gameBoard[1] === "O") && (gameBoard[4] === "O") && (gameBoard[7] === "O")) ||
((gameBoard[2] === "O") && (gameBoard[5] === "O") && (gameBoard[8] === "O")) ||
//diag for x
((gameBoard[0] === "O") && (gameBoard[4] === "O") && (gameBoard[8] === "O")) ||
((gameBoard[2] === "O") && (gameBoard[4] === "O") && (gameBoard[6] === "O"))) {
  document.getElementById('player-wins').innerHTML = "Player O Wins!";
  $('.tile').off('click');
  over = true;
  return true;
}
else if (gameBoard[0] !== "" && gameBoard[1] !== "" && gameBoard[2] !== "" &&
gameBoard[3] !== "" && gameBoard[4] !== "" && gameBoard[5] !== "" &&
gameBoard[6] !== "" && gameBoard[7] !== "" && gameBoard[8] !== "") {
  document.getElementById('player-wins').innerHTML = "Nobody Wins!";
  $('.tile').off('click');
  over = true;
  return true;
}
else {
  over = false;
  return false;
}
};

const clearBoard = function() {
  $('.tile').empty();
  $('#game-board').empty();
  $('#player-wins').empty();
  gameBoard.splice(0,9,"","","","","","","","","");
  turns = 0;
  createBoard(event);
};

//this will happen only after sign in
const onNewGame = function(event){
  event.preventDefault();
  clearBoard();
  let data = {};
    api.newGame(data)
    .done(ui.newGameSuccess)
    .fail(ui.failure);
};

// const onUpdateGame = function(index, value, over){
//   api.updateGame(index, value, over)
//   .done(ui.updateGameSuccess)
//   .fail(ui.failure);
// };

const addGameHandlers = () => {
  $('#clear-board').on('click', clearBoard);
  $('#new-game').on('click', onNewGame);
};


module.exports = {
  createBoard,
  onClick,
  getFormFields,
  addGameHandlers,
  winCondition,
  // onUpdateGame,
};
