'use strict';

const app = require('../app');

const newGameSuccess = (data) => {
  console.log(data.game);
  app.game = data.game;
};

const failure = (error) => {
};

const updateGameSuccess = () => {
};

module.exports = {
  newGameSuccess,
  failure,
  updateGameSuccess
};
