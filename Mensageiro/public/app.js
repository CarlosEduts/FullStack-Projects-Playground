document.addEventListener("DOMContentLoaded", () => {
  const socket = io();

  document.getElementById("sendButton").addEventListener("click", () => {
    const userNameInput = document.querySelector(".user-input").value;
    const messageInput = document.querySelector(".message-input");

    const messageData = {
      name: userNameInput,
      message: messageInput.value
    };

    console.log("Mensagem Enviada", messageData);
    socket.emit("chat message", messageData);

    messageInput.value = "";
  });

  socket.on("chat message", (message) => {
    const chatMessages = document.querySelector("#chat-messages");
    const messageElement = document.createElement("li");
    messageElement.textContent = `${message.name} disse: ${message.message}`;
    chatMessages.appendChild(messageElement);
  });
});

