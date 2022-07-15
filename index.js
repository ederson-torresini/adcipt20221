const config = {
  type: Phaser.AUTO,
  width: 1080,
  height: 1920,
  parent: "game-container",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    parent: "game-container",
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1080,
    height: 1920,
  },
  scene: { preload, create, update },
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("gravity-falls-game", "./assets/gravity-falls-game.png");
  this.load.image("gravity-falls-game-qrcode", "./assets/gravity-falls-game-qrcode.png");
  this.load.image("killer-run", "./assets/killer-run.png");
  this.load.image("killer-run-qrcode", "./assets/killer-run-qrcode.png");
}

function create() {
  var jogos = [
    {
      indice: "gravity-falls-game",
      qrcode: "gravity-falls-game-qrcode",
      titulo: "Gravity Falls Game",
      x: 300,
      y: 300,
      url: "https://gravityfallsgame.ifsc.cloud",
    },
    {
      indice: "killer-run",
      qrcode: "killer-run-qrcode",
      titulo: "Killer Run",
      x: 800,
      y: 300,
      url: "https://killerrun.ifsc.cloud",
    },
  ];
  var escolha = undefined

  jogos.forEach((jogo) => {
    jogo.imagem = this.add
      .image(jogo.x, jogo.y, jogo.indice)
      .setInteractive();

    jogo.imagem_qrcode = this.add
      .image(540, 1100, jogo.qrcode)
      .setVisible(false);

    jogo.texto = this.add
      .text(jogo.x - 128, jogo.y + 128, jogo.titulo, {
        fontFamily: "monospace",
        font: "32px Courier",
        fill: "#cccccc",
      })
      .setInteractive()
      .setScrollFactor(0);

    jogo.imagem.on("pointerdown", () => {
      if (escolha) {
        jogos.forEach((jogo) => {
          jogo.imagem.setVisible(true);
          jogo.imagem_qrcode.setVisible(false)
          jogo.texto.setVisible(true);
        });
        escolha = undefined
        jogo.imagem.x = jogo.x
        jogo.imagem.y = jogo.y
        window.open(jogo.url, "_blank")
      } else {
        jogos.forEach((jogo) => {
          jogo.imagem.setVisible(false);
          jogo.imagem_qrcode.setVisible(false)
          jogo.texto.setVisible(false);
        });
        escolha = jogo.indice
        jogo.imagem.setVisible(true)
        jogo.imagem.x = 540
        jogo.imagem.y = 800
        jogo.imagem_qrcode.setVisible(true)
      }
    });
  });
}

function update() { }
