
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var t_old = 0;
var t_now = 0;
var dt = 0;
var frame = 0;
var fps = 0;
var mouse = {x: 1, y:1};
var click_counter = 0;
var key = {};
var keycounter = 0;
var state;

var hero;
var mobs;
var apple;
var score;
var opt;

function init() {
	
	get_hxw();

	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border: 0px solid blue";

	t_old = performance.now();  
	
	frame = 0;
	state = "welcome";
	
	requestAnimationFrame(loop);	

}

var orient_now;
var N;
var screen_h, screen_w;
var X0, Y0, X1, Y1;

function get_hxw(){
	
	if(window.innerWidth>window.innerHeight){
		
		orient_now = "landscape";
		
		N = 20;
		
		PIXEL = Math.floor(window.innerHeight/N);
		while(1){
			if(PIXEL%2===0)
				break;
			else
				PIXEL--;			
		}
		
		PIXEL = PIXEL/2;
		N = 2*N;
		
		screen_w = N*PIXEL;
		screen_h = N*PIXEL;
		
		X0 = Math.floor( (window.innerWidth - screen_w)/2 );
		Y0 = Math.floor( (window.innerHeight - screen_h)/2 );
		
		X1 = X0 + screen_w;
		Y1 = Y0 + screen_h;
		
	}
	
	console.log("WINDOW", window.innerWidth, "x", window.innerHeight);
	console.log("PIXEL", PIXEL);
	console.log("SCREEN", screen_w, "x", screen_h);
	console.log("X0, Y0", X0, Y0);
	console.log("X1, Y1", X1, Y1);
	
}



function loop() {

	// ctx.fillStyle = "black";
	// ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

	frame++;
	t_now   = performance.now();
	dt   	= (t_now - t_old);
	t_old   = t_now;
	fps 	+= 1000/dt;
	
	// if(frame%60===0){
		// fps = fps/60;
		// console.log("fps:", Math.floor(fps));
		//console.log(frame);
		// fps = 0;
	// }
	
	states();

    requestAnimationFrame(loop);
}

init();

window.addEventListener('mousedown', mousedown, false);
function mousedown(e){
	
	click_counter++;
	console.log(click_counter);
	
	mouse = {x: e.clientX, y: e.clientY};
	
	console.log("click", mouse.x, mouse.y);
	
}

// window.addEventListener('click', click, false);
// function click(e){
	
	// click_counter++;
	
	// mouse = {x: e.clientX, y: e.clientY};
	
	// console.log("click", mouse.x, mouse.y);
	
// }

window.addEventListener('keydown', keydown, false);
function keydown(e) {
	
	keycounter++;
	
	key[e.key] = true;
	
	console.log(e.key);
	
	e.preventDefault()
}

window.addEventListener('keyup', keyup, false);
function keyup(e) {
	
	keycounter = 0;
	key[e.key] = false;

}

