var start;
var startImage;

var click;
var clickImage;

var bullet;
var bulletImage;

var speed;
var weight;
var thickness;

var wall;
var wallImage;
var greenImage;
var yellowImage;
var redImage;


function preload(){

bulletImage=loadImage("bulletIM.png")

 greenImage=loadImage("green.png");
 
 yellowImage=loadImage("yellow.png");

 redImage=loadImage("red.png");

 wallImage=loadImage("ewall.png");

 startImage=loadImage("lala.png");
 clickImage=loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png");

}

function setup() {
  createCanvas(1500,400);

  click=createSprite(630,110,20,20);
  click.addAnimation("cl",clickImage);
  click.scale=0.5;

  start=createSprite(630,220,20,20);
  start.addImage("st",startImage);
  start.scale=0.55;

  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));

  thickness=Math.round(random(22,83));

 

  wall=createSprite(880,230,30,400);
  wall.addImage("wl",wallImage);
  wall.addImage("ws",greenImage);
  wall.addImage("re",redImage);
 
  
  bullet=createSprite(70,200,60,10);
  
 
  //bullet.debug=true;
 
 bullet.shapeColor="white";


 


  wall.depth=bullet.depth;
  wall.depth=wall.depth+1;

  start.depth=wall.depth;
  start.depth=start.depth+1;

  click.depth=start.depth;
  click.depth=click.depth+1;
 
  
}

function draw() {
  background("black"); 

  if(mousePressedOver(start)){
    start.visible=false;
    click.visible=false;
     bullet.velocityX=speed; 
  }
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/thickness*thickness*thickness;

    if(damage>10){
     wall.changeImage("re",redImage);
     textSize(25);
  fill("red");
  text("DAMAGE GREATER THAN 10",300,200);

    }

  if(damage<10){
    wall.changeImage("ws",greenImage);
    textSize(25);
  fill("green");
  text("DAMAGE LESS THAN 10",300,200);
  }

  }

  drawSprites();
}