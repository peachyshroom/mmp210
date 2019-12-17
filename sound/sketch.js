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
    var sp = "or do uu mean spoopy time.";
    
     
    
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
    
    textAlign(LEFT);
    textSize(20);
    fill('green');
    textStyle(BOLD);
    stroke('black');
    strokeWeight(20);
    textFont("futura");
    /*text("or do uu mean spoopy time.", 20, 340);*/
        
    if (mouseX > width/2) {
        text(sp, 300, 120 );
    }
    
    if (mouseX < width/2) {
        text(sp, 120, 20 );
    }
    
    if (mouseY > height/2){ 
        text(sp, 20, 340);   
    }
    
    if (mouseY > height/2){ 
        text(sp,380 , 340);   
    }
    
}