'use strict';

const getFormFields = require('../../lib/get-form-fields');

let gameBoard = [" "," "," "," "," "," "," "," "," "];
let turn = 0;
let playerX = 1;
let currentTile;

let gameboardID = document.getElementById("game-board");


const createBoard = function() {
  for (let i = 0; i < gameBoard.length; i++) {
    let newTileDiv = document.createElement('div');
    newTileDiv.className = 'tile';
    newTileDiv.setAttribute('data-id', i);
    gameboardID.appendChild(newTileDiv);
    newTileDiv.addEventListener('click', onClick);
  }
};

const onClick = function(event){
  event.preventDefault();
  let tileClicked = $(this).attr('data-id');
  if (playerX === 1) {
    this.innerHTML = "X";
    gameBoard.insert(tileClicked, "X");
    playerX = 0;
  }
  else {
    this.innerHTML = "O";
    gameBoard.insert(tileClicked, "O");
    playerX = 1;
  }
};

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

module.exports = {
  createBoard,
  onClick,
};
