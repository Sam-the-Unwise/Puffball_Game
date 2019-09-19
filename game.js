var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer({width: 1000, height: 500, backgroundColor: 0x4D0000});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

// ADD ASTEROIDS
var asteroid_1 = new PIXI.Sprite(PIXI.Texture.from("/Sprites/Asteroid.png")),
    asteroid_2 = new PIXI.Sprite(PIXI.Texture.from("/Sprites/Asteroid.png"))
    asteroid_3 = new PIXI.Sprite(PIXI.Texture.from("/Sprites/Asteroid.png"))

stage.addChild(asteroid_1)
stage.addChild(asteroid_2)
stage.addChild(asteroid_3)

asteroid_1.position.x = 40;
asteroid_1.position.y = 60;
asteroid_1.anchor.x = 0.5;
asteroid_1.anchor.y = 0.5;
asteroid_1.scale.set(2, 2);

asteroid_2.position.x = 550;
asteroid_2.position.y = 90;
asteroid_2.anchor.x = 0.5;
asteroid_2.anchor.y = 0.5;
asteroid_2.scale.set(4, 4);

asteroid_3.position.x = 330;
asteroid_3.position.y = 300;
asteroid_3.anchor.x = 0.5;
asteroid_3.anchor.y = 0.5;
asteroid_3.scale.set(3, 3)

//ADD PUFFBALL ELEMENTS
var head = new PIXI.Sprite(PIXI.Texture.from("Sprites/Puff_Body.png")),
    antenna = new PIXI.Sprite(PIXI.Texture.from("Sprites/Puff_Antenna.png")),
    eyes = new PIXI.Sprite(PIXI.Texture.from("Sprites/Puff_Eyes.png"));

var laser1 = new PIXI.Sprite(PIXI.Texture.from("Sprites/Sprite_Laser.png")),
    laser2 = new PIXI.Sprite(PIXI.Texture.from("Sprites/Sprite_Laser.png")),
    laser3 = new PIXI.Sprite(PIXI.Texture.from("Sprites/Sprite_Laser.png"));

var puffball = new PIXI.Container();
puffball.position.x = renderer.width/2;
puffball.position.y = renderer.height - 40;

stage.addChild(laser1);
stage.addChild(laser2);
stage.addChild(laser3);

laser1.position.x = 495
laser1.position.y = 445;
laser1.scale.set(2, 2)

laser2.position.x = 495
laser2.position.y = 445;
laser2.scale.set(2, 2)

laser3.position.x = 495
laser3.position.y = 445;
laser3.scale.set(2, 2)

stage.addChild(puffball);

puffball.addChild(head);
head.position.x = 0;
head.position.y = .18;
head.anchor.x = 0;
head.anchor.y = .18;
head.scale.set(2, 2)

puffball.addChild(antenna);
antenna.position.x = -.49;
antenna.position.y = .2;
antenna.anchor.x = -.49;
antenna.anchor.y = .5;
antenna.scale.set(1.5, 1.5)

puffball.addChild(eyes);
eyes.position.x = -.2;
eyes.position.y = .1;
eyes.anchor.x = -.2;
eyes.anchor.y = .1;
eyes.scale.set(1.5, 1.5);


//CREATE HANDLER FUNCTIONS
function keydownHandler(e)
{
    if (e.keyCode == 65) //A
    {
        puffball.position.x -= 10;
        laser.position.x -= 10;
    }

    if (e.keyCode == 68) //D
    {
        puffball.position.x += 10;
        laser.position.x += 10;
    }

    if (e.keyCode == 87) // W
    {
        createjs.Tween.get(laser).to({y: -1000}, 1500)
        //laser.position.y -= 40;
    }
}

function animate()
{
    requestAnimationFrame(animate);
    // asteroid_1.rotation += .1
    // asteroid_2.rotation += .1
    // asteroid_3.rotation += .1
    renderer.render(stage);
}

document.addEventListener('keydown', keydownHandler);

animate()