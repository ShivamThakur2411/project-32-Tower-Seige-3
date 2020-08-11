const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, ground2;

var block1,block2,block3,block4;
var block5,block6,block7;
var block8,block9;
var block10;

var block11,block12,block13;
var block14,block15;
var block16;

var engine, world;

var polygon;

var slingShot;

var   score = 0;
var backgroundImg;

function preload(){
  GetBackgroundImg();
}

function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
	world = engine.world;


  block1 = new Block(410,455,50,80);
  block2 = new Block(465,455,50,80);
  block3 = new Block(355,455,50,80);
  block4 = new Block(300,455,50,80);

  block5 = new Block(327,375,50,80);
  block6 = new Block(382,375,50,80);
  block7 = new Block(437,375,50,80);

  block8 = new Block(352,295,50,80);
  block9 = new Block(407,295,50,80);

  block10 = new Block(379,215,50,80);
  
  block11 = new Block(800,305,50,80);
  block12 = new Block(745,305,50,80);
  block13 = new Block(690,305,50,80);

  block14 = new Block(765,225,50,80);
  block15 = new Block(735,225,50,80);

  block16 = new Block(750,145,50,80);

  polygon = new Hexagon(200,100,50);

  ground = new Ground(380,500,300,10);
  ground2 = new Ground(750,350,200,10);
  ground3 = new Ground(500,600,1000,50);

  slingShot = new SlingShot(polygon.body,{x:100, y:150});

  Engine.run(engine);
}

function draw() {
	Engine.update(engine);
    if(backgroundImg){
    background(backgroundImg);
  }

  ground.display();
  ground2.display();
  ground3.display();

  block1.display();
  block1.score();

  block2.display();
  block2.score();

  block3.display();
  block3.score();

  block4.display();
  block4.score();

  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();

  block10.display();
  block10.score();
  
  block11.display();
  block12.display();
  block13.display();

  block14.display();
  block15.display();
  
  block16.display();
  polygon.display();
  slingShot.display();

  text("SCORE : " + score,750, 40);
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(polygon.body);
    }
}

async function GetBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJson = await response.json();
  var hour = responseJson.datetime.slice(11, 13)
  if(hour > 6 && hour < 18){
    bg = "background 1.png"
  }else {
    bg = "BackGround2.png"
  }
      backgroundImg = loadImage(bg);
    }
