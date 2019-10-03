/*
    Meme version 1 
    10.3.2019
*/ 
var kitten;

function preload(){
    kitten = loadImage("spookykitten.jpg");
}

function setup(){
    createCanvas(640,360)
}

function draw(){
    background("orange");
    
    image(kitten, 450, 100, 200, 200);
    image(kitten, 150, 100, 200, 200);
    image(kitten, 0, 100, 200, 200);
    image(kitten, 300, 100, 200, 200);
    
    textAlign(LEFT);
    textSize(100);
    fill('purple');
    textStyle(BOLD);
    stroke('black');
    strokeWeight(10);
    textFont("Grenze");
    text("spooky time", 20, 100);

    
    
}