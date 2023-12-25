const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const PORT = 3001;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("Usuário conectado");

  socket.on("chat message", (message) => {
    console.log(message);
    io.emit("chat message", message);
  });
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta:${PORT}`);
});
