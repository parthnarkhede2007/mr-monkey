var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score
var ground;
var score;

function preload() {


  monkeyrunning = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");


}



function setup() {
  createCanvas(400, 400);

  monkey = createSprite(50, 300, 25, 25)
  monkey.addAnimation("running", monkeyrunning);
  monkey.scale = 0.11;

  ground = createSprite(250, 340, 800, 10);
  ground.velocityX = -4;

  FoodGroup = createGroup();
  obstacleGroup = createGroup();

  score = 0;
}


function draw() {
  background("cyan");

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  if (keyDown("space") && monkey.y >= 300) {
    monkey.velocityY = -13;
  }

  monkey.velocityY = monkey.velocityY + 0.5

  monkey.collide(ground);

  stroke("blue");
  textSize(15);
  text("SURVIVALtime: " + score, 50, 370)
  score = score + Math.ceil(getFrameRate() / 60);

  bananas();
  obstacles();
  drawSprites();
}

function bananas() {
  if (frameCount % 100 === 0) {
    banana = createSprite(400, 300, 40, 10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120, 200));
    banana.scale = 0.11;
    banana.velocityX = -4;
    banana.lifetime = 100;
  }
}

function obstacles() {
  if (frameCount % 250 === 0) {
    obstacle = createSprite(400, 317, 10, 10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.lifetime = 200;
    obstacle.scale = 0.11;

  }
}






