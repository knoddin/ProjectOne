'use strict';

const app = require('../app');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
};

const signOutSuccess = () => {
  app.user = null;
  console.log("You have successfully signed out.")
};

const changePasswordSuccess = () => {
 console.log('Password successfully changed.');
};

module.exports = {
  failure,
  success,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess
};
