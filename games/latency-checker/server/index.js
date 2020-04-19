import _ from 'lodash';
import socket from 'socket.io';

import Game from '../../../lib/brick-engine/game.js';

class Server {
  constructor(httpServer) {
    this.httpServer = httpServer;
    this.io = socket(httpServer);
    this.clients = [];
    this.game = new Game();
    this.syncTimer = null;
  }

  start() {
    console.log('listening...');
    this.io.on('connection', this.onConnection.bind(this));
  }

  sync() {
    if (this.game.scene) {
      var state = _.merge({}, this.game.scene.state);
      this.io.emit('state', state);
    }
  }

  onConnection(client) {
    console.log('a user connected');
    this.clients.push(client);
    client.emit('onconnected', { id: 1 });
    client.emit('state', this.game.scene.state);
    client.on(
      'disconnect',
      function () {
        console.log('a user disconnected');
        _.pull(this.clients, client);
        if (this.clients.length === 0) {
          this.game.stop();
          clearInterval(this.syncTimer);
          this.syncTimer = null;
        }
      }.bind(this)
    );
    if (this.clients.length === 1) {
      this.game.start();
      this.syncTimer = setInterval(this.sync.bind(this), 1000);
    }
  }
}

export function server(httpServer) {
  var server = new Server(httpServer);
  server.start();
  return server;
}
