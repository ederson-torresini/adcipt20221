const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origins: ["https://boidacarapreta.github.io"],
  },
});
const PORT = process.env.PORT || 3000;

// Disparar evento quando jogador entrar na partida
io.on("connection", (socket) => {
  // Aguardar pelo jogador enviar o nome da sala
  socket.on("entrar-na-sala", (sala) => {
    socket.join(sala);
    var jogadores = {};
    if (io.sockets.adapter.rooms.get(sala).size === 1) {
      // 1 jogador
      jogadores = {
        primeiro: socket.id,
        segundo: undefined,
      };
    } else if (io.sockets.adapter.rooms.get(sala).size === 2) {
      // 2 jogadores
      let [primeiro] = io.sockets.adapter.rooms.get(sala);
      jogadores = {
        primeiro: primeiro,
        segundo: socket.id,
      };
    }
    console.log("Sala %s: %s", sala, jogadores);
    // Envia a todos a lista atual de jogadores (mesmo incompleta)
    io.to(sala).emit("jogadores", jogadores);
  });

  // Sinalização de áudio: oferta
  socket.on("offer", (sala, description) => {
    socket.broadcast.to(sala).emit("offer", socket.id, description);
  });

  // Sinalização de áudio: atendimento da oferta
  socket.on("answer", (sala, description) => {
    socket.broadcast.to(sala).emit("answer", description);
  });

  // Sinalização de áudio: envio dos candidatos de caminho
  socket.on("candidate", (sala, signal) => {
    socket.broadcast.to(sala).emit("candidate", signal);
  });

  // Disparar evento quando jogador sair da partida
  socket.on("disconnect", () => {});

  // Envio do estado do outro jogador
  socket.on("estadoDoJogador", (sala, estado) => {
    socket.broadcast.to(sala).emit("desenharOutroJogador", estado);
  });
});

// Abrir porta para HTTPS/WSS
server.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
