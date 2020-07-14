const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var paper, sling, paperImg;
var dustbin,dustbin1,dustbin2,dustbinImg;
var ground;

function preLoad(){
	paperImg = loadImage("paper.png");
	dustbinImg = loadImage("dustbin.png");
}

function setup(){
	var canvas = createCanvas(1200,400);
	ground = new Ground(600,height,1200,20);
	dustbin1 = new Dustbin(900,310,20,100);
	dustbin = new Dustbin(1000, height-45, 200, 20);
	dustbin2 = new Dustbin(1100, 310, 20, 100);
	dustbin.addImage(dustbinImg);
    engine = Engine.create();
    world = engine.world;
    paper = new Paper(100,100,50,50,PI/2);
	paper.addImage(paperImg);
	sling = new Sling(paper.body,{x:200, y:100});
}

function draw(){
    background(100);
    Engine.update(engine);
    strokeWeight(4);
    paper.display();
	sling.display();   
    ground.display();
    dustbin.display();
    dustbin1.display();
    dustbin2.display();
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    sling.fly();
}
