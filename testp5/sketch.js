/*
//--------------------------------------------
let rectX = 0;
//let fr = 60; //starting FPS
let clr;
let speed = 1;

function setup() {
  background(200);
  //frameRate(fr); 
  clr = color(255, 0, 0);
}

function draw() {
  background(200);
  rectX = rectX + speed*(deltaTime/100);
  
  console.log(deltaTime, rectX);

  if (rectX >= width) {
      clr = color(255, 0, 0);
      //frameRate(fr); 
    rectX = 0;
  }
  fill(clr);
  rect(rectX, 40, 20, 20);
}
*/



/*
//--------------------------------------------
function setup() {
  // We are still calling createCanvas like in the past, but now 
  // we are storing the result as a variable. This way we can 
  // call methods of the element, to set the position for instance.
  let canvas = createCanvas(800, 480);

  // Here we call methods of each element to set the position 
  // and id, try changing these values.
  // Use the inspector to look at the HTML generated from this 
  // code when you load the sketch in your browser.
  canvas.position(300, 50);
  canvas.class("lemon");
}

function draw() {
  // These commands are applied to the graphics canvas as normal.
  background(220, 180, 200);
  ellipse(width/2, height/2, 100, 100);
  ellipse(width/4, height/2, 50, 50);
}
*/


/*
//--------------------------------------------
var x =   [];
var y =   [];
var xSpeed =   [];
var ySpeed =   [];
var size =   [];
var r =   [];
var g =   [];
var b =   [];

function setup() {

  let canvas = createCanvas(800, 480);
  canvas.class("lemon");
}

function draw() {

  background("lemon");

  for (i = 0; i < x.length; i++) {

    x[i] += xSpeed[i];
    if (x[i]-size[i]/2.0 < 0 || x[i] > width-size[i]/2.0) {
      xSpeed[i] *= -1;
    }

    y[i] += ySpeed[i];
    if (y[i]-size[i]/2.0 < 0 || y[i] > height-size[i]/2.0) {
      ySpeed[i] *= -1;
    }

    fill(r[i], g[i], b[i]);
    ellipse(x[i], y[i], size[i], size[i]);
  }
}

function mousePressed() {
  x = append(x, mouseX);
  y = append(y, mouseY);
  xSpeed = append(xSpeed, random(-5, 5));
  ySpeed = append(ySpeed, random(-5, 5));
  size = append(size, random(80, 100));
  r = append(r, random(256));
  g = append(g, random(256));
  b = append(b, random(256));
}
*/


//--------------------------------------------
let x = 50;
let y = 50;
let xSpeed = 30;
let ySpeed = 30;

function setup() {
  createCanvas(800, 480);
  
}

function mousePressed() {
  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

function draw() {
  background(64);
  ellipse(x, y, 100, 100);

  x += xSpeed*(deltaTime/100);
  y += ySpeed*(deltaTime/100);
  
  if (x-50 < 0 || x > width-50) {
    xSpeed *= -1;
  }

  if (y-50 < 0  || y > height-50) {
    ySpeed *= -1;
  }
}