function states(){
	
	if(state==="welcome"){
		
		ctx.fillStyle = "gray";
		ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

		ctx.font = 8*PIXEL+"px Verdana";
		ctx.fillStyle = "black";
		ctx.textAlign = "center";
		ctx.fillText("M1N1G4M3", window.innerWidth/2, window.innerHeight/2);
		
		if(click_counter===1){
			openFullscreen();
			state = "play";
		}
		
	}
	
	if(state==="play"){

		get_hxw();

		ctx.canvas.width  = window.innerWidth;
		ctx.canvas.height = window.innerHeight;
		canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border: 0px solid blue";

		opt = { speed: PIXEL/2/2/2,
				gravity: PIXEL/2/2
		}
		
		hero = new Hero(X0+2*PIXEL, Y1-2*PIXEL, 2*PIXEL, 2*PIXEL);
		hero.lw = 0;
		hero.lc = "black";
		hero.fc = "blue";
		hero.dx = opt.speed;
		
		apple = new Apple(X0, Y0, PIXEL, PIXEL);
		apple.fc = "red";
		apple.lc = "black";
		apple.lw = 0;
		apple.dy = opt.speed;
		
		apple_respawn();
		
		mobs = [];

		mobs_spawn();
		
		score = 0;
		
		state = "playing";
		
	}
	
	
	if(state==="playing"){

		get_hxw();

		ctx.canvas.width  = window.innerWidth;
		ctx.canvas.height = window.innerHeight;
		canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border: 0px solid blue";

		if(frame%1===0){
			
			//clear canvas
			
			ctx.fillStyle = "black";
			ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
			ctx.fillStyle = "gray";
			ctx.fillRect(X0, Y0, screen_w, screen_h);
			
			
			//update
			
			hero_update();
			
			apple_update(apple);
			
			for(let i=0; i<mobs.length; i++)
				mob_update(mobs[i]);
        
			
			//collisions
			
			if(coll_rect_rect(hero, apple)){
				apple_respawn();
				score++;
				console.log("SCORE: ", score);
				mobs_spawn();
			}
			
			for(let i=0; i<mobs.length; i++){
				
				if(coll_rect_rect(hero, mobs[i])){
					
					state = "play";
					console.log("GAME OVER");
					
				}
				
			}
			
			

			
			//draw
			
			draw_rect(hero);
			draw_rect(apple);
			for(let i=0; i<mobs.length; i++)
				draw_rect(mobs[i]);
			
			//draw_screen();
			
			ctx.fillStyle = "black";
			ctx.fillRect(X1, 0, window.innerWidth, window.innerHeight);
			ctx.fillRect(0, 0, X0, window.innerHeight);
			
		}

	}
	
}

class MyHero {
	constructor(x, y){
		this.alto = x;
		this.ancho = y;
	}
}


function Hero(x, y, w, h){
	
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.fc = "gray";
	this.lc = "black";
	this.lw = 0;	
	this.dx = 0;
	this.dy = 0;
	this.jumping = true;
	this.jump = 0;
	
}

function hero_update(){
	
	hero.dy += opt.gravity;
	
	hero.x += hero.dx;
	hero.y += hero.dy;
	
	// console.log(hero.x);
	
	if(hero.x< X0){
		// hero.x = X1;
		hero.dx *= -1;
	}

	if(hero.x+hero.w > X1){
		
		hero.dx *= -1;	
		hero.x = X1 - hero.w;
	}

	if(hero.y + hero.h >= Y1){
		hero.y  = Y1 - hero.h;
		hero.jumping = false;
		// hero.jump = 0;
		hero.dy = 0;
		if(hero.dx>0)
			hero.dx = opt.speed;
		else
			hero.dx = -opt.speed;
	}
	
	if(mouse.x >= X1 && click_counter===1 ){
		if(hero.dx<0)
			hero.dx *= -1;
		click_counter = 0;
	}

	if(mouse.x <= X0 && click_counter===1){
		if(hero.dx>0)
			hero.dx *= -1;		
		click_counter = 0;
	}

	if(mouse.x > X0 && mouse.x < X1 && click_counter===1){
		hero.dy -= hero.h;
		if(hero.dx>0)
			hero.dx = 4*opt.speed;
		else
			hero.dx = -4*opt.speed;
		hero.jumping = true;
		click_counter = 0;
	}

	if(key.ArrowRight && keycounter===1 && hero.dx<0){
		hero.dx *= -1;
		key.ArrowRight = false;
	}
	
	if(key.ArrowLeft && keycounter===1 && hero.dx>0){
		hero.dx *= -1;
		key.ArrowRight = false;
	}	
	
	if(key.ArrowUp && !hero.jumping && keycounter===1){
		hero.dy -= hero.h;
		if(hero.dx>0)
			hero.dx = 4*opt.speed;
		else
			hero.dx = -4*opt.speed;
		hero.jumping = true;
		key.ArrowRight = false;
	}

}

