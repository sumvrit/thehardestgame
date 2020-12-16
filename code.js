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

var Wall1 = createSprite(190,120,250,3);
var Wall2 = createSprite(190,260,250,3);
var Wall3 = createSprite(67,145,3,50);
var Wall4 = createSprite(67,235,3,50);
var Wall5 = createSprite(313,235,3,50);
var Wall6 = createSprite(313,145,3,50);
var Wall7 = createSprite(41, 170,50,3);
var Wall8 = createSprite(41,210,50,3);
var Wall9 = createSprite(337,210,50,3);
var Wall10 = createSprite(337,170,50,3);
var Wall11 = createSprite(18,190,3,40);
var Wall12 = createSprite(361,190,3,40);

  var ball = createSprite(40,190,20,20);
  ball.shapeColor = "red"

    var ob1 = createSprite(100,130,20,20);
    ob1.shapeColor ="green"
    ob1.velocityY = -4
    
    var ob2 = createSprite(215,130,20,20);
    ob2.shapeColor ="green"
    ob2.velocityY = 4
    
    var ob3 = createSprite(165,250,20,20);
    ob3.shapeColor ="green"
    ob3.velocityY = -4
    
    var ob4 = createSprite(275,250,20,20);
    ob4.shapeColor ="green"
    ob4.velocityY = 4
    
    
var count = 0

function draw() {
background("black")  

text('Deaths:'+ count, 100,200);

ball.bounceOff(Wall11);

  if (//ball.isTouching(Wall12)||
      ball.isTouching(ob1)||
      ball.isTouching(ob2)||
      ball.isTouching(ob3)||
      ball.isTouching(ob4)){
        ball.x = 40
        ball.y = 190
        count = count + 1
      }
      
      if (ball.isTouching(Wall12)){
        ball.x = 40
        ball.y = 190
      }
      

      ob1.bounceOff(Wall1);
      ob1.bounceOff(Wall2);
      ob2.bounceOff(Wall1);
      ob2.bounceOff(Wall2);
      ob3.bounceOff(Wall1);
      ob3.bounceOff(Wall2);
      ob4.bounceOff(Wall1);
      ob4.bounceOff(Wall2);
      
      
if (keyDown("right")){
  ball.x=ball.x + 2;
}
  
if (keyDown("left")){
  ball.x = ball.x - 2;
}  

if(ball.isTouching(Wall12)){
  text('You Win',150,150)
}
  
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
