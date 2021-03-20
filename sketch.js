var canvas, database, game, form, runner, playerIndex, allPlayers;
var p1,p2;
var gameState = 0;
var PlayerCount = 0;
var message = 0

function setup(){
  canvas = createCanvas(800,600);
  database = firebase.database()
  game = new Game()
  game.getState()
  game.start()
}

function draw(){
background("pink"); 

if (PlayerCount === 2) {
  gameState = 1  
}
if (gameState === 1) {
  game.play()  
  }
}
