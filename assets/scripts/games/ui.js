'use strict';

const app = require('../app');

const newGameSuccess = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const updateGameSuccess = () => {
 console.log('Game successfully updated.');
};

module.exports = {
  newGameSuccess,
  failure,
  updateGameSuccess
};