function hero_update_(){
	
	if(key.ArrowRight){
		hero.x += PIXEL;
	}

	if(key.ArrowLeft){
		hero.x -= PIXEL;
	}

	if(key.ArrowUp){
		hero.y -= PIXEL;
	}

	if(key.ArrowDown){
		hero.y += PIXEL;
	}

	if(key.d && keycounter===1){
		hero.x += PIXEL;
		key.d = false;
	}

	if(key.a && keycounter===1){
		hero.x -= PIXEL;
		key.a = false;
	}

	if(key.w && keycounter===1){
		hero.y -= PIXEL;
		key.w = false;
	}

	if(key.s && keycounter===1){
		hero.y += PIXEL;
		key.s = false;
	}

	if(hero.x <= X0)
		hero.x = X0;

	if(hero.x >= X1 - hero.w)
		hero.x = X1 - hero.w;
}



function coll_rect_rect(A, B){

	if (A.x < B.x + B.w &&
	   A.x + A.w > B.x &&
	   A.y < B.y + B.h &&
	   A.h + A.y > B.y){
	   return true;
	}else{
		return false;
	}
}

function Apple(x, y, w, h){
	
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.fc = "gray";
	this.lc = "black";
	this.lw = 1;
	this.dy = 1;	
	
}

function apple_respawn(){
	
	
	while(1){
		apple.x = X0 + irand(1, N-1)*PIXEL;
		apple.y = Y0 + apple.h;;
		
		if(!coll_rect_rect(hero, apple))
			break;
		
	}

	

}

function apple_update(o){
	
	o.y += o.dy;
	
	if((o.y + o.h) >= Y1){
		o.dy *= -1;
	}

	if((o.y ) <= Y0){
		o.dy *= -1;
	}

}


function Mob(x, y, w, h){
	
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.fc = "gray";
	this.lc = "black";
	this.lw = 1;
	this.dx = 1;
	this.dy = 1;
	
}

function mobs_spawn(){
	
	let k;
	
	if(mobs.length===0)
		k = 0;
	else
		k = mobs.length;
	
	mobs.push( new Mob(X0+irand(1,N-1)*PIXEL, Y0+irand(1, N/2)*PIXEL, PIXEL, PIXEL) );
	
	if(irand(1,2)===1)
		mobs[k].dx *= -1;
	if(irand(1,2)===1)
		mobs[k].dy *= -1;
	
	mobs[k].lw = 0;
	mobs[k].lc = "black";
	mobs[k].fc = "black";
	mobs[k].dx = opt.speed;
	mobs[k].dy = opt.speed;
	
	//console.log(mobs[0]);

}

function mob_update(o){
	
	o.x += o.dx;
	o.y += o.dy;
	
	if(o.x <= X0){
		o.x = X0;
		o.dx *= -1;
	}

	if(o.x >= X1 - o.w){
		o.x = X1 - o.w;
		o.dx *= -1;	
	}

	if(o.y <= Y0){
		o.y = Y0;
		o.dy *= -1;
	}

	if(o.y >= Y1 - o.h){
		o.y = Y1 - o.h;
		o.dy *= -1;	
	}
	
}

function draw_screen(){
	
	ctx.fillStyle = "gray";
	ctx.fillRect(X0, Y0, screen_w, screen_h);

	// for(let i=0; i<N+1; i++){
		// ctx.beginPath();
		// ctx.moveTo(X0+i*PIXEL, Y0);
		// ctx.lineTo(X0+i*PIXEL, Y1);
		// ctx.strokeStyle = "black";
		// ctx.lineWidth = 1;
		// ctx.stroke();	
	// }

	// for(let i=0; i<N+1; i++){
		// ctx.beginPath();
		// ctx.moveTo(X0, Y0+i*PIXEL);
		// ctx.lineTo(X1, Y0+i*PIXEL);
		// ctx.strokeStyle = "black";
		// ctx.stroke();	
	// }

}


function draw_rect(r){
	
	ctx.fillStyle = r.fc;
	ctx.fillRect(r.x, r.y, r.w, r.h);
	
	if(r.lw >= 1){
		ctx.beginPath();
		ctx.lineWidth = r.lw;
		ctx.strokeStyle = r.lc;
		ctx.rect(r.x, r.y, r.w, r.h);
		ctx.stroke();	
	}
	
}

function irand(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
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