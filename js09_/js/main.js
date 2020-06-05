
var orientation_game = "PORTRAIT";

var snake = [];
var apple = new Apple();
var speed;
var color;
var score;

function init() {

	get_SIZE();	
	set_canvas();

	time_old = performance.now();  
	frame_count = 0;
	frame = 0;
	// speed = 30;
	
	// color = {back: "#F4F4F4", sneak: "#373737", grid: "#DCD0C0", apple: "#C0B283"}
	// color = {back: "#D7CEC7", grid: "#C09F80", snake: "#565656", head: "green", apple: "#a8001f"}
	
	// score = {now: 0, last: 0, best: 0};
	
	// for(let i=0; i<3; i++){
		// snake[i] = new Snake((4-i)*SIZE, Y0+10*SIZE, "right" );
	// }
	
	// Apple_spawn(apple);
	
	state = "PLAY";
	
	// mouse.x = W;
	// mouse.y = 0;
	
	requestAnimationFrame(game_loop);	

}

function game_loop() {

	

	frame_count++;
	time_now   = performance.now();
	time_delta = (time_now - time_old);
	time_old   = time_now;
	fps += 1000/time_delta;
	
	if(frame_count%60===0){
		fps = Math.floor(fps/60);
		// console.log("---FPS:", fps);
		// console.log("snake", snake);
		// console.log("apple", apple);
	}	

	if(state==="PLAY"){
		
		// color = {back: "#F4F4F4", sneak: "#373737", grid: "#DCD0C0", apple: "#C0B283"}
		color = {back: "#D7CEC7", grid: "#C09F80", snake: "#565656", head: "green", apple: "#a8001f"}
		
		score = {now: 0, last: 0, best: 0};
		
		speed = 30;
		
		for(let i=0; i<3; i++){
			snake[i] = new Snake(X0+(4-i)*SIZE, Y0+10*SIZE, "right" );
		}
		
		Apple_spawn(apple);
		
		mouse.x = W;
		mouse.y = 0;
		
		frame = 0;
		state = "PLAYING";
	}

	if(state==="PLAYING"){
		
		clear_canvas();
		
		frame++;

		Apple_draw(apple);
		
		Snake_update( );
		Snake_draw( );
		
		Snake_eat();
		
		draw_grid();
		
	}

	if(state==="GAMEOVER"){
		
		clear_canvas();
		
		frame++;

		Apple_draw(apple);

		Snake_draw( );
		
		draw_grid();
		
	}

    requestAnimationFrame(game_loop);
}

function draw_grid(){
	
	if(orientation_now==="PORTRAIT"){
		for(let i=0; i<W+1; i++){
			ctx.beginPath();
			ctx.moveTo(X0+i*SIZE, Y0+0);
			ctx.lineTo(X0+i*SIZE, Y0+H*SIZE);
			ctx.strokeStyle = color.grid;
			ctx.stroke();
		}
		for(let i=0; i<H+1; i++){
			ctx.beginPath();
			ctx.moveTo(X0+0     , Y0+i*SIZE);
			ctx.lineTo(X0+W*SIZE, Y0+i*SIZE);
			ctx.strokeStyle = color.grid;
			ctx.stroke();
		}
	}else{
		for(let i=0; i<W+1; i++){
			ctx.beginPath();
			ctx.moveTo(i*SIZE, 0);
			ctx.lineTo(i*SIZE, H*SIZE);
			ctx.strokeStyle = color.grid;
			ctx.stroke();
		}
		for(let i=0; i<H+1; i++){
			ctx.beginPath();
			ctx.moveTo(0, i*SIZE);
			ctx.lineTo(W*SIZE, i*SIZE);
			ctx.strokeStyle = color.grid;
			ctx.stroke();
		}
	}

}



var
canvas = document.getElementById('game_canvas'),
ctx = canvas.getContext('2d');
state = 0,
state_old = 0,
frame = 0 ,
orientation_now = null,
time_old = 0,
time_delta = 0,
time_now = 0,
frame_count = 0,
fps = 0,
SIZE = 1,
H = 1, 
W = 1, 
X0 = 1, 
Y0 = 1, 
XC = 1, 
YC = 1,
orientation_is_ok = false;


function Snake(x, y, dir){
	this.x = x;
	this.y = y;
	this.dir = dir;
}

function Snake_update(){


	if(frame%speed===0){
		
		//autocollision
		
		for(let i=1; i<snake.length; i++){
			if(snake[0].x===snake[i].x && snake[0].y===snake[i].y){
				console.log("game over");
				state="GAMEOVER";
				frame=0;
			}
		}
		
		//teleport
		
		for(let i=0; i<snake.length; i++){
			if(snake[i].x >= X0+W*SIZE-SIZE && snake[i].dir==="right"){
				snake[i].x = X0-SIZE;
			}
			if(snake[i].x <= X0+0 && snake[i].dir==="left"){
				snake[i].x = X0+W*SIZE;
			}	
			if(snake[i].y >= Y0+H*SIZE-SIZE && snake[i].dir==="down"){
				snake[i].y = Y0-SIZE;
			}	
			if(snake[i].y <= Y0+0 && snake[i].dir==="up"){
				snake[i].y = Y0+H*SIZE;
			}				
		}
		
		//move

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
		
		//move, tail
		
		let k=snake.length-1;
		while(1){
			//console.log(k);
			snake[k].dir = snake[k-1].dir; 
			if(k===1)
				break;
			k--;
		}

		


	}
	
}

