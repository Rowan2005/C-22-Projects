const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var mousePressed;

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
}

function draw(){
    if (mousePressed){
        box1 = createSprite(200,200,50,50);
    }
}
