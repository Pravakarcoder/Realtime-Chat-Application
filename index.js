const http = require("http");
const express = require("express");
require("dotenv").config();

const app = express();
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

// socket.io
io.on("connection", (socket) => {
  socket.on("User-Message", (message) => {
    io.emit("message", message);
  });
});

const port = process.env.PORT || 7000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

server.listen(port, () => {
  console.log("Server is  running...", port);
});
