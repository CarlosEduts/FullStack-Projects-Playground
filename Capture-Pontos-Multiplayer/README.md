# Jogo Multiplayer de Captura de Pontos

Este projeto implementa um jogo simples de captura de pontos multiplayer usando tecnologias web. Os jogadores podem se conectar ao servidor, escolher um apelido e interagir com um ambiente de jogo compartilhado, onde podem capturar pontos.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado em sua máquina.

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/CarlosEduts/FullStack-Projects-Playground.git
```

2. Navegue até o diretório do projeto:

```bash
cd FullStack-Projects-Playground/Capture-Pontos-Multiplayer
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor:

```bash
npm start
```

5. Abra seu navegador e vá para [http://localhost:3001](http://localhost:3001).

6. Insira um apelido, clique em "Entrar" para participar do jogo e comece a capturar pontos.

## Estrutura do Projeto

- **public:** Contém os arquivos estáticos (HTML, CSS, JS).
  - **index.html:** Página principal do aplicativo.
  - **styles.css:** Estilos para a interface do usuário.
  - **app.js:** Lógica do cliente (frontend).
- **server.js:** Servidor Express com Socket.IO para comunicação em tempo real.

## Nota Importante

Há uma falha no front-end do projeto, onde a verificação da captura de ponto ocorre no front-end em vez de ser realizada no back-end. Isso resulta em um problema significativo, pois se o seguinte código for inserido no console do navegador, o ponto será capturado automaticamente:

```javascript
socket.emit("gameInfo", playerName);
```

Esteja ciente dessa vulnerabilidade. A implementação correta da verificação no back-end é essencial para garantir a integridade e segurança do jogo.

## Contribuições

Contribuições são bem-vindas! Se você encontrar problemas ou tiver sugestões para melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](../LICENSE) para obter detalhes.
