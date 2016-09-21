'use strict';

const handlers = require('./maingame');
const authEvents = require('./auth/events.js');

$(document).ready(function () {
  authEvents.addHandlers();
  handlers.createBoard();
  handlers.addGameHandlers();
});
