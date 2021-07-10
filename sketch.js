
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var backgroundIMG;
var dIMG;
var dustbinObj,paperObject,groundObject;

function preload()
{
backgroundIMG = loadImage("sprites/background.png");	

}

function setup() {
	createCanvas(1600,700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
;
	//Create the Bodies Here.
	
//bar1 = new Bars(1200,450,100,10);
//bar2 = new Bars(1150,400,10,100);
//bar3 = new Bars(1250,400,10,100);




	paperObject = new Paper(200,450,70);
	groundObject = new Ground(width/2,670,width,20);
	dustbinObj = new Dustbin(1200,650);
	
	var render=Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1600,
			height:700,
			wireframes:false
		}

	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {

  background(backgroundIMG);
  rectMode(CENTER);

 

  paperObject.display(); 
groundObject.display();

dustbinObj.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:500,y:-200});
	}
}

