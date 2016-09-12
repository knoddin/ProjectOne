'use strict';

const handlers = require('./maingame');
const authEvents = require('./auth/events.js');

$(document).ready(function () {
  authEvents.addHandlers();
});

$(document).ready(function () {
  handlers.createBoard();
  handlers.onClick(event);
  handlers.addGameHandlers();
  handlers.winCondition();
});
