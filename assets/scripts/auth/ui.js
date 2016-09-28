'use strict';

const app = require('../app');

const success = (data) => {
  $('#signInFail').html('Sign In!');
  $('#signUp').modal('hide');
};

const failure = (error) => {
};

const signInFailure = () => {
  $('#signInFail').html('Oops! Check your credentials or sign up!');
  $('#signInLabel').text(' ');
  $('#game-board').hide("fast");
  $('#new-game').hide("fast");
  $('.ticTacToe').show("fast");
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('#signIn').modal('hide');
  $('#signOutBut').show("fast");
  $('#changePasswordBut').show("fast");
  $('#new-game').show("fast");
  $('.game-data').show("fast");
  $('.change-password').show("fast");
  $('.ticTacToe').hide("fast");
  $('#player-wins').show("fast");
};

const onUpdateSuccess = (data) => {
  app.game = data.game;
};

const signOutSuccess = () => {
  app.user = null;
  $('#signOutBut').hide("fast");
  $('#changePasswordBut').hide("fast");
  $('#signOut').modal('hide');
  $('#game-board').hide("fast");
  $('#new-game').hide("fast");
  $('.ticTacToe').show("fast");
  $('.game-data').hide("fast");
  $('#player-wins').hide("fast");
  $('#player-wins').text(' ');
};

const changePasswordSuccess = () => {
  $('#changePassword').modal('hide');
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
