var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  AppleImg=loadImage("apple.png");
  orangeleaf=loadImage("orangeLeaf.png")
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
//garden.velocityX=-3;

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
 
  edges= createEdgeSprites();

  rabbit.x=World.mouseX
  rabbit.collide(edges);

  createApples()
  createOrangeleaf()

  drawSprites();
}
function createApples(){
 if (frameCount%80===0){
 var Apple=createSprite(random(50,350),40,10,10);
  Apple.addImage("fruits",AppleImg)
  Apple.scale=0.1;
  Apple.velocityY=3
}
}

function createOrangeleaf(){
  if (frameCount%60===0){
  var orangeLeaf=createSprite(random(50,350),40,10,10);
   orangeLeaf.addImage("fruits",orangeleaf)
   orangeLeaf.scale=0.1;
   orangeLeaf.velocityY=3
  }
}