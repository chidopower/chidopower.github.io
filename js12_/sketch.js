// sketch.js

var cnv;

var dx;
var dy;

var SIZE, N, MYPIXEL;

var XC, X0, X1, X2, X3, W;
var YC, Y0, Y1, Y2, Y3, H;

var color;

var snake = [];
var apple;

var state, ready;

function setup() {

	color = {
		canvas: "#D7CEC7", 
		grid: "#C09F80", 
		snake: "#565656", 
		head: "green", 
		apple: "#a8001f"
	}

	getWxH();
	
	console.log(N, SIZE, W,H);
	console.log(X0, X1, X2, X3);
	console.log(Y0, Y1, Y2, Y3);
	
	cnv = createCanvas(windowWidth, windowHeight);
	centerCanvas();
	
	frameRate(4);
	
	ready = false;
	state = "welcome";

}

function draw() {
	
	background(color.canvas);
	
	console.log("STATE: ",state);

	if(state==="welcome"){
		
		state_welcome();
		
	}

	if(state==="play"){
		
		state_play();

	}

	if(state==="playing"){
		
		state_playing();
		
	}

	if(state==="gameover"){
		
		state_gameover();
		
	}

	if(state==="paused"){
		
		state_paused();
		
	}
  
}

function mouseClicked(){
	
	console.log("click", mouseX, mouseY);
	
	if(state==="welcome"){
		let fs = fullscreen();
		fullscreen(!fs);
		state="play";
		return false;
	}
	
	if(state==="play" && ready){
		// let fs = fullscreen();
		// fullscreen(!fs);
		state="playing";
		return false;
	}
	
}

function mousePressed() {
	
	console.log("touch", mouseX, mouseY);

	// if(state==="welcome"){
		
		// return false;
		
	// }

	// if(state==="play"){
		
		// return false;
		
	// }	
	
	if(state==="playing"){
		if(mouseX <= XC ){
			fill(color.apple);
		triangle(X1-SIZE/2, Y1+4*SIZE, 
				 X1-SIZE/2, Y2-4*SIZE, 
				 X0+SIZE/2, YC);
		}
		
		if(mouseX > XC ){
			fill(color.apple);
		triangle(X2+SIZE/2, Y1+4*SIZE, 
				 X2+SIZE/2, Y2-4*SIZE, 
				 X3-SIZE/2, YC);
		}
		
		if(snake[0].dir==="right" && mouseX <= XC){
			snake[0].dir = "up";
			return false;
		}

		if(snake[0].dir==="right" && mouseX > XC){
			snake[0].dir = "down";
			return false;
		}

		if(snake[0].dir==="left" && mouseX <= XC){
			snake[0].dir = "down";
			return false;
		}

		if(snake[0].dir==="left" && mouseX > XC){
			snake[0].dir = "up";
			return false;
		}

		if(snake[0].dir==="up" && mouseX <= XC){
			snake[0].dir = "left";
			return false;
		}

		if(snake[0].dir==="up" && mouseX > XC){
			snake[0].dir = "right";
			return false;
		}

		if(snake[0].dir==="down" && mouseX <= XC){
			snake[0].dir = "right";
			return false;
		}

		if(snake[0].dir==="down" && mouseX > XC){
			snake[0].dir = "left";
			return false;
		}
	}
}

function state_welcome(){
	
}


function state_play(){
	
	if(!ready){
		getWxH();
		
		console.log(N, SIZE, W,H);
		console.log(X0, X1, X2, X3);
		console.log(Y0, Y1, Y2, Y3);
		
		resizeCanvas(windowWidth, windowHeight);
		centerCanvas();

		snake = [];
		snake[0] = new Snake(X1+4*SIZE,        Y1+10*SIZE, "right", SIZE);
		snake[1] = new Snake(X1+4*SIZE-SIZE,   Y1+10*SIZE, "right", SIZE);
		snake[2] = new Snake(X1+4*SIZE-2*SIZE, Y1+10*SIZE, "right", SIZE);
		
		apple = new Apple();
		Apple_spawn();
		
		ready = true;
	}

}


function state_playing(){

	grid_draw();
	fps = Math.floor(frameRate());

	// if(frameCount>1 && frameCount%30===0){
	  // console.log(Math.floor(hero.xRel), Math.floor(hero.yRel), fps);
	  // console.log(hero);
	// }

	Snake_update();
	Snake_draw();
	Snake_eat();
	Apple_draw();
	
	Buttons_draw();
	
}


