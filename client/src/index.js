//! this is the client index.js
import io from 'socket.io-client';

const API_URL = 'http://localhost:5000';
const socket = io.connect(API_URL);
socket.on('connect', (data) => {
  socket.on('message-client-connected', function(data) {
    console.log(data);
  });
});
console.log('connected!');