function Snake_draw(){
	
	for(let i=0; i<snake.length; i++){
		if(i===0)
			ctx.fillStyle = color.head;
		else
			ctx.fillStyle = color.snake;
		ctx.fillRect(snake[i].x, snake[i].y, SIZE, SIZE);
	}
	

}

function Snake_eat(){
	
	if(snake[0].x===apple.x && snake[0].y===apple.y){
		// console.log("eat");
		if(speed >= 10)
			speed--;
		
		Snake_grows();
		Apple_spawn();
		
	}
	
}

function Snake_grows(){
	
	// snake.push(new Snake());
	
	// snake[snake.length-1].x = 		snake[snake.length-2].x;
	// snake[snake.length-1].y = 		snake[snake.length-2].y;
	// snake[snake.length-1].size = 	snake[snake.length-2].size;
	// snake[snake.length-1].speed = 	snake[snake.length-2].speed;
	// snake[snake.length-1].c = 		snake[snake.length-2].c;
	// snake[snake.length-1].dir = 	snake[snake.length-2].dir;

	// snake[snake.length-1].x = 		apple.x;
	// snake[snake.length-1].y = 		apple.y;
	// snake[snake.length-1].size = 	SIZE;
	// snake[snake.length-1].c = 		color.snake;
	// snake[snake.length-1].dir = 	snake[snake.length-1].dir;

	if(snake[snake.length-1].dir==="right"){
		snake.push(new Snake(1, 1, "right"));
		snake[snake.length-1].x = snake[snake.length-2].x - SIZE;
		snake[snake.length-1].y = snake[snake.length-2].y;
	}

	if(snake[snake.length-1].dir==="left"){
		snake.push(new Snake(1, 1, "left"));
		snake[snake.length-1].x = snake[snake.length-2].x + SIZE;
		snake[snake.length-1].y = snake[snake.length-2].y;
	}

	if(snake[snake.length-1].dir==="up"){
		snake.push(new Snake(1, 1, "up"));
		snake[snake.length-1].x = snake[snake.length-2].x;
		snake[snake.length-1].y = snake[snake.length-2].y + SIZE;
	}

	if(snake[snake.length-1].dir==="down"){
		snake.push(new Snake(1, 1, "down"));
		snake[snake.length-1].x = snake[snake.length-2].x;
		snake[snake.length-1].y = snake[snake.length-2].y - SIZE;
	}

	// console.log("snake length", snake.length);
	
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
		apple.x = X0+irand(2,W-1)*SIZE;
		apple.y = Y0+irand(2,H-1)*SIZE;
		for(let i=0; i<snake.length; i++){
			if(apple.x!==snake[i].x && apple.y!==snake[i].y){
				ok++;
			}
		}
		if(ok>=snake.length)
			break;
	}
}

function Apple_draw(apple){
	
	ctx.fillStyle = apple.c;
	ctx.fillRect(apple.x, apple.y, apple.size, apple.size);

}

	// if(card.symbol==="circle"){
	
		// ctx.fillStyle = card.c1;
		// roundRect(ctx, card.x, card.y, card.w, card.h, SIZE/5, true, false);

		// x = card.x + card.w/2;
		// y = card.y + card.h/2;
		// r = card.w/4;

		// ctx.beginPath();
		// ctx.arc(x, y, r, 0, 2 * Math.PI);
		// ctx.fillStyle = card.c2;
		// ctx.fill();
		// ctx.closePath();

	// }	
		
	// if(card.symbol==="rombo"){
	
		// ctx.fillStyle = card.c1;
		// roundRect(ctx, card.x, card.y, card.w, card.h, SIZE/5, true, false);

		// x = card.x + card.w/2;
		// y = card.y + card.h/2;
		// r = card.w/4;

		// drawstar(x, y, 2, r, r, card.c2);

	// }

	// if(card.symbol==="star5"){
	
		// ctx.fillStyle = card.c1;
		// roundRect(ctx, card.x, card.y, card.w, card.h, SIZE/5, true, false);

		// x = card.x + card.w/2;
		// y = card.y + card.h/2;
		// r = card.w/3;

		// drawstar(x, y, 5, r, r/2, card.c2);

	// }

	


	
function drawstar(cx, cy, spikes, outerRadius, innerRadius, color){

	let rot = Math.PI / 2 * 3;
	let x = cx;
	let y = cy;
	let step = Math.PI / spikes;

	ctx.beginPath();
	ctx.moveTo(cx, cy - outerRadius)
	for (i = 0; i < spikes; i++) {
		x = cx + Math.cos(rot) * outerRadius;
		y = cy + Math.sin(rot) * outerRadius;
		ctx.lineTo(x, y)
		rot += step

		x = cx + Math.cos(rot) * innerRadius;
		y = cy + Math.sin(rot) * innerRadius;
		ctx.lineTo(x, y)
		rot += step
	}
	ctx.lineTo(cx, cy - outerRadius)
	ctx.closePath();
	ctx.fillStyle=color;
	ctx.fill();

}




