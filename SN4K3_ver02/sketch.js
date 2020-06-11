// sketch.js

var cnv, SIZE, N, MYPIXEL, myframe;

var XC, X0, X1, X2, X3, W;
var YC, Y0, Y1, Y2, Y3, H;

var color, state, ready_for_playing;

var snake = [];
var apple, score;

var orientation_game, orientation_is_ok, orientation_now, is_fullscreen;

var button_restart = new Clickable();

function setup() {

	color = {
		canvas: "#D7CEC7", 
		grid: "#C09F80", 
		snake: "#565656", 
		head: "green", 
		apple: "#a8001f"
	}
	
	orientation_game = "landscape";
	
	cnv = createCanvas(windowWidth, windowHeight);
	centerCanvas();
	
	frameRate(4);
	
	ready_for_playing = false;
	myframe = 0;
	
	get_orientation();
	
	is_fullscreen = false;
	
	if(orientation_is_ok){
		myframe = 0;
		state = "welcome";
	}else{
		myframe = 0;
		state = "rotateplease";
	}

}

function draw() {
	
	// background(color.canvas);
	
	// console.log(state, orientation_is_ok, myframe);
	console.log(state);
	
	get_orientation();
	
	
	if(state==="welcome" && !orientation_is_ok){
		
		myframe = 0;
		state = "rotateplease";
		
	}
	
	
	if(state==="playing" && !orientation_is_ok){
		
		myframe = 0;
		state = "rotateplease";
		
	}
	
	if(state==="rotateplease" && orientation_is_ok){
		
		if(ready_for_playing){
			myframe = 0;
			state = "paused";
		}else{
			myframe = 0;
			state = "welcome";
		}
	}
	
	if(state==="paused" && !orientation_is_ok){
		
		myframe = 0;
		state = "rotateplease";
		
	}
	
	if(state==="play" && ready_for_playing){
		myframe = 0;
		state = "playing";
	}

	states();
  
}

function mouseClicked(){
	
	// console.log("click", mouseX, mouseY);
	
	if(state==="welcome"){
		
		if(!is_fullscreen){
			let fs = fullscreen();
			fullscreen(!fs);
			is_fullscreen = true;
		}		

		myframe = 0;
		state = "play";
		return false;
	}
	
	// if(state==="play" && ready_for_playing){
		// myframe = 0;
		// state = "playing";
		// return false;
	// }


	if(state==="paused"){
		
		myframe = 0;
		state = "playing";
		return false;
	}

	// if(state==="gameover"){
		
		// myframe = 0;
		// state = "welcome";
		// ready_for_playing = false;
		// return false;
		
	// }

}

