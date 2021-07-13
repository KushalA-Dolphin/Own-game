var backgroundimg;
var monster,monsterimg,monster2,monster2img,monster3,monster3img,monster4,monster4img,monsterGroup;
var gun,gunimg,gun2img;
var enemy,r;
var score;
function preload() {
  backgroundimg=loadImage("1244577.png");

  monsterimg=loadImage("zombie.png");
  monster2img=loadImage("skeleton.png");
  monster3img=loadImage("ghost.png");
  monster4img=loadImage("vampire.png");

  gunimg=loadImage("scope.png");
  gun2img=loadImage("scope 2.png");

}

function setup() { 
  createCanvas(1000,600)
  
  gun=createSprite(500,450,10,10);
  gun.addImage(gun2img);
  gun.scale=0.1; 
  
  enemy= createSprite(400,600,20,20);
  enemy.scale=0.4;
  enemy.visible=false;

  monsterGroup = new Group();

  score=0;
}

function draw() {
 background(backgroundimg);

 obstacles();

 if (monsterGroup.isTouching(gun)){
   score=score+1;
   monsterGroup.destroyEach();
 }
 if(frameCount%40===0 && r!==3){
  enemy.scale=enemy.scale+0.05
}

 gun.x=mouseX
 gun.y=mouseY
 drawSprites();
 fill("white");
 textSize(30);
 text("Score:"+score,200,50);
}

function obstacles(){
  if(World.frameCount%80===0){
    
    enemy.visible=true;

    r=Math.round(random(1,4));
    if(r == 1) {
      enemy.addImage(monster2img);
    }   else if (r == 2){
      enemy.addImage(monsterimg); 
    }else if (r == 3) {
      enemy.addImage(monster3img);
      enemy.scale=0.07
    }  else {
      enemy.addImage(monster4img);
    }
    
    enemy.x=Math.round(random(50,950));
    enemy.y=Math.round(random(50,550));

    enemy.velocityY= -1
    enemy.lifetime=300;

    enemy.setCollider("rectangle",0,0,100,200);

    enemy.debug=true;

    gun.depth=enemy.depth;
    gun.depth=gun.depth+=1
 
    monsterGroup.add(enemy);

   
  }
}