function Circ(){
	this.x = 0;
	this.y = 0;
	this.r = 0;
	this.fc = "black";
	this.lc = "black";
	this.lw = 1;
	
	this.draw = function(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
		ctx.strokeStyle = this.lc;
		ctx.lineWidth = this.lw;
		ctx.fillStyle = this.fc;
		ctx.fill();
		ctx.stroke();
		ctx.closePath();	
	}		
}



function rnd_colour(){
	let R = Math.floor(Math.random()*255);
	let G = Math.floor(Math.random()*255);
	let B = Math.floor(Math.random()*255);
	return "rgb("+R+","+G+","+B+")";
}























var mouse = {x:W, y: 0};
let click_in_right;
let click_in_left;
let click_press = 0;

canvas.addEventListener('click', click, false);
function click(e){
	
	click_press++;
	mouse = {x: e.clientX, y: e.clientY};
	
	//console.log("click:", mouse.x, mouse.y, click_press);

		if(snake[0].dir==="right" || snake[0].dir==="left"){
			
		if(mouse.y < snake[0].y){
				snake[0].dir = "up";
				return 0;
			}
			if(mouse.y > snake[0].y){
				snake[0].dir = "down";
				return 0;
			}
		}

		if(snake[0].dir==="up" || snake[0].dir==="down"){
			if(mouse.x < snake[0].x){
				snake[0].dir="left";	
				return 0;				
			}
			if(mouse.x > snake[0].x){
				snake[0].dir="right";
				return 0;
			}
		}
	
}

function mouse_click_in_rect(mouse, rect){
	let ans = false;
	if(mouse.x > rect.x && mouse.x < rect.x+rect.w && mouse.y > rect.y && mouse.y < rect.y+rect.h)
		ans = true;
	return ans;
}




function clear_canvas(){

	ctx.fillStyle = color.back; 
	ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

}




function openFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
    document.documentElement.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}




var rel = 1;

function get_SIZE(){
	
	if(window.innerWidth > window.innerHeight){
		rel = window.innerWidth/window.innerHeight;
		orientation_now = "LANDSCAPE";
		
		if(rel>1.3 ){
			console.log("ok", 1.3);
			SIZE = Math.trunc(window.innerHeight/15);
			W = 15;
			H = 15;			
		}
		
		if(rel>1.7 ){
			console.log("ok", 1.7);
			SIZE = Math.trunc(window.innerHeight/15);
			W = 20;
			H = 15;		
				
		}

		if(rel>2 ){
			console.log("ok", 2);
			SIZE = Math.trunc(window.innerHeight/15);
			W = 25;
			H = 15;		
			// SIZE = Math.trunc(window.innerHeight/30);
			// W = 50;
			// H = 30;					
		}
		
	}else{
		orientation_now = "PORTRAIT";
		rel = window.innerHeight/window.innerWidth;
		
		if(rel>1.3 ){
			console.log("ok", 1.3);
			SIZE = Math.trunc(window.innerHeight/2/20);
			W = 20;
			H = 20;		
			X0 = 5*SIZE;
			Y0 = 2*SIZE;

		}
		
		if(rel>1.7 ){
			console.log("ok", 1.7);	
			SIZE = Math.trunc(window.innerHeight/2/20);
			W = 20;
			H = 20;		
			X0 = 1*SIZE;
			Y0 = 2*SIZE;			
		}

		if(rel>2 ){
			console.log("ok", 2);
			SIZE = Math.trunc(window.innerHeight/2/20);
			W = 20;
			H = 20;		
			X0 = 0;//1*SIZE;
			Y0 = 2*SIZE;		
		}

		if(rel>2.1 ){
			console.log("ok", 2.1);
			SIZE = Math.trunc(window.innerHeight/2/20);
			W = 18;
			H = 18;		
			X0 = 0;//1*SIZE;
			Y0 = 2*SIZE;		
		}		
		
	}

	if(orientation_now===orientation_game)
		orientation_is_ok = true;
	else
		orientation_is_ok = false;

	console.log("SIZE:", SIZE);
	// console.log("X0:", X0, "Y0:", Y0);
	console.log("W:", W, "H:", H);
	console.log("orient now:", orientation_now);
	console.log("rel:", rel);
	

}


function irand(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function set_canvas(){

	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	
	canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:1px solid blue";

}

function circle_in_circle(circle1, circle2){
	
	let dx = circle1.x - circle2.x;
	let dy = circle1.y - circle2.y;
	let d  = Math.sqrt(dx*dx + dy*dy);
	
	if (d < circle1.r + circle2.r)
		return true;
	else
		return false;
	
}

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke === 'undefined') {
    stroke = true;
  }
  if (typeof radius === 'undefined') {
    radius = 5;
  }
  if (typeof radius === 'number') {
    radius = {tl: radius, tr: radius, br: radius, bl: radius};
  } else {
    var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
    ctx.stroke();
  }

}


init();

