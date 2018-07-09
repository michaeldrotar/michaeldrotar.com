import socket from 'socket.io-client';

export function client(url) {
  var io = socket(url);
  io.on('onconnected', function(data) {
    console.log(`handshake received: ${data.id}`);
  });
  return io;
}
