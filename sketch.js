
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;
var PaperObj;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	PaperObj = new Paper(400,200)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

 if(keyCode == UP_ARROW)
 {
	
	
	PaperObj.y=PaperObj.y+(-10);
 }
 
 PaperObj.x=PaperObj.x+10;
 
 
  PaperObj.display()
  groundObject.display();
  dustbinObj.display();
 
}

