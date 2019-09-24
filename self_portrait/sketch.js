/*comments*/ 
function setup () {
  createCanvas(600, 400);  
}

function draw() {
    background("#00dbc4");
    /*fill();
    noFill();
    stroke();
    noStroke();
    strokeWeight();*/ 
    var hairColor = "#ff4dc6"
    fill(hairColor);
  arc(300, 200, 350, 350, 2.5, 1);
    
    fill("white");
    circle(300, 200, 250);//face
    
    fill("black");
    triangle(380, 190, 330, 170, 480, 100);
    
    triangle(290, 165, 110, 50, 230, 200);
    
    triangle(300,200, 250, 250, 350,250)
    /*ellipse (200, 100, 10, 150);*/ 

}

