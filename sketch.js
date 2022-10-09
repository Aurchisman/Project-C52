var canvas;
var  spaceship1_img, spaceship2_img, trackImg,track;
var database, gameState;
var form, player, playerCount;
var allPlayers, spaceship1, spaceship2,fuels, powerCoins;
var cars = [];
var fuelImage, powerCoinImage;
var sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto;
var sunImage, mercuryImage, venusImage, earthImage, marsImage, jupiterImage, saturnImage, uranusImage, neptuneImage, plutoImage;
var obstacle1, obstacle2;
var obstacle1Image, obstacle2Image;
var life, lifeImage;
var boulders, boulderImage, comet, cometImage;
//BP
function preload() {
 
  spaceship1_img = loadImage("../assets/spaceships.png");
  spaceship2_img = loadImage("../assets/spaceship2.png");
  trackImg = loadImage("../assets/track.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  sunImage = loadImage("./assets/sun.png");
  mercuryImage = loadImage("./assets/mercury.png");
  venusImage = loadImage("./assets/venus.png");
  earthImage = loadImage("./assets/earth.png");
  marsImage = loadImage("./assets/mars.png");
  jupiterImage = loadImage("./assets/jupiter.png");
  saturnImage = loadImage("./assets/saturn.png");
  uranusImage = loadImage("./assets/uranus.png");
  neptuneImage = loadImage("./assets/neptune.png");
  plutoImage = loadImage("./assets/pluto.png");
  lifeImage = loadImage("./assets/life.png");
  cometImage = loadImage("./assets/comet.png");
  boulderImage = loadImage("./assets/boulders.png");
}

//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}

//BP
function draw() {
  background(trackImg);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
