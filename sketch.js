var bullet, wall, thickness;
var speed,weight;
var damage;
function setup() {
  createCanvas(1600,400);
  thickness = random(22,83)
  speed = random(223,321);
  weight = random(30,52);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  bullet = createSprite(50, 150, 50, 10);
  bullet.shapeColor = "white";
  bullet.setCollider("rectangle",0,0,bullet.width+10,bullet.height);
  wall.setCollider("rectangle",0,0,wall.width+20,wall.height);
}

function draw() {
  background("black");  
  if(bullet.x-wall.x < bullet.width/2 + wall.width/2 &&
    wall.x - bullet.x <bullet.width/2 + wall.width/2 &&
    bullet.y-wall.y < bullet.height/2 + wall.height/2 &&
    wall.y - bullet.y <bullet.height/2 + wall.height/2){ 
     damage = 0.5*weight*speed*speed/thickness*thickness*thickness
     if(damage<10){
       bullet.shapeColor = "green";
       speed = 0;
     }
     if(damage>10){
       bullet.shapeColor = "red";
       speed = 0;
     }
    }
   if(bullet.x>=wall.x-20){
     speed = 0;
     bullet.x = wall.x
   }
  drawSprites();
  bullet.velocityX = speed;
}