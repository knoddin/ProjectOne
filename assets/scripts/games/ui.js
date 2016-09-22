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
  $('#number-games').text(allGames);
  console.log(allGames);
};

module.exports = {
  newGameSuccess,
  failure,
  success,
  displaySuccess,
};
