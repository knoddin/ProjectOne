'use strict';

const app = require('../app');

const success = (data) => {
};

const failure = (error) => {
};

const signInFailure = () => {
  $('#signInFail').html('Oops! You need to sign up first!');
  $('#signInLabel').text(' ');
  $('#game-board').hide("fast");
  $('#new-game').hide("fast");
  $('.ticTacToe').show("fast");
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('#signIn').modal('hide');
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
  onUpdateSuccess,
  signInFailure
};
