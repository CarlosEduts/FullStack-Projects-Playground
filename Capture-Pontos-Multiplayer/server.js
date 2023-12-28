const { match } = require("assert");
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const PORT = 3001;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const game = {
  food: { x: 0, y: 0, color:''},
  players: {},
};

const randomNum = (value) => {
  return Math.round(Math.random() * value);
};

const randomColor = () => {
  return `rgba(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)}, 0.6)`;
};

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("Usuário conectado");

  socket.on("gameInfo", (info) => {
    console.log('Informações de jogo:', info);

    game.players[info] = (game.players[info] || 0) + 1;

    game.food = {x: `${randomNum(300)}px`, y: `${randomNum(300)}px`, color: randomColor()}
    io.emit("gameInfo", game);
  });
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta: http://localhost:${PORT}`);
});
