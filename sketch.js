
var monkey, monkey_running;
var banana, bananaImage;
var obstacle, obstacleImage;
var score= 0;

function preload() {
  monkey_running= loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");
  
  bananaImage= loadImage("banana.png");
  obstacleImage= loadImage("obstacle.png");
}

function setup() {
  //creating monkey
  monkey= createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale= 0.1;

//creating ground
  ground= createSprite(400,350,900,10);
  
  ground.x=ground.width/2;
  console.log(ground.x);
}

function draw() {
  background(255); 
  
  if (ground.x<0) {
    ground.x= ground.width/2;
  }
  
  ground.velocityX= -7;
  
  if (keyDown("space")) {
    monkey.velocityY= -12;
  }
  
  monkey.velocityY= monkey.velocityY+ 0.8;
  monkey.collide(ground);
  
  monkey.velocityX= 1.5;
  
  //spawn the bananas
  spawnBananas();
  
  
  // spawn the Obstacles
  spawnObstacles();
  
  drawSprites();
}

function spawnBananas() {
  if (frameCount % 80 === 0) {
    var banana= createSprite(380,120,40,10);
    banana.y= Math.round(random(70,130));
    banana.addImage(bananaImage);
    banana.scale= 0.1;
    banana.velocityX= -3;
    banana.setLifetime= 150;
  }
}

function spawnObstacles() {
  if (frameCount % 300 === 0) {
    obstacle= createSprite(380,50,40,10);
    obstacle.y= Math.round(random(20,370));
    obstacle.addImage(obstacleImage);
    obstacle.scale= 0.1;
    obstacle.velocityX= -3;
  }
}