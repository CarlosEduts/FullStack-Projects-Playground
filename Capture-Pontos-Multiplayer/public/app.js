const nickButton = document.querySelector(".nickButton");
const nickInput = document.querySelector(".nickInput");
const nickName = document.querySelector(".nickName");
const container = document.querySelector(".container");
const score = document.querySelector(".score");
const point = document.querySelector(".point");
const socket = io();
let playerName;

const randomNum = () => {
  return Math.floor(Math.random() * 1000);
};

nickButton.addEventListener("click", () => {
  playerName = `${nickInput.value}${randomNum()}`;
  nickName.style.display = "none";
  container.style.display = "block";
});

point.addEventListener("click", function () {
  socket.emit("gameInfo", playerName);
});

socket.on("gameInfo", (info) => {
  point.style.left = info.food.x;
  point.style.top = info.food.y;
  point.style.backgroundColor = info.food.color;

  let playersScore = info.players;

  const sortedScore = Object.keys(playersScore).sort((a, b) => {
    return playersScore[b] - playersScore[a];
  });

  let top7Players = sortedScore.slice(0, 7);

  score.innerHTML = `<h2> Pontuações: </h2>
  <h2>Você: ${info.players[playerName]}</h2>
  <h3> Outros jogadores:</h3>
  <p>${top7Players.map((key) => `${key}: ${playersScore[key]}`).join("<br>")}
  </p>
  <p> Total de Jogadores: ${Object.keys(playersScore).length}</p>`;
});
