'use strict';

const app = require('../app');

const newGame = (data) =>{
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data,
  });
};

const updateGame = (tileClicked, player, over) => {
  return $.ajax({
    url: app.host + '/games/' + app.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data:
    {
      "game": {
        "cell": {
          "index": tileClicked,
          "value": player
        },
        "over": over
      }
  }}
);};

const displayGames = function(){
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};


module.exports = {
  newGame,
  updateGame,
  displayGames
};
