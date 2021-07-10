var square
function setup() {
  createCanvas(400,400);
  square=createSprite(200,200,100,100)
}

function draw() 
{
  background(30);

if(keyIsDown(LEFT_ARROW)){
  square.position.x=square.position.x-3 
}
if(keyIsDown(RIGHT_ARROW)){
  square.position.x=square.position.x+3
}




drawSprites()
}




