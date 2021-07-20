
var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);

}

function draw() 
{
   
  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
    background("pink");

  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    background("yellow")
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
   background("lightgreen")
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
    background("lightblue")
  }

  drawSprites();
}








