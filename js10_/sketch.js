// sketch.js

var cnv;

var xSpeed;
var ySpeed;
var xPosition;
var yPosition;
var logoSize;

var xRel=1;
var yRel=1;

var SIZE;
var H;
var W;


function centerCanvas() {
	
	getWxH();
	
	console.log(W, H, SIZE);
	resizeCanvas(W,H);
	logoSize = SIZE;
	xSpeed = SIZE;
	ySpeed = SIZE;	
	
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function getWxH(){
	SIZE = Math.floor(windowHeight/40);
	while(1){
		H = 40*SIZE;
		W = 30*SIZE;	
		if(W<=windowWidth)
			break;
		else
			SIZE--;
	}
}


function setup() {
	
	angleMode(DEGREES);

	getWxH();
	
	logoSize = SIZE;
	
	console.log(W, H, SIZE);
	
	cnv = createCanvas(W, H);
	centerCanvas();

	xSpeed = SIZE;
	ySpeed = SIZE;	

	xPosition = SIZE;
	yPosition = SIZE;
	
	frameRate(5);
}

function windowResized() {
  centerCanvas();
  
  xPosition = xRel*W/100;
  yPosition = yRel*H/100;
  
  rotate(180);
  
  // xSpeed *= -1;
  // ySpeed *= -1;
  
}


function draw() {
  background(0);
  rect(xPosition, yPosition, logoSize, logoSize);
  xPosition += xSpeed;
  yPosition += ySpeed;
  
  xRel = xPosition*100/W;
  yRel = yPosition*100/H;
  
  if(xRel<=0) xRel=0;
  if(xRel>=100) xRel=100;
  if(yRel<=0) yRel=0;
  if(yRel>=100) yRel=100;

  
  fps = Math.floor(frameRate());
  
  if(frameCount>1 && frameCount%30===0){
	  console.log(Math.floor(xRel), Math.floor(yRel), fps);
  }
  

  
  
  if(xPosition > (width - logoSize)) {
  	xPosition = width - logoSize;
    	xSpeed = xSpeed * -1;
      fill(random(0, 255),
       random(0, 255),
       random(0, 255));
	   console.log("X:", xRel);
  }
  else if(xPosition < 0) {
  	xPosition = 0;
    	xSpeed = xSpeed * -1;
      fill(random(0, 255),
       random(0, 255),
       random(0, 255));
	   console.log("X:", xRel);
  }
  if(yPosition > (height - logoSize)) {
  	yPosition = height - logoSize;
    	ySpeed = ySpeed * -1;
      fill(random(0, 255),
       random(0, 255),
       random(0, 255));
	   console.log("Y:", yRel);
  }
  else if(yPosition < 0) {
  	yPosition = 0;
    	ySpeed = ySpeed * -1;
      fill(random(0, 255),
       random(0, 255),
       random(0, 255));
	   console.log("Y:", yRel);
  }
  
  
	stroke("gray");
	for(let i=0; i<W; i++)
		line(i*SIZE, 0, i*SIZE, H);
	for(let i=0; i<H; i++)
		line(0, i*SIZE, W, i*SIZE);  
  
}
