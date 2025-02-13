const express = require("express");
const app = express();
const http = require("http");
const socketio = require("socketio");
app.get("/", function (req, res) {
  res.send("hey");
});
const server = http.createServer(app);
app.listen(3000);