function mousePressed() {	
	
	if(state==="playing"){
		
		if(mouseX <= XC ){
			fill(color.apple);
			rect(X0, Y0, X1-X0, Y3-Y0);
		}
		
		if(mouseX > XC ){
			fill(color.apple);
			rect(X2, Y0, X3-X2, Y3-Y0);
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

function keyPressed() {
	
	// BACKSPACE, DELETE, ENTER, RETURN, TAB, ESCAPE, SHIFT, 
	// CONTROL, OPTION, ALT, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW
	
	if(state==="playing"){

		if(snake[0].dir==="right" && keyCode===LEFT_ARROW){
			snake[0].dir = "up";
			return false;
		}

		if(snake[0].dir==="right" && keyCode===RIGHT_ARROW){
			snake[0].dir = "down";
			return false;
		}

		if(snake[0].dir==="left" && keyCode===LEFT_ARROW){
			snake[0].dir = "down";
			return false;
		}

		if(snake[0].dir==="left" && keyCode===RIGHT_ARROW){
			snake[0].dir = "up";
			return false;
		}

		if(snake[0].dir==="up" && keyCode===LEFT_ARROW){
			snake[0].dir = "left";
			return false;
		}

		if(snake[0].dir==="up" && keyCode===RIGHT_ARROW){
			snake[0].dir = "right";
			return false;
		}

		if(snake[0].dir==="down" && keyCode===LEFT_ARROW){
			snake[0].dir = "right";
			return false;
		}

		if(snake[0].dir==="down" && keyCode===RIGHT_ARROW){
			snake[0].dir = "left";
			return false;
		}

	}
	

	return false; // prevent default
}

function states(){
	
	if(state==="rotateplease")
		state_rotateplease();

	if(state==="welcome")
		state_welcome();

	if(state==="play")
		state_play();

	if(state==="playing")
		state_playing();

	if(state==="gameover")
		state_gameover();

	if(state==="paused")
		state_paused();
	
}

function state_rotateplease(){
	
	if(myframe <=1 ){
		
		background(color.canvas);
		
		getWxH();
		resizeCanvas(windowWidth, windowHeight);
		centerCanvas();
		
		// console.log("CENTER", XC, YC);
		
		// textStyle(BOLD);
		// textSize(24);
		// textAlign(CENTER, BASELINE);	
		text('ROTATE', XC, YC);
		// text('DEVICE, PLEASE', XC, YC+2*SIZE);
		
		rectMode(CENTER);
		stroke("black");
		strokeWeight(4);
		fill("white");
		rect(XC, YC, 6*SIZE, 3*SIZE);
		fill("black");
		rect(XC+3*SIZE, YC, SIZE, 3*SIZE);
		fill("white");
		circle(XC + 3*SIZE, YC, 0.75*SIZE);
		rectMode(CORNER);
		strokeWeight(1);
		
		textStyle(BOLD);
		textSize(24);
		textAlign(CENTER, CENTER);	
		stroke("black");
		fill("black");
		text('ROTATE', XC, YC);
		
		
	}
	
	myframe++;
	
}

function state_paused(){

	if(myframe <=1 ){
		
		//background(color.canvas);

		getWxH();
		resizeCanvas(windowWidth, windowHeight);
		centerCanvas();
		
		grid_draw();
		Snake_draw();
		Apple_draw();

		console.log("CENTER", XC, YC);
		textSize(48);
		textAlign(CENTER, BASELINE);	
		text('PAUSED', XC, YC);
	
	}

	myframe++;
	
}

function state_welcome(){
	
	if(myframe <=1 ){
		background(color.canvas);
		getWxH();
		resizeCanvas(windowWidth, windowHeight);
		centerCanvas();	

		fill(color.apple);
		textStyle(BOLD);
		noStroke();
		textSize(3*SIZE);
		textAlign(CENTER, BASELINE);	
		text('SN4K3', XC, YC);
		
		// console.log(N, SIZE, W,H);
		// console.log(X0, X1, X2, X3);
		// console.log(Y0, Y1, Y2, Y3);
	}
	
	myframe++;
	
}


function state_play(){
	
	background(color.canvas);
	
	if(!ready_for_playing){
		getWxH();
		
		console.log(N, SIZE, W, H);
		console.log(X0, X1, X2, X3);
		console.log(Y0, Y1, Y2, Y3);
		
		resizeCanvas(windowWidth, windowHeight);
		centerCanvas();

		snake = [];
		// snake[0] = new Snake(X1+4*SIZE,        Y1+10*SIZE, "right", SIZE);
		// snake[1] = new Snake(X1+4*SIZE-SIZE,   Y1+10*SIZE, "right", SIZE);
		// snake[2] = new Snake(X1+4*SIZE-2*SIZE, Y1+10*SIZE, "right", SIZE);

		snake[0] = new Snake(3, 10, "right", SIZE);
		snake[1] = new Snake(2, 10, "right", SIZE);
		snake[2] = new Snake(1, 10, "right", SIZE);
	
		apple = new Apple(10, 10, SIZE, color.apple);
		
		//Apple_spawn();
		
		score = 0;
		
		ready_for_playing = true;
	}
	
	myframe++;

}


function state_playing(){
	
	background(color.canvas);

	getWxH();
	resizeCanvas(windowWidth, windowHeight);
	centerCanvas();

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
	
	myframe++;
	
}


function state_gameover(){

	if(myframe <=1 ){
		
		//background(color.canvas);

		getWxH();
		resizeCanvas(windowWidth, windowHeight);
		centerCanvas();
		
		grid_draw();
		Snake_draw();
		Apple_draw();

		fill("black");
		textStyle(BOLD);
		noStroke();
		textSize(2*SIZE);
		textAlign(CENTER, BASELINE);	
		text('GAME OVER', XC, YC - 3*SIZE);
		fill("black");
		textSize(SIZE);
		text('SCORE: '+score, XC, YC - 1*SIZE);
		
		
		button_restart.locate(XC - 3*SIZE, YC + 1*SIZE);
		button_restart.resize(6*SIZE, 2*SIZE);
		button_restart.color = color.apple;
		button_restart.textColor = color.canvas;
		button_restart.textSize = SIZE;
		button_restart.text = "RESTART";
		
		button_restart.onPress = function(){
			console.log("RESTART");
			ready_for_playing = false;
			myframe = 0;
			state = "welcome";
		}
		
	}

	button_restart.draw();

	myframe++;
	
}

function Buttons_draw(){
	
	fill(color.snake);
	
	rect(X0, Y0, X1-X0, Y3-Y0);
	
	rect(X2, Y0, X3-X2, Y3-Y0);
	
	// triangle(X1-SIZE/2, Y1+4*SIZE, 
	         // X1-SIZE/2, Y2-4*SIZE, 
			 // X0+SIZE/2, YC);
			 
			 
	// triangle(X2+SIZE/2, Y1+4*SIZE, 
	         // X2+SIZE/2, Y2-4*SIZE, 
			 // X3-SIZE/2, YC);
			 
			 
}


function Snake(ix, iy, dir, size){
	this.ix = ix;
	this.iy = iy;
	this.x = 1;
	this.y = 1;
	this.dir = dir;
	this.size = size;
}

function Snake_update(){



	//autocollision
	
	for(let i=1; i<snake.length; i++){
		if(snake[0].ix===snake[i].ix && snake[0].iy===snake[i].iy){
			console.log("game over");
			myframe=0;
			state="gameover";
		}
	}

	// teleport
	
	for(let i=0; i<snake.length; i++){
		if(snake[i].ix >= N && snake[i].dir==="right"){
			snake[i].ix = -1;
		}
		if(snake[i].ix <= 0 && snake[i].dir==="left"){
			snake[i].ix = N;
		}	
		if(snake[i].iy >= N && snake[i].dir==="down"){
			snake[i].iy = -1;
		}	
		if(snake[i].iy <= 0 && snake[i].dir==="up"){
			snake[i].iy = N;
		}				
	}	

	// move, head

	for(let i=0; i<snake.length; i++){
		
		if(snake[i].dir==="right")
			snake[i].ix++;

		if(snake[i].dir==="left")
			snake[i].ix--;
		
		if(snake[i].dir==="up")
			snake[i].iy--;

		if(snake[i].dir==="down")
			snake[i].iy++;
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


	// coord
	
	for(let i=0; i<snake.length; i++){
		snake[i].x = X1 + snake[i].ix*SIZE;
		snake[i].y = Y1 + snake[i].iy*SIZE;
	}

	
}

function Snake_eat(){
	
	if(snake[0].ix===apple.ix && snake[0].iy===apple.iy){
		// console.log("eat");
		// if(speed >= 10)
			// speed--;
		
		score++;
		
		Snake_grows();
		Apple_spawn();

		textSize(120);
		textAlign(CENTER, BASELINE);	
		text(score, XC, YC);
		
	}
	
}

function Snake_grows(){

	let ix = snake[snake.length-1].ix;
	let iy = snake[snake.length-1].iy;
	

	if(snake[snake.length-1].dir==="right"){
		snake.push(new Snake(ix-1, iy, "right", SIZE));
	}

	if(snake[snake.length-1].dir==="left"){
		snake.push(new Snake(ix+1, iy, "left", SIZE));
	}

	if(snake[snake.length-1].dir==="up"){
		snake.push(new Snake(ix, iy+1, "up", SIZE));
	}

	if(snake[snake.length-1].dir==="down"){
		snake.push(new Snake(ix, iy-1, "down", SIZE));
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

function Apple(ix, iy, size, color){
	this.ix = ix;
	this.iy = iy;
	this.x = X1 + ix*size;
	this.y = Y1 + iy*size;
	this.size = size;
	this.c = color;
}

function Apple_spawn(){
	while(1){
		apple.ix = irand(0,N-1);
		apple.iy = irand(0,N-1);
		if(apple.ix!==snake[0].ix && apple.iy!==snake[0].iy)
			break;
	}
	apple.x = X1 + apple.ix*SIZE;
	apple.y = Y1 + apple.iy*SIZE;
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
	
	// if(windowWidth > windowHeight){
	
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
		
	// }else{
		
		// XC = Math.floor(windowWidth/2);
		// YC = Math.floor(windowHeight/2);
		
	// }
	
	// while(1){
		// H = N*SIZE;
		// W = N*SIZE;	
		// if(W<=windowWidth)
			// break;
		// else
			// SIZE--;
	// }
	
}


function get_orientation(){
	
	if(windowWidth > windowHeight){
		orientation_now = "landscape";
	}else{
		orientation_now = "portrait";
	}
	
	if(orientation_now === orientation_game){
		orientation_is_ok = true;
	}else{
		orientation_is_ok = false;
	}
}



function windowResized() {
	getWxH();
	get_orientation();
	resizeCanvas(windowWidth, windowHeight);
	centerCanvas();
	
	apple.size = SIZE;
	apple.x = X1 + apple.ix*SIZE;
	apple.y = Y1 + apple.iy*SIZE;
	
	for(let i=0; i<snake.length; i++){
		snake[i].size = SIZE;
		snake[i].x = X1 + snake[i].ix*SIZE;
		snake[i].y = Y1 + snake[i].iy*SIZE;
	}
	
	// get_orientation();
	
	// if(state==="wrongstart" && orientation_is_ok){
		// getWxH();
		// resizeCanvas(windowWidth, windowHeight);
		// centerCanvas();
		// state = "welcome";
	// }
	
}

function irand(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Add these lines below sketch to prevent scrolling on mobile
// function touchMoved() {
  // do some stuff
  // return false;
// }

