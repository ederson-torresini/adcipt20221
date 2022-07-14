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
  this.load.image("killer-run", "./assets/killer-run.png");
  this.load.image("princesas-perdidas", "./assets/princesas-perdidas.png");
  this.load.image("soccer-simulator", "./assets/soccer-simulator.png");
}

function create() {
  var jogos = [
    {
      indice: "gravity-falls-game",
      titulo: "Gravity Falls Game",
      x: 200,
      y: 200,
      url: "http://gravityfallsgame.ifsc.cloud",
    },
  ];

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
      jogos.forEach((jogo) => {
        jogo.imagem.setVisible(false);
        jogo.texto.setVisible(false);
      });
    });
    jogo.imagem.on("pointerout", () => {
      jogos.forEach((jogo) => {
        jogo.imagem.setVisible(true);
        jogo.texto.setVisible(true);
      });
    });
  });
}

function update() {}
