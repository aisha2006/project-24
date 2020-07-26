
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  dustbin1=new Dustbin(510,650,200,20);
	  dustbin2=new Dustbin(400,610,20,100);
	  dustbin3=new Dustbin(610,610,20,100);

	  ground= new Ground(400,680,800,30);

	  paper= new Paper(200,650,50,{isStatic:false});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground.display();

  paper.display();

  keyPressed();
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position.y,{x:85,y:85})
	}
}

