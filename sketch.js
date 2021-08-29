
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,myWorld
var balls
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    var ball_options= {
    isStatic:true,
	restitution:0.3,
	friction:0,
	density: 1.2

	}
    Bodies.circle(200, 200, 4 ); 

	engine = Engine.create();
	myWorld = engine.world;
	florp = new Floor(400, 690, 800, 10)
    wall = new Floor(700, 670, 10, 80)
	wall2 = new Floor(500, 670, 10, 80)

	//Create the Bodies Here.


	Engine.run(engine);
    
}


function draw() {
  
  background(0);
  displayy()
  florp.display()
  wall.display()
  wall2.display()
 
}



    function displayy() {
        rectMode (CENTER)
        circle(circle.position.x, circle.position.y, 4);     
    }
    