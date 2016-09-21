'use strict';

const getFormFields = require('../../lib/get-form-fields');

const api = require('./games/api');
const ui = require('./games/ui');

let gameBoard = ["","","","","","","","",""];
let turns = 0;
let over = false;
let player = "x";


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
      player = "x";
    }
    else {
      player = "o";
    }
    $(this).html(player);
    gameBoard.insert(tileClicked, player);
    turns++;
    api.updateGame(tileClicked, player, over);
    winCondition(gameBoard);
};

Array.prototype.insert = function (index, item) {
  this.splice(index, 1, item);
};


const winCondition = function(gameBoard){
  //across for x
if (((gameBoard[0] === "x") && (gameBoard[1] === "x") && (gameBoard[2] === "x"))||
((gameBoard[3] === "x") && (gameBoard[4] === "x") && (gameBoard[5] === "x")) ||
((gameBoard[6] === "x") && (gameBoard[7] === "x") && (gameBoard[8] === "x")) ||
//down for x
((gameBoard[0] === "x") && (gameBoard[3] === "x") && (gameBoard[6] === "x")) ||
((gameBoard[1] === "x") && (gameBoard[4] === "x") && (gameBoard[7] === "x")) ||
((gameBoard[2] === "x") && (gameBoard[5] === "x") && (gameBoard[8] === "x")) ||
//diag for x
((gameBoard[0] === "x") && (gameBoard[4] === "x") && (gameBoard[8] === "x")) ||
((gameBoard[2] === "x") && (gameBoard[4] === "x") && (gameBoard[6] === "x"))) {
  document.getElementById('player-wins').innerHTML = "Player X Wins!";
  $('.tile').off('click');
  over = true;
  return true;
}
else if
(((gameBoard[0] === "o") && (gameBoard[1] === "o") && (gameBoard[2] === "o"))||
((gameBoard[3] === "o") && (gameBoard[4] === "o") && (gameBoard[5] === "o")) ||
((gameBoard[6] === "o") && (gameBoard[7] === "o") && (gameBoard[8] === "o")) ||
//down for x
((gameBoard[0] === "o") && (gameBoard[3] === "o") && (gameBoard[6] === "o")) ||
((gameBoard[1] === "o") && (gameBoard[4] === "o") && (gameBoard[7] === "o")) ||
((gameBoard[2] === "o") && (gameBoard[5] === "o") && (gameBoard[8] === "o")) ||
//diag for x
((gameBoard[0] === "o") && (gameBoard[4] === "o") && (gameBoard[8] === "o")) ||
((gameBoard[2] === "o") && (gameBoard[4] === "o") && (gameBoard[6] === "o"))) {
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
    api.displayGames(data.id)
    .done(ui.displaySuccess)
    .fail(ui.failure);
};


const addGameHandlers = () => {
  $('#new-game').on('click', onNewGame);
};


module.exports = {
  createBoard,
  onClick,
  getFormFields,
  addGameHandlers,
  winCondition,
};
