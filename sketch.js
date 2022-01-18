var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //crea los objetos para dividir
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var i = 0; i <=160; i = i + 80) {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var l = 0; l <=240; l = l + 80) {
    divisions.push(new Divisions(l, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var m = 0; m <=320; m = m + 80) {
    divisions.push(new Divisions(m, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var n = 0; n <=400; n = n + 80) {
    divisions.push(new Divisions(n, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var o = 0; o <=480; o = o + 80) {
    divisions.push(new Divisions(o, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var p = 0;p <=560; p = p + 80) {
    divisions.push(new Divisions(p, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var q = 0; q <=640; q = q + 80) {
    divisions.push(new Divisions(q, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var r = 0;r <=720; r = r + 80) {
    divisions.push(new Divisions(r, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var s = 0; s <=800; s = s + 80) {
    divisions.push(new Divisions(s, height-divisionHeight/2, 10, divisionHeight));
  }

  //crea la primera fila de objetos plinko
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //crea la segunda fila de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //crea la tercera fila de objetos plinko
  for (var j = 25; j <=width-20; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //crea la cuarta fila de objetos plinko
  for (var j = 50; j <=width-30; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //crea los objetos partícula
  if (frameCount%90===0){
    particles.push(new Particles(random(width/2-10, width/2+10), 10, 10))
  }
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //muestra los plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //muestra las divisiones
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //muestra las partículas 
  if (frameCount%90===0){
    particles.push(new Particles(random(width/2-10, width/2+10), 10, 10))
  }
  for (var t = 0; t < particles.length; t++) {
    particles[t].display();
  }
}
