var sea, seaImg, ship, shipImg


function preload(){
   seaImg = loadImage("sea.png")
   shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(1000,1000);
  
  sea = createSprite(500,500,10,10)
  sea.addImage("sea",seaImg)

  ship = createSprite(600,600,10,10)
  ship.addAnimation("ship",shipImg)
  ship.scale = 0.5
}

function draw() {
  background("white")



  drawSprites();
}