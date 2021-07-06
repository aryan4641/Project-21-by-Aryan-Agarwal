const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var v, v2;
var ball;
var button1, button2;


function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  
  world = engine.world;
  var ball_options={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
  }
 ball = Bodies.circle(100,350,20,ball_options);

  
  bottom= new Ground(400,675,800,10);
  v= new Ground(600,630,10,100);
  v2= new Ground(700,630,10,100);
  
  

   rectMode(CENTER);
  ellipseMode(RADIUS);
  
  World.add(world, ball);
}

function draw() 
{
  background(0);
   
  bottom.show();
  v.show();
  v2.show();
  

  //keyPressed();
  
  ellipse(ball.position.x,ball.position.y,20);
  
  keyPressed()
 
  Engine.update(engine);
}

function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.2,y:0.5})
  }
}
