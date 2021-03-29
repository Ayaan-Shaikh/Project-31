const World= Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var particles=[];
var plinkos=[]; 
var divisons=[];
var divisonsHeight=150;


function setup() {
  createCanvas(490,630);
 
  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(240,610,500,10)



  for (var k=0; k<=width; k=k +80){
       divisons.push(new Divison(k, 610-divisonsHeight/2, 10, divisonsHeight));
      }
      for (var k=0; k<=width; k=k +80){
        divisons.push(new Divison(k,600,divisonsHeight/1,10,divisonsHeight));
       }  

      
      for(var j = 15; j<= width-10; j = j+50){
        plinkos.push(new Plinko(j ,85))
      }
      for(var j = 40; j<= width-10; j = j+50){
        plinkos.push(new Plinko(j ,120))
      }
      for(var j = 15; j<= width-10; j = j+50){
        plinkos.push(new Plinko(j ,150))
      }
      for(var j = 40; j<= width-10; j = j+50){
        plinkos.push(new Plinko(j ,185))
      }
      for(var j = 15; j<= width-10; j = j+50){
        plinkos.push(new Plinko(j ,225))
      }
  

  }

function draw() {
  background(0);  
  Engine.update(engine);


  if(frameCount % 60 === 0){
    particle = new Particle(random(130, 400), 0, 7, random(0, 360));
    particles.push(particle);
  }
   
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }

  for (var n=0; n<divisons.length; n++ ){
    divisons[n].display();
    }


    for(var j = 0; j<plinkos.length;j++){
      plinkos[j].display();
   }
  
 
  
   
    
  fill("brown");
  ground1.display();



  drawSprites();
  }



