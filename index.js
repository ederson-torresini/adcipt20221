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
  this.load.image("fortfight", "./assets/fortfight.png");
  this.load.image("gravity-falls-game", "./assets/gravity-falls-game.png");
  this.load.image("gravity-falls-game-qrcode", "./assets/gravity-falls-game-qrcode.png");
}

function create() {
  var jogos = [
    {
      indice: "fortfight",
      //qrcode: "gravity-falls-game-qrcode",
      titulo: "FortFight",
      x: 400,
      y: 200,
      url: "https://fortfight.ifsc.cloud",
    },
    {
      indice: "gravity-falls-game",
      qrcode: "gravity-falls-game-qrcode",
      titulo: "Gravity Falls Game",
      x: 200,
      y: 200,
      url: "https://gravityfallsgame.ifsc.cloud",
    },
  ];
  var escolha = undefined

  jogos.forEach((jogo) => {
    jogo.imagem = this.add
      .image(jogo.x, jogo.y, jogo.indice, 0)
      .setInteractive();

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
          jogo.texto.setVisible(true);
        });
        escolha = undefined
        jogo.imagem.x = jogo.x
        jogo.imagem.y = jogo.y
      } else {
        jogos.forEach((jogo) => {
          jogo.imagem.setVisible(false);
          jogo.texto.setVisible(false);
        });
        escolha = jogo.indice
        jogo.imagem.setVisible(true)
        jogo.imagem.x = 240
        jogo.imagem.y = 960
      }
    });
  });
}

function update() { }
