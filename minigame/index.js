
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
var mob;

function init() {
	
	get_hxw();

	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border: 0px solid blue";

	t_old = performance.now();  
	frame = 0;
	
	hero = new Hero(X0+2*PIXEL, Y1-2*PIXEL, 2*PIXEL, 2*PIXEL);
	hero.lw = 1;
	hero.lc = "black";
	hero.fc = "yellow";

	mob = new Mob(X0+8*PIXEL, Y0, PIXEL, PIXEL);
	mob.lw = 1;
	mob.lc = "black";
	mob.fc = "red";

	state = "playing";
	
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
	
	if(frame%60===0){
		fps = fps/60;
		console.log("fps:", Math.floor(fps));
		fps = 0;
	}
	
	states();

    requestAnimationFrame(loop);
}

init();

window.addEventListener('click', click, false);
function click(e){
	
	click_counter++;
	
	mouse = {x: e.clientX, y: e.clientY};
	
	console.log("click", mouse.x, mouse.y);
	
}

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
	
	if(state==="playing"){
		
		
		
		if(frame%15===0){
			
			ctx.fillStyle = "black";
			ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
			
			draw_screen();
			
			hero_update();
			mob_update();
			
			draw_rect(hero);
			draw_rect(mob);
		}

	}
	
}

function Hero(x, y, w, h){
	
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.fc = "gray";
	this.lc = "black";
	this.lw = 1;	
	this.dx = PIXEL;
	this.dy = PIXEL;
	
}

function hero_update(){
	
	hero.x += hero.dx;
	hero.y += hero.dy;
	
	if(hero.x <= X0){
		hero.x = X0;
		hero.dx *= -1;
	}

	if(hero.x >= X1 - hero.w){
		hero.x = X1 - hero.w;
		hero.dx *= -1;	
	}

	if(hero.y <= Y0){
		hero.y = Y0;
		hero.dy *= -1;
	}

	if(hero.y >= Y1 - hero.h){
		hero.y = Y1 - hero.h;
		hero.dy *= -1;	
	}
	
	if(mouse.x >= X1 && hero.dx > 0 && click_counter===1){
		hero.dx *= -1;
		click_counter = 0;
	}

	if(mouse.x >= X1 && hero.dx < 0 && click_counter===1){
		hero.dx *= -1;
		click_counter = 0;
	}	

	if(mouse.x <= X0 && hero.dy > 0 && click_counter===1){
		hero.dy *= -1;
		click_counter = 0;
	}

	if(mouse.x <= X0 && hero.dy < 0 && click_counter===1){
		hero.dy *= -1;
		click_counter = 0;
	}	
//--
	if(key.ArrowRight && hero.dx > 0 && keycounter===1){
		hero.dx *= -1;
		key.ArrowRight = false;

	}

	if(key.ArrowRight && hero.dx < 0 && keycounter===1){
		hero.dx *= -1;
		key.ArrowRight = false;
	}	

	if(key.ArrowLeft && hero.dy > 0 && keycounter===1){
		hero.dy *= -1;
		key.ArrowLeft = false;
	}

	if(key.ArrowLeft && hero.dy < 0 && keycounter===1){
		hero.dy *= -1;
		key.ArrowLeft = false;

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

function Mob(x, y, w, h){
	
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.fc = "gray";
	this.lc = "black";
	this.lw = 1;
	this.dx = PIXEL;
	this.dy = PIXEL;
	
}

function mob_update(){
	
	mob.x += mob.dx;
	mob.y += mob.dy;
	
	if(mob.x <= X0){
		mob.x = X0;
		mob.dx *= -1;
	}

	if(mob.x >= X1 - mob.w){
		mob.x = X1 - mob.w;
		mob.dx *= -1;	
	}

	if(mob.y <= Y0){
		mob.y = Y0;
		mob.dy *= -1;
	}

	if(mob.y >= Y1 - mob.h){
		mob.y = Y1 - mob.h;
		mob.dy *= -1;	
	}
	
}

function draw_screen(){
	
	ctx.fillStyle = "black";
	ctx.fillRect(X0, Y0, screen_w, screen_h);

	for(let i=0; i<N+1; i++){
		ctx.beginPath();
		ctx.moveTo(X0+i*PIXEL, Y0);
		ctx.lineTo(X0+i*PIXEL, Y1);
		ctx.strokeStyle = "green";
		ctx.lineWidth = 1;
		ctx.stroke();	
	}

	for(let i=0; i<N+1; i++){
		ctx.beginPath();
		ctx.moveTo(X0, Y0+i*PIXEL);
		ctx.lineTo(X1, Y0+i*PIXEL);
		ctx.strokeStyle = "green";
		ctx.stroke();	
	}

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