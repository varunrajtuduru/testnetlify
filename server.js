const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('', (req, res)=>{
  console.log("hello world")
  res.send('hello world')
})

io.on('connection', (socket) => {
    console.log('connected');
  
    socket.on('message', (data) => {
      console.log('Received message:', data);
    });
  
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
  