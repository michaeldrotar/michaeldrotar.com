import socket from 'socket.io-client';

import Game from '../../../lib/brick-engine/game.js';

export function client(url, canvas) {
  var io = socket(url);
  var game = new Game({ canvas: canvas });
  var oldStates = [];
  io.on('onconnected', function(data) {
    console.log(`handshake received: ${data.id}`);
    game.start();
  });
  io.on('state', function(state) {
    var oldState = game.scene.state;
    var newState = state;
    var diff = {};
    var hasDiff = false;
    function calcDiff(baseKey, oldState, newState) {
      var hasDiff = false;
      var keys = Object.keys(oldState);
      for (var i = 0, l = keys.length; i < l; i++) {
        var key = keys[i];
        var oldValue = oldState[key];
        var newValue = newState[key];
        if (typeof oldValue === 'object') {
          hasDiff =
            calcDiff(
              baseKey + (baseKey.length > 0 ? '_' : '') + key,
              oldValue,
              newValue
            ) || hasDiff;
        } else if (oldValue !== newValue) {
          diff[baseKey + (baseKey.length > 0 ? '_' : '') + key] = {
            oldValue,
            newValue
          };
          hasDiff = true;
        }
      }
      return hasDiff;
    }
    hasDiff = calcDiff('', oldState, newState);

    if (hasDiff) {
      oldStates.unshift(diff);
      while (oldStates.length > 5) {
        oldStates.pop();
      }
    }
    game.scene.state = state;
  });
  return { io, game, oldStates };
}
