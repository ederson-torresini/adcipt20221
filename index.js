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
  this.load.image("adcipt20221", "./assets/adcipt20221.png");
}

function create() {
  var adcipt20221 = this.add.image(200, 200, "adcipt20221", 0).setInteractive();
  this.add.text(72, 328, "ADC/IPT 2022.1", {
    fontFamily: "monospace",
    fontSize: "32px",
    fill: "#cccccc",
  });

  adcipt20221.on(
    "pointerdown",
    () => {
      window.open("https://cliente.ifsc.cloud", '_blank');
    },
    this
  );
}

function update() {
}
