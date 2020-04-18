//--------------------------------------------
var x =   [];
var y =   [];
var xSpeed =   [];
var ySpeed =   [];
var cl = [];
var R = [];
var d;

function setup() {

	createCanvas(1000, 600);
	background(200);
	frameRate(30);
	
	probContagio = 0.5;

	for(i=0; i<100; i++){
		R[i] = 5;
		x[i] = random(0,width-R[i]);
		y[i] = random(0,height-R[i]);
		xSpeed[i] = 0.1;
		ySpeed[i] = 0.1;
		if(i===0) 
			cl[i] = "red";
		else
			cl[i] = "white";
	}	

}

function draw() {

	background(200);
	
	//virus
	for(i=0; i<x.length; i++){
		for(j=0; j<x.length; j++){
			
			if(i!==j){
				d=dist(x[i], y[i], x[j], y[j]);
				if(d < (R[i]+R[j]) ){
					if(cl[i]==="red" && cl[j]==="white"){
						cl[j]="red";		
						
					}
				}
				
			}

		}
	}
  
	//move
  for (i = 0; i < x.length; i++) {
	  
	  if(random()<.5)
		  xSpeed[i] = xSpeed[i]*(-1);
	  if(random()<.5)
		  ySpeed[i] = ySpeed[i]*(-1);	  
		  
		x[i] += xSpeed[i]*deltaTime;
		y[i] += ySpeed[i]*deltaTime;

		if (x[i]-R[i] < 0) {
			xSpeed[i] *= -1;
			x[i]=R[i];
		}

		if (x[i] > width-R[i]) {
			xSpeed[i] *= -1;
			x[i]=width-R[i];
		}

		if (y[i]-R[i] < 0 ) {
			ySpeed[i] *= -1;
			y[i]=R[i];
		}

		if ( y[i] > height-R[i]) {
			ySpeed[i] *= -1;
			y[i]=height-R[i];
		}

  }
  
		
				
				
				
  
	/*for(i=2; i<x.length; i++){
		
		d=dist(x[0], y[0], x[i], y[i]);
		if( d < R[0]+R[i]) cl[i] = "blue";

		d=dist(x[1], y[1], x[i], y[i]);
		if( d < R[1]+R[i]) cl[i] = "red";
	}*/


  //draw
  for (i = 0; i < x.length; i++) {
	strokeWeight(1);
	if(i===0)
		fill("magenta");
	else
		fill(cl[i]);
	ellipse(x[i], y[i], 2*R[i]);
  }
  
  /*noFill();
  strokeWeight(4);
  rect(0,0,width,height);
  rect(0,0,width-200,height)*/
  
}


/*
function mousePressed() {
	x = append(x, mouseX);
	y = append(y, mouseY);
	cl = append(cl, "white");
	xSpeed = append(xSpeed, 0.1);
	ySpeed = append(ySpeed, 0.1);
	R = append(R, 15);
}*/


