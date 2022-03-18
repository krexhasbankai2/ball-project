
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var ground,left,right;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground(width/2,670,width,20)
	left= new Ground(1100,600,20,120)
	right= new Ground(1350,600,20,120)
	var ball_options={
		restituiton:0.3
	}
	//Create the Bodies Here.
	ball=Bodies.circle(260,100,20,ball_options)
World.add(world,ball)
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  ground.display()
  left.display()
  right.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}



