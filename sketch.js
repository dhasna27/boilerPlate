
var movingRect, fixedRect

function setup() {
  createCanvas(800,400);
  movingRect =createSprite(400, 200, 80, 50);
  movingRect.shapeColor ='green';
  movingRect.debug =true;

  fixedRect = createSprite(300,150,50,90)
  fixedRect.shapeColor = 'green';
  fixedRect.debug =true;
}

function draw() {
  background(0);  

  movingRect.x= mouseX;
  movingRect.y = mouseY;

  console.log(fixedRect.x - movingRect.x)
   
 if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
  fixedRect.x - movingRect.x< movingRect.width/2+fixedRect.width/2 &&
  movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
  fixedRect.y-movingRect.y <movingRect.height/2+fixedRect.height/2 ){
  
  
    console.log(fixedRect.x - movingRect.x)
  movingRect.shapeColor ='red';
  fixedRect.shapeColor = 'red';
   
   
 }

 else{
  movingRect.shapeColor ='green';
  fixedRect.shapeColor = 'green';

 }

  drawSprites();
}