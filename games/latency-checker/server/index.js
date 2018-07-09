import _ from 'lodash';
import socket from 'socket.io';

class Server {
  constructor(httpServer) {
    this.httpServer = httpServer;
    this.io = socket(httpServer);
    this.clients = [];
  }

  start() {
    this.io.on('connection', this.onConnection.bind(this));
  }

  onConnection(client) {
    console.log('a user connected');
    this.clients.push(client);
    client.emit('onconnected', { id: 1 });
    client.on('disconnect', function() {
      console.log('a user disconnected');
      _.pull(this.clients, client);
    });
  }
}

export function server(httpServer) {
  var server = new Server(httpServer);
  server.start();
  return server;
}
