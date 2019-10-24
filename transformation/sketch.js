/*
    transformation
*/ 
var kitten;
var textRotation = 0;

function preload(){
    kitten = loadImage("spookykitten.jpg");
}

function setup(){
    createCanvas(640,360)
}

function draw(){
    background("orange");
    var sp = "or do uu mean spoopy time.";
    var s = 35;
    var speed = 2; 
     
    
    image(kitten, 450, 100, 200, 200);
    image(kitten, 150, 100, 200, 200);
    image(kitten, 0, 100, 200, 200);
    image(kitten, 300, 100, 200, 200);
    
     textAlign(LEFT);
    textSize(20);
    fill('green');
    textStyle(BOLD);
    stroke('black');
    strokeWeight(20);
    textFont("futura");
    text(sp, 20, 340);
    /*text("or do uu mean spoopy time.", 20, 340);*/
        
    
    translate(width/2, height/2);
    rotate(textRotation);
    textRotation += PI * 0.001;
    
    
    
    textAlign(LEFT);
    textSize(s);
    fill('purple');
    textStyle(BOLD);
    stroke('black');
    strokeWeight(10);
    textFont("Grenze");
    text("spooky time", 20, 100);
    /*text += speed;*/
    
    
    translate(width/2, height/2);
    rotate(textRotation);
    textRotation += PI * 0.001;
    
      
    
    textAlign(RIGHT);
    textSize(s);
    fill('purple');
    textStyle(BOLD);
    stroke('black');
    strokeWeight(10);
    textFont("Grenze");
    text("spooky time", 20, 100);
    
    translate(width/2, height/2);
    rotate(textRotation);
    textRotation += PI * 0.001;
    
      
    
    textAlign(RIGHT);
    textSize(s);
    fill('purple');
    textStyle(BOLD);
    stroke('black');
    strokeWeight(10);
    textFont("Grenze");
    text("spooky time", 20, 100);
    
     
    translate(width/2, height/2);
    rotate(textRotation);
    textRotation += PI * 0.001;
    
    textAlign(RIGHT);
    textSize(s);
    fill('purple');
    textStyle(BOLD);
    stroke('black');
    strokeWeight(10);
    textFont("Grenze");
    text("spooky time", 20, 100);
    
     
    translate(width/2, height/2);
    rotate(textRotation);
    textRotation += PI * 0.001;
    
      
    
    textAlign(CENTER);
    textSize(s);
    fill('purple');
    textStyle(BOLD);
    stroke('black');
    strokeWeight(10);
    textFont("Grenze");
    text("spooky time", 20, 100);
    
    
    translate(width/2, height/2);
    rotate(textRotation);
    textRotation += PI * 0.00001;
    
      
    
    textAlign(CENTER);
    textSize(s);
    fill('purple');
    textStyle(BOLD);
    stroke('black');
    strokeWeight(10);
    textFont("Grenze");
    text("spooky time", 20, 100);
    
    
    
    translate(500, 250);
    rotate(textRotation);
    textRotation += PI * 0.00001;
    
      
    
    textAlign(0,0);
    textSize(s);
    fill('purple');
    textStyle(BOLD);
    stroke('black');
    strokeWeight(10);
    textFont("Grenze");
    text("spooky time", 20, 100);
    
     translate(500, 250);
    rotate(textRotation);
    textRotation += PI * 0.00001;
    
      
    
    textAlign(0,0);
    textSize(s);
    fill('purple');
    textStyle(BOLD);
    stroke('black');
    strokeWeight(10);
    textFont("Grenze");
    text("spooky time", 20, 100);
    
    
    
    
    
   
  
    
}