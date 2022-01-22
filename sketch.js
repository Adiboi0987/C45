var player,playerImg


function preload()
{
	playerImg=loadAnimation("A1.png","A2.png","A3.png","A5.png","A6.png","A7.png","A8.png","A9.png","A10.png")
}

function setup() {
	createCanvas(800, 700);

player=createSprite(400,400)
player.addAnimation("player",playerImg)

	
  
}


function draw() {
 
  background(0);
  
  drawSprites();
 
}



