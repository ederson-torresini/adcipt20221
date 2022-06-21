const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origins: ["https://cliente.ifsc.cloud", "https://*.gitpod.io"],
  },
});
const PORT = process.env.PORT || 3000;

// Disparar evento quando jogador entrar na partida
io.on("connection", (socket) => {
  socket.on("entrar-na-sala", (sala) => {
    // verifica se sala existe
    if (!io.sockets.adapter.rooms.has(sala)) {
      // sala não existe, criar
      let jogadores = {
        primeiro: socket.id,
        segundo: undefined,
      };
      socket.join(sala);
      io.to(sala).emit("jogadores", jogadores);
      console.log("Sala %s: %s", sala, jogadores);
    } else {
      // sala já existe, verificar se tem apenas 1 jogador
      if (io.sockets.adapter.rooms.get(sala).size === 0) {
        let jogadores = {
          primeiro: socket.id,
          segundo: undefined,
        };
        socket.join(sala);
        io.to(sala).emit("jogadores", jogadores);
        console.log("Sala %s: %s", sala, jogadores);
      } else if (io.sockets.adapter.rooms.get(sala).size === 1) {
        let [primeiro] = io.sockets.adapter.rooms.get(sala);
        let jogadores = {
          primeiro: primeiro,
          segundo: socket.id,
        };
        socket.join(sala);
        io.to(sala).emit("jogadores", jogadores);
        console.log("Sala %s: %s", sala, jogadores);
      } else {
        // a sala já tem dois jogadores, está cheia
        console.log("Sala %s cheia!", sala);
      }
    }
  });

  // Sinalização de áudio: oferta
  socket.on("offer", (socketId, description) => {
    socket.to(socketId).emit("offer", socket.id, description);
  });

  // Sinalização de áudio: atendimento da oferta
  socket.on("answer", (socketId, description) => {
    socket.to(socketId).emit("answer", description);
  });

  // Sinalização de áudio: envio dos candidatos de caminho
  socket.on("candidate", (socketId, signal) => {
    socket.to(socketId).emit("candidate", signal);
  });

  // Disparar evento quando jogador sair da partida
  socket.on("disconnect", () => {
    // avisar o outro jogador a desconexão
    console.log(io.sockets.adapter.rooms);
    console.log(socket.rooms);
    // if (io.sockets.adapter.rooms.get(sala).size === 1) {
    // }
    // if (jogadores.primeiro === socket.id) {
    //   jogadores.primeiro = undefined;
    // }
    // if (jogadores.segundo === socket.id) {
    //   jogadores.segundo = undefined;
    // }
    // // io.to("a").emit("jogadores", jogadores);
    // console.log("-Lista de jogadores: %s", jogadores);
  });

  socket.on("estadoDoJogador", (estado) => {
    // io.to("a").emit("desenharOutroJogador", estado);
  });
});

// Abrir porta para HTTPS/WSS
app.use(express.static("./"));
server.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
