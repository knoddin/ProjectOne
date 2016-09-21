'use strict';

const app = require('../app');

const newGameSuccess = (data) => {
  app.game = data.game;
};

const failure = (error) => {
};

const success = (data) => {
};

const displaySuccess = (data) => {
  let allGames = data.games.length;
  console.log(allGames);
};

const updateGameSuccess = () => {
};

module.exports = {
  newGameSuccess,
  failure,
  success,
  displaySuccess,
  updateGameSuccess
};