function Buttons_draw(){
	
	noFill();
	triangle(X1-SIZE/2, Y1+4*SIZE, 
	         X1-SIZE/2, Y2-4*SIZE, 
			 X0+SIZE/2, YC);
			 
			 
	triangle(X2+SIZE/2, Y1+4*SIZE, 
	         X2+SIZE/2, Y2-4*SIZE, 
			 X3-SIZE/2, YC);
			 
			 
}


function Snake(x, y, dir, size){
	this.x = x;
	this.y = y;
	this.dir = dir;
	this.size = size;
}

function Snake_update(){

	//autocollision
	
	for(let i=1; i<snake.length; i++){
		if(snake[0].x===snake[i].x && snake[0].y===snake[i].y){
			console.log("game over");
			// state="GAMEOVER";
			// frame=0;
		}
	}

	// teleport
	
	for(let i=0; i<snake.length; i++){
		if(snake[i].x >= X2-SIZE && snake[i].dir==="right"){
			snake[i].x = X1-SIZE;
		}
		if(snake[i].x <= X1 && snake[i].dir==="left"){
			snake[i].x = X2;
		}	
		if(snake[i].y >= Y2-SIZE && snake[i].dir==="down"){
			snake[i].y = Y1-SIZE;
		}	
		if(snake[i].y <= Y1 && snake[i].dir==="up"){
			snake[i].y = Y2;
		}				
	}	


	// move, head

	for(let i=0; i<snake.length; i++){
		
		if(snake[i].dir==="right")
			snake[i].x += SIZE;

		if(snake[i].dir==="left")
			snake[i].x -= SIZE;
		
		if(snake[i].dir==="up")
			snake[i].y -= SIZE;

		if(snake[i].dir==="down")
			snake[i].y += SIZE;
		
	}
	
	
	// move, tail
	
	let k=snake.length-1;
	while(1){
		//console.log(k);
		snake[k].dir = snake[k-1].dir; 
		if(k===1)
			break;
		k--;
	}	

}

function Snake_eat(){
	
	if(snake[0].x===apple.x && snake[0].y===apple.y){
		// console.log("eat");
		// if(speed >= 10)
			// speed--;
		
		Snake_grows();
		Apple_spawn();
		
	}
	
}

function Snake_grows(){

	if(snake[snake.length-1].dir==="right"){
		snake.push(new Snake(1, 1, "right", SIZE));
		snake[snake.length-1].x = snake[snake.length-2].x - SIZE;
		snake[snake.length-1].y = snake[snake.length-2].y;
	}

	if(snake[snake.length-1].dir==="left"){
		snake.push(new Snake(1, 1, "left", SIZE));
		snake[snake.length-1].x = snake[snake.length-2].x + SIZE;
		snake[snake.length-1].y = snake[snake.length-2].y;
	}

	if(snake[snake.length-1].dir==="up"){
		snake.push(new Snake(1, 1, "up", SIZE));
		snake[snake.length-1].x = snake[snake.length-2].x;
		snake[snake.length-1].y = snake[snake.length-2].y + SIZE;
	}

	if(snake[snake.length-1].dir==="down"){
		snake.push(new Snake(1, 1, "down", SIZE));
		snake[snake.length-1].x = snake[snake.length-2].x;
		snake[snake.length-1].y = snake[snake.length-2].y - SIZE;
	}

	// console.log("snake length", snake.length);
	
}

function Snake_draw(){
	
	fill(color.head);
	rect(snake[0].x, snake[0].y, snake[0].size, snake[0].size);
	
	fill(color.snake);
	for(let i=1; i<snake.length; i++){
		rect(snake[i].x, snake[i].y, snake[i].size, snake[i].size);
	}
	
}

function Apple(){
	this.x = 0;
	this.y = 0;
	this.size = 1;
	this.c = "black";
}

function Apple_spawn(){
	
	
	apple.size = SIZE;
	apple.c = color.apple;
	while(1){
		let ok = 0;
		console.log(ok);
		apple.x = X1+irand(2,N-1)*SIZE;
		apple.y = Y1+irand(2,N-1)*SIZE;
		for(let i=0; i<snake.length; i++){
			if(apple.x!==snake[i].x && apple.y!==snake[i].y){
				ok++;
			}
		}
		if(ok>=snake.length)
			break;
	}
	// console.log(apple);
}

