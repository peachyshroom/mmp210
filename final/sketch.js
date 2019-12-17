var fft;
var electro;
var filter;
var filterFreq;
var filterRes;
var serial;
var serialAvailable;
var portName = "COM4"; //needs to change based on p5 serial port app
var xaxis = 0, yaxis = 0, zaxis = 0, buttonState;
function preload() {
    electro = loadSound('electro.wav');
}
function setup() {
	createCanvas(1920, 1080);
    filter = new p5.LowPass();
    electro.disconnect();
    electro.connect(filter);
    fft = new p5.FFT();
	serial = new p5.SerialPort();
	serial.on('connected', serverConnected);
	serial.on('open', portOpen);
	serial.on('data', serialEvent);
	serial.on('close', portClose);
	serial.on('error', serialError);
	
	serial.open(portName);
	
}

function serverConnected() {
	console.log('connected');
}
function portOpen(){
	console.log('the serial port opened');
    serialAvailable = true;
}
function portClose(){
	console.log('the serial port closed');
    serialAvailable = false;
}
function serialError(){
	console.log('error');
    serialAvailable = false;
}
function serialEvent(){
	var currentString = serial.readLine();
	trim(currentString);
	if(!currentString) {
		return;
	}
//	sensorValue = currentString;
    
	xaxis = currentString.split(',')[0]; 
	yaxis = currentString.split(',')[1];
	zaxis = currentString.split(',')[2];
	buttonState = currentString.split(',')[3];
}
function draw() {
//    if (serialAvailable) {
	background("#00DBC4");
    var colorone = map(xaxis, 0, 1023, 0, 255);
    fill(colorone,135,135);   //GOOD COLOR
    circle(200, 150, 250);
    circle(550,800,160);
    circle(0, 700, 300);
    circle(1350,600, 100);
    circle(1300,100,300);
    circle(1800, 300, 200);
    circle(1900, 1000, 400);
    circle(800, 350, 200);
    var colortwo = map(yaxis,0 , 1023, 0, 255);
    fill(135,colortwo,135);
    rect(350, 380, 300, 200);
    rect(1600, 0, 300, 100);
    rect(1300, 300, 300, 100);
    rect(1200, 800, 300, 400);
    rect(800, 50, 50, 100);
    rect(370, 0, 100, 100);
    rect(1000, 300, 100, 100);
    rect(800, 500, 100, 300);
    rect(0, 900, 300, 300);
    var colorthree = map(zaxis, 0, 1023, 0, 255)
    fill(colorthree,75,60);
    triangle(0, 250, 0, 450, 300, 500);
    triangle(600, 52, 400, 300, 700, 200);
    triangle(950, 52, 1000, 100, 950, 200);
    triangle(1900, 550, 1600, 700, 1500, 550);
    triangle(200, 700, 400, 850, 400, 650);
    triangle(1200, 400, 1100, 700, 1000, 500);
    triangle(900, 900, 1000, 1000, 600, 1080);
    triangle(1700, 200, 1500, 100, 1600, 200);
		
	filterFreq = map(xaxis, 0, width, 10, 22050);
    filterRes = map(mouseY, 0, height, 15, 5);
    filter.set(filterFreq, filterRes);
    var spectrum = fft.analyze();    
    fill (colorone, colortwo, colorthree);
    noStroke();
    for (let i = 0; i < spectrum.length; i++) {
        let x = map(i, 0, spectrum.length, 0, width);
        let h = -height + map(spectrum[i], 0, 255, height, 0);
        rect(x, height, width / spectrum.length, h);
    }

         var pan = map(yaxis, 0, width, -1, 1);
         pan = constrain(pan, -1, 1);
         electro.pan(pan);
   
	
    	var speed = map(zaxis, 0.1, height, 0, 2);
		speed =constrain(speed, 0.01, 4);
		electro.rate(speed);
//    ellipse(300, 300, mouseX, mouseY);
  
    if (mouseIsPressed && !electro.isPlaying()){
        electro.play();
    }
   
	}
//	}else { 
//	background(mouseX, mouseY, 60);
//    fill('white');
//	filterFreq = map(mouseX, 0, width, 10, 22050);
//    filterRes = map(mouseY, 0, height, 15, 5);
//    filter.set(filterFreq, filterRes);
//    var spectrum = fft.analyze();    
//    fill (0);
//    noStroke();
//    for (let i = 0; i < spectrum.length; i++) {
//        let x = map(i, 0, spectrum.length, 0, width);
//        let h = -height + map(spectrum[i], 0, 255, height, 0);
//        rect(x, height, width / spectrum.length, h);
//    }
//    var pan = map(mouseX, 0, width, -1, 1);
//	pan = constrain(pan, -1, 1);
//	electro.pan(pan);
//		
//
//    ellipse(300, 300, mouseX, mouseY);
//    if (mouseIsPressed) {
//        electro.play();
//    }
//    
//    }
//
//}

// this is a comment