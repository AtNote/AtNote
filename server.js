'use strict';

const io = require('socket.io')(process.env.PORT);
require('dotenv').config();

io.on('connection', (socket) => {
  socket.emit('Welcome to @Note')
  socket.on('@new', handleNewNote)
  socket.on('@display', handleDisplay)
});

function handleNewNote() {
  
}

function handleDisplay() {
  
}