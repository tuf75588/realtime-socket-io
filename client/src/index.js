//! this is the client index.js
import io from 'socket.io-client';
const info = document.querySelector('.info');
const API_URL = 'http://localhost:5000';
const socket = io.connect(API_URL);
socket.on('connect', (data) => {
  console.log('client connected!');
});
socket.on('message-client-connected', function(data) {
  info.textContent = data;
});
socket.on('mousemove', (event) => {
  if (socket.id !== event.id) {
    console.log(event);
  }
});
document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  socket.emit('mousemove', {
    x,
    y
  });
});
