'use strict';

const app = require('../app');

const success = (data) => {
};

const failure = (error) => {
};

const signInSuccess = (data) => {
  app.user = data.user;
};

const onUpdateSuccess = (data) => {
  app.game = data.game;
};

const signOutSuccess = () => {
  app.user = null;
};

const changePasswordSuccess = () => {
};

module.exports = {
  failure,
  success,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  onUpdateSuccess
};
