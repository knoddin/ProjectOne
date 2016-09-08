'use strict';

let boardArray = [0,1,2,3,4,5,6,7,8];

let newBoard = [];

let gameboardID = document.getElementById("game-board");

const createBoard = function() {
  for (let i = 0; i < boardArray.length; i++) {
    let newTileDiv = document.createElement('div');
    newTileDiv.className = 'tile';
    newTileDiv[i] = boardArray[i];
    // newTileDiv.addEventListener('click', isXO);
    gameboardID.appendChild(newTileDiv);
    console.log("I am in createBoard");
  }
};

// const isXO = function(){
//   let playerX = 1;
//   if (playerX === 1) {
//     document.getElementsByClassName('tile').innerHTML = "X";
//     newBoard.push(this.boardArray[i]);
//     console.log(newBoard);
//   }
//   else {
//     this.innerHTML = "O";
//   }
  // if (newBoard.length === 3) {
  //   isWin(newBoard);
  //   newBoard = [];
  // }


// let displayLetter = function(box){
//   event.preventDefault();
//
//   let playerX = 1;
//   let boardArrayX=[];
//   let boardArrayO=[];
//
//   if (playerX === 1) {
//     document.getElementById(box).innerHTML = "X";
//     boardArrayX.push(box);
//     playerX = 0;
//   }
//   else {
//     document.getElementById(box).innerHTML = "O";
//     boardArrayO.push(box);
//     playerX = 1;
//   }
// };
//
// const addHandlers = () => {
//   $('#1').on('click', displayLetter);
// };
//
// $('.cell').on('click', function(){
//   //
// });
//
// module.exports = {
//   displayLetter,
//   addHandlers
// };
//
// //winning combos

//
module.exports = {
  createBoard,
};
