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
    var x = 300
    var y = 200
    fill(hairColor);
  arc(300, 200, x + 50 , x + 50, 2.5, 1);//hair
    
    fill("white");
    circle(300, 200, 250);//face
    
    fill("black");
    triangle(x + 80, y - 10, x + 30, y - 30, x + 180, y - 100);
    
    triangle(x - 10, y - 35, x - 190, y - 150, x - 70 , 200);
    
    triangle(300,200, x - 50, y + 50, x + 50,y + 50)
    /*ellipse (200, 100, 10, 150);*/ 

}

