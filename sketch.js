const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,object,ground,ball2

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  var ball={
    isStatic:true
  }
  object=Bodies.rectangle(500,200,50,50,ball);
    World.add(world,object)
  ground=Bodies.rectangle(400,390,800,5,ball)
  World.add(world,ground)
  var g2={
    restitution:1.0
  }
ball2=Bodies.circle(400,200,10,g2)
World.add(world,ball2)

}

function draw() {
  background("black");  
  Engine.update(engine)
  rectMode(CENTER)
  rect(object.position.x,object.position.y,50,50)
  rect(ground.position.x,ground.position.y,800,5)
  ellipseMode(RADIUS)
  ellipse(ball2.position.x,ball2.position.y,10,10)
}