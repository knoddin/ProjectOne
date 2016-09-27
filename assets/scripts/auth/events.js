'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');


const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
    .done(ui.success)
    .fail(ui.failure);
    $('#signUp').modal('hide');
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.signInFailure);
    $('#game-board').show("fast");
    $('#new-game').show("fast");
    $('.game-data').show("fast");
    $('.change-password').show("fast");
    $('.ticTacToe').hide("fast");
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.failure);
    $('#changePassword').modal('hide');
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
    $('#signOut').modal('hide');
    $('#game-board').hide("fast");
    $('#new-game').hide("fast");
    $('.ticTacToe').show("fast");
    $('.game-data').hide("fast");
    $('#player-wins').hide("fast");
};


const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
};

module.exports = {
  addHandlers,
  onSignIn,
  onChangePassword,
  onSignUp,
  onSignOut,
};
