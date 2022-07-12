var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1fff3ece-b6db-41b3-a7bf-4c9ac0e211ae","f9e750aa-4ed6-4924-8759-60e42638cf9d","626489d9-6bb4-44d1-9eac-740274e10354","05ec6f77-849a-49bc-a686-a8666067f428"],"propsByKey":{"1fff3ece-b6db-41b3-a7bf-4c9ac0e211ae":{"name":"player","sourceUrl":"assets/v3/animations/z5ysNOCcT8uCxCNuj5yeVjgnrz74OsWz9goxNzh4pDs/1fff3ece-b6db-41b3-a7bf-4c9ac0e211ae.png","frameSize":{"x":500,"y":500},"frameCount":1,"looping":true,"frameDelay":4,"version":"5wGidn7VqqqCFiU68ULJejetSYElA8zX","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":500},"rootRelativePath":"assets/v3/animations/z5ysNOCcT8uCxCNuj5yeVjgnrz74OsWz9goxNzh4pDs/1fff3ece-b6db-41b3-a7bf-4c9ac0e211ae.png"},"f9e750aa-4ed6-4924-8759-60e42638cf9d":{"name":"hockeyplayer","sourceUrl":"assets/v3/animations/z5ysNOCcT8uCxCNuj5yeVjgnrz74OsWz9goxNzh4pDs/f9e750aa-4ed6-4924-8759-60e42638cf9d.png","frameSize":{"x":779,"y":602},"frameCount":1,"looping":true,"frameDelay":4,"version":"Qe3h4z6cc8u0Usi575Z5kI1csBRhqLCH","loadedFromSource":true,"saved":true,"sourceSize":{"x":779,"y":602},"rootRelativePath":"assets/v3/animations/z5ysNOCcT8uCxCNuj5yeVjgnrz74OsWz9goxNzh4pDs/f9e750aa-4ed6-4924-8759-60e42638cf9d.png"},"626489d9-6bb4-44d1-9eac-740274e10354":{"name":"puck","sourceUrl":"assets/api/v1/animation-library/gamelab/wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa/category_sports/puck.png","frameSize":{"x":393,"y":243},"frameCount":1,"looping":true,"frameDelay":2,"version":"wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":243},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa/category_sports/puck.png"},"05ec6f77-849a-49bc-a686-a8666067f428":{"name":"police","sourceUrl":"assets/v3/animations/z5ysNOCcT8uCxCNuj5yeVjgnrz74OsWz9goxNzh4pDs/05ec6f77-849a-49bc-a686-a8666067f428.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"CJ9jc2Zbh8_sM1HXgieERtRMJW_LHCrz","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/z5ysNOCcT8uCxCNuj5yeVjgnrz74OsWz9goxNzh4pDs/05ec6f77-849a-49bc-a686-a8666067f428.png"}}};
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

var blocks = createGroup();

var player = createSprite(20, 380, 20, 20);
player.setAnimation("player");
player.scale = 0.1;

var wall1 = createSprite(150, 325, 300, 10);
wall1.shapeColor = "black";
var wall2 = createSprite(325, 140, 300, 10);
wall2.shapeColor = "black";

var inviswall1 = createSprite(320, 0, 20, 230);
inviswall1.shapeColor = ("lightblue");
var inviswall2 = createSprite(100, 0, 20, 230);
inviswall2.shapeColor = ("lightblue");

var hockeyplayer1 = createSprite(200, 200, 20, 20);
hockeyplayer1.setAnimation("hockeyplayer");
hockeyplayer1.scale = 0.06;
hockeyplayer1.setVelocity(0, 6);

var puck = createSprite(30, 170, 20, 20);
puck.setAnimation("puck");
puck.scale = 0.1;
puck.setVelocity(8, 0);

var hockeyplayer2 = createSprite(50, 290, 75, 20);
hockeyplayer2.setAnimation("hockeyplayer");
hockeyplayer2.scale = 0.06;
hockeyplayer2.setVelocity(0, 2);


var police1 = createSprite(180, 75, 20, 20);
police1.setAnimation("police");
police1.scale = 0.06;
police1.setVelocity(2, 0);
var police2 = createSprite(200, 15, 20, 20);
police2.setAnimation("police");
police2.scale = 0.06;
police2.setVelocity(0, 2);

var exit = createSprite(400, 50, 30, 50);
exit.shapeColor = "red";

var gamestate = "play";

var gameduration = 60000;
var seconds = 60;
var time = 60;

for (var i = 0, x = 100; i < 4; i++, x += 50) {
    var blocksA = createSprite(x, 380, 20, 20);
    var blocksB = createSprite(x, 350, 20, 20);
    blocks.add(blocksA);
    blocks.add(blocksB);
}

blocks.setColorEach("yellow");

function draw() {
    background("lightblue");
    drawSprites();
    createEdgeSprites();
    //Ftimer();

    if (keyDown(LEFT_ARROW)) {
        player.x -= 10;
    }

    if (keyDown(RIGHT_ARROW)) {
        player.x += 10;
    }

    if (keyDown(UP_ARROW)) {
        player.y -= 10;
    }


    if (keyDown(DOWN_ARROW)) {
        player.y += 10;
    }

    if (gamestate === "play") {

    }

    if (gamestate === "won") {
        fill("green");
        text("You Won!", 100, 200);
        player.destroy();
    }



    if (player.isTouching(police1)) {
        gamestate = "end";
    }

    if (player.isTouching(police2)) {
        gamestate = "end";
    }

    if (player.isTouching(hockeyplayer1)) {
        gamestate = "end";
    }

    if (player.isTouching(hockeyplayer2)) {
        gamestate = "end";
    }

    if (player.isTouching(puck)) {
        gamestate = "end";
    }

    if (player.isTouching(exit)) {
        gamestate = "won";
    }

    if (gamestate === "end") {
      textSize(40);
        fill("red");
        text("You lost!", 100, 200);
        player.destroy();
    }



    for (var index = 0; index < 7; index++) {
        var aBlock = blocks.get(index);
        if (mousePressedOver(aBlock)) {
            aBlock.destroy();
        }

    }
    
 countdown=World.seconds;
 textSize(20)
 text(countdown*-1+seconds, 200, 20);
 
 
    setTimeout(function() {
        gamestate = "end";
    }, gameduration);


    puck.bounceOff(edges);
    player.bounceOff(edges);
    player.bounceOff(wall1);
    player.bounceOff(wall2);
    player.collide(blocks);
    hockeyplayer1.bounceOff(wall1);
    hockeyplayer1.bounceOff(wall2);
    hockeyplayer2.bounceOff(wall1);
    hockeyplayer2.bounceOff(edges);
    police1.bounceOff(edges);
    police1.bounceOff(inviswall1);
    police1.bounceOff(inviswall2);
    police2.bounceOff(edges);
    police2.bounceOff(wall2);
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