function Apple_draw(){
	
	fill(color.apple);
	rect(apple.x, apple.y, apple.size, apple.size);

}



function hero_update(){
	
	hero.x += dx;
	hero.y += dy;

	hero.xRel = hero.x*100/X2;
	hero.yRel = hero.y*100/Y2;

	if(hero.xRel<=0) hero.xRel=0;
	if(hero.xRel>=100) hero.xRel=100;
	if(hero.yRel<=0) hero.yRel=0;
	if(hero.yRel>=100) hero.yRel=100;

	// east & west walls

	if(hero.x + hero.size > X2) {
		hero.x = X2 - hero.size;
		dx = dx * -1;
		// console.log("X:", hero.xRel);
	}
	else if(hero.x < X1) {
		hero.x = X1;
		dx = dx * -1;
		// console.log("X:", hero.xRel);
	}
	
	// north & south walls
	
	if(hero.y+hero.size > Y2) {
		hero.y = Y2 - hero.size;
		dy = dy * -1;
		// console.log("Y:", hero.yRel);
	}
	else if(hero.y < Y1) {
		hero.y = Y1;
		dy = dy * -1;
		// console.log("Y:", hero.yRel);
	}

}


function hero_draw(){
	fill(color.apple);
	rect(hero.x, hero.y, hero.size, hero.size);
}

function grid_draw(){
	
	stroke(color.grid);
	
	fill(color.canvas);
	rect(X1, Y1, W, H);

	for(let i=0; i<N; i++)
		line(X1+i*SIZE,  Y1+0,      X1+i*SIZE, Y1+H);
	for(let i=0; i<N; i++)
		line(X1+0     ,  Y1+i*SIZE, X1+W     , Y1+i*SIZE); 	
}


function grid_draw_(){
	
	stroke(color.grid);
	
	fill(color.canvas);
	rect(X1, Y1, W, H);

	for(let i=0; i<2*N; i++)
		line(X1+i*SIZE/2,  Y1+0,      X1+i*SIZE/2, Y1+H);
	for(let i=0; i<2*N; i++)
		line(X1+0     ,  Y1+i*SIZE/2, X1+W     , Y1+i*SIZE/2); 	
}


function centerCanvas() {
	let x = (windowWidth - width) / 2;
	let y = (windowHeight - height) / 2;
	cnv.position(x, y);
}


function getWxH_(){
	
	N = 16;
	
	MYPIXEL = 1;
	
	SIZE = N*MYPIXEL;

	W = N*SIZE;
	H = N*SIZE;
	
	X0 = 0;
	X1 = Math.floor( (windowWidth - W)/2 );
	X2 = X1 + W;
	X3 = windowWidth;
	
	Y0 = 0;
	Y1 = Math.floor( (windowHeight - H)/2 );
	Y2 = Y1 + H;
	Y3 = windowHeight;

	
}

function getWxH(){
	
	N=20;
	
	if(windowWidth > windowHeight){
	
		SIZE = Math.floor(windowHeight/N);

		while(1){
			if(SIZE%2===0)
				break;
			else
				SIZE--;
		}

		W = N*SIZE;
		H = N*SIZE;
		
		X0 = 0;
		X1 = Math.floor( (windowWidth - W)/2 );
		X2 = X1 + W;
		X3 = windowWidth;
		XC = Math.floor(X3/2);
		
		Y0 = 0;
		Y1 = Math.floor( (windowHeight - H)/2 );
		Y2 = Y1 + H;
		Y3 = windowHeight;
		YC = Math.floor(Y3/2);
		
	}else{
		
		SIZE = Math.floor(windowWidth/N);
		
		W = N*SIZE;
		H = N*SIZE;
		
		X0 = 0;
		X1 = Math.floor( (windowWidth - W)/2 );
		X2 = X1 + W;
		X3 = windowWidth;
		
		Y0 = 0;
		Y1 = Math.floor( (windowHeight - H)/2 );
		Y2 = Y1 + H;
		Y3 = windowHeight;
		
	}
	
	// while(1){
		// H = N*SIZE;
		// W = N*SIZE;	
		// if(W<=windowWidth)
			// break;
		// else
			// SIZE--;
	// }
	
}




// function windowResized() {
	// getWxH();
	// resizeCanvas(windowWidth, windowHeight);
	// centerCanvas();
// }

function irand(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}



