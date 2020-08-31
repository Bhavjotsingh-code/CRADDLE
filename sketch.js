
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1= new Bob(200,300,20,20)
bob2= new Bob(240,300,20,20)
bob3= new Bob(280,300,20,20)
bob4= new Bob(320,300,20,20)
bob5= new Bob(360,300,20,20)
roof = new Roof(400,500,800,30)
constrainedLog=new Rope(230,180,80,PI/2)
    rope=new Rope(constrainedLog.body,bird.body)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  constrainedLog.display();
    rope.display();
 
}



