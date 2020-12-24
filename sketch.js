
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var divisions = [];
// var particles = [];
var plinkos = [];
var divisionHeight = 300;
var score = 0;
var particle;
var turn = 0;
var gameState = 0;


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  for (let k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k,height - divisionHeight/2,10,divisionHeight));
  }

  for (let j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j,75,10));    
  }

  for (let j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j,175,10));    
  }

  for (let j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j,275,10));    
  }

  for (let j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j,375,10));    
  }

  ground = new Ground(width/2,height - 10,width,20);


  Engine.run(engine);
}



function draw() {
  background(0);  
  Engine.update(engine);

  // if(frameCount % 60 === 0){
  //   particles.push(new Particle(random(width/2 - 10,width/2 + 10),10,10));
  // }

for (let k = 0; k < divisions.length; k++) {
  divisions[k].display();
}

for (let j = 0; j < plinkos.length; j++) {
  plinkos[j].display();
}

// for (let i = 0; i < particles.length; i++) {
//   particles[i].display();
// }

ground.display();

// if(particle !== undefined)
// {
//    particle.display();
// }

textSize(32);
fill(255);
text(500,10,525);
text(500,95,525);
text(100,170,525);
text(100,250,525);
text(200,335,525);
text(200,415,525);
text("Score : " + score,10,40);

// particle.display();

if(particle !== null){
  particle.display();

  if(particle.body.position.y > 760){

    if(particle.body.position.x < 300){
      score =  score + 500;
      particle = null;
      if(turn >= 5){
        gameState = 1;
      }
    }
  }
}


drawSprites();
}

function mousePressed()
{
  if(gameState !== 1){
    particle = new Particle(mouseX,10,10);
    turn = turn + 1;
  }
}