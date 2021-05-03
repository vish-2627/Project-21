var canvas;
var music;
var blue;
var yellow;
var pink;
var green;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    blue = createSprite(100,550,190,20);
    blue.shapeColor = rgb(0,0,255);
    yellow = createSprite(300,550,190,20);
    yellow.shapeColor = rgb(255,255,0);
    pink = createSprite(500,550,190,20);
    pink.shapeColor = rgb(255,100,203);
    green = createSprite(700,550,190,20);
    green.shapeColor = rgb(0,255,0);

    ball = createSprite(random(20,720),50,30,30);
    ball.shapeColor = rgb(255,255,255);


    //create box sprite and give velocity

}

function draw() {
    background("black");
    
    createEdgeSprites();
    ball.bounceOff(edges);
    ball.velocityX=2;
    ball.velocityY=2;
    
    


    //add condition to check if box touching surface and make it box
    drawSprites();
}
