const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,stone;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber (100,100,100,100)
    stone1 = new Stone(200,50,50,50)
    iron1 - new Iron(400,50,50,50)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    

    plane.display();
    hammer.display();
    rubber.display();
    stone.display()
    iron.display()
 
}