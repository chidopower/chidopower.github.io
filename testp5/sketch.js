var x =   [];
var y =   [];
var xSpeed =   [];
var ySpeed =   [];
var size =   [];
var r =   [];
var g =   [];
var b =   [];

function setup() {
  createCanvas(800, 480);
}

function draw() {

  background(200);

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


/*
let x = 200;
let y = 100;
let xSpeed = 3;
let ySpeed = 3;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(64);
  ellipse(x, y, 100, 100);

  x += xSpeed;
  y += ySpeed;
  
  if (x-50 < 0 || x > width-50) {
    xSpeed *= -1;
  }

  if (y-50 < 0  || y > height-50) {
    ySpeed *= -1;
  }
}
*/