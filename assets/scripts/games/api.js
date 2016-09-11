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

const updateGame = (i,v,g) => {
  return $.ajax({
    url: app.host + '/games/' + app.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      "game": {
        "cell": {
          "index": i,
          "value": v
    },
    "over": g
    }
}
});
};


module.exports = {
  newGame,
  updateGame
};
