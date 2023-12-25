document.addEventListener("DOMContentLoaded", () => {
  const socket = io();

  let color = [
    "#000000", // Preto
    "#FF0000", // Vermelho
    "#00FF00", // Verde
    "#0000FF", // Azul
    "#FF00FF", // Magenta
    "#00FFFF", // Ciano
    "#800000", // Marrom escuro
    "#008000", // Verde escuro
    "#000080", // Azul escuro
    "#808080", // Cinza
    "#FFA500", // Laranja
    "#8A2BE2", // Azul violeta
    "#008080", // Verde azulado
  ];

  const randomColor = (value) => {
    return Math.floor(Math.random() * value);
  };

  color = color[randomColor(color.length)];

  document.getElementById("sendButton").addEventListener("click", () => {
    const userNameInput = document.querySelector(".user-input").value;
    const messageInput = document.querySelector(".message-input");

    const messageData = {
      name: userNameInput,
      message: messageInput.value,
      color: color,
    };

    console.log("Mensagem Enviada", messageData);
    socket.emit("chat message", messageData);

    messageInput.value = "";
  });

  socket.on("chat message", (message) => {
    const chatMessages = document.querySelector(".chat-content");
    const messageElement = document.createElement("h4");
    messageElement.style.color = message.color;
    messageElement.textContent = `${message.name} disse: ${message.message}`;
    chatMessages.appendChild(messageElement);
  });
});
