var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var goal = createSprite(200, 385,125,25);
goal.shapeColor = "yellow";
var playerpaddle = createSprite(200, 340,60,20);
playerpaddle.shapeColor = "black";

var goal2 = createSprite(200, 15,125,25);
goal2.shapeColor = "yellow";
var comppaddle = createSprite(200, 60,60,20);
comppaddle.shapeColor = "black";
 for (var i = 12; i < 400; i=i+20) {
    var dottedlines = createSprite(i,200,10,2);
    dottedlines.shapeColor = "black";
  }
var ball = createSprite(200,200,20,20);
ball.shapeColor = "brown";
  var compscore  = 0;
  var playerscore = 0;
var gameState = "serve";






function draw() {
  background("gray");
if (gameState == "serve") {
  textSize(25);
  fill("purple");
stroke("black");
strokeWeight(1);
text("Press Space to Strike",80,160); 
  if(keyDown("Space")){
    ball.velocityX = 3;
    ball.velocityY = 3;
    gameState = "play";
}
}


   if (gameState == "play") {
   playerpaddle.x=World.mouseX;
   if (ball.isTouching(goal)  ||  ball.isTouching(goal2)) {
    ball.bounceOff(goal);
    ball.x = 200;
    ball.y = 200;
    ball.velocityY = 0;
    ball.velocityX=  0;
    playerpaddle.x = 200;
    gameState = "serve";
    compscore = compscore +1;
   }
   }
   
    
    if (playerscore == 5  ||  compscore == 5) {
    gameState = "end";
    }
    if (gameState == "end") {
        textSize(35);
      fill("maroon");
      stroke("brown");
      strokeWeight(1);
      text("Game Over", 120,160);
    }
    
   
   
   
   


   
   
  
  textSize(25);
  fill("red");
  stroke("black");
  text(compscore,25,185);
  text(playerscore,25,225);
  

  
  comppaddle.x=ball.x;
  
  ball.bounceOff(playerpaddle);
  ball.bounceOff(comppaddle);
  
  
  
  
  
  
  
createEdgeSprites();
playerpaddle.bounceOff(edges);
ball.bounceOff(edges);

  drawSprites();
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
