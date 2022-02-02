var bg, bgImg;
var zombie, zombieImg;
var player, shooterImg, shooter_shooting;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var zombieGroup;
var bullets = 70;
var gameState = "fight"


function preload(){
  heart1Img = loadImage("assets/heart_1.png")
  heart2Img = loadImage("assets/heart_2.png")
  heart3Img = loadImage("assets/heart_3.png")

  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  zombieImg = loadImage("assets/zombie.png")

  bgImg = loadImage("assets/bg.jpeg")
}

function setup(){
  createCanvas(windowWidth, WindowHeight);
  bg = createSprite(displayWidth/2-20, displayHeight/2-40,20,20);
  bg.addImage(bgImg);
  bg.scale = 1.1

  player = createSprite(displayWidth-1150, displayHeight-300,50,50);
  player.addImage(shooterImg);
  player.scale = 0.3;
  player.debug = true;
  player.setCollider("rectangle",0,0,300,300);
}
