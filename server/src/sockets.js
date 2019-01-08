const socketIO = require('socket.io');

function init(server) {
  const io = socketIO(server);
  console.log('sockets server is running!');
  io.on('connection', (socket) => {
    io.emit('message-client-connected', `Client ID with ${socket.id} was connected`);
  });
}

module.exports = {
  init
};
