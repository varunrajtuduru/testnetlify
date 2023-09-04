const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const serverless = require('serverless-http')

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/get', (req, res)=>{
  console.log("hello world")
  res.status(200).send('hello world')
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
  
  module.exports.handler = serverless(app)