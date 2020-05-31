
var canvas = document.getElementById('game_canvas');
var ctx = canvas.getContext('2d');

var 
score = new Score(), 
best = new Score(),
FPS = new Score(),
hero = new HeroLikeFlappy(),
flapX = 0,
flapY = 0,
hero_gravity = 0,
star = new Star(),
stars = [],
balls = [],
N_balls,
balls_sp,
button_pause = new Button();

best.score = 0;

// var
// img_welcome = new Image(),
// img_rotate_please = new Image(),
// img_tutorial_1 = new Image(),
// img_tutorial_2 = new Image(),
// img_game_over = new Image();
// img_hero_R = new Image(),
// img_hero_L = new Image(),
// img_button_pause = new Image(),
// img_screen_paused = new Image(),
// img_ball = new Image(),
// img_star_black = new Image(),
// img_star = new Image();


var 	
state = 0,
state_old = 0;
frame = 0 ;

const 	
WELCOME = 0,
TUTORIAL_1 = 1,
TUTORIAL_2 = 2,
PLAY = 3,
PLAYING = 5,
PAUSED = 11,
GAMEOVER = -1,
WRONG_ORIENT = -2,
WRONG_INIT = -3;

const
LANDSCAPE = 0,
PORTRAIT = 1;

var
orientation_now = null,
orientation_game = LANDSCAPE;

function load_images(){
	
	// img_hero_R.src = './img/hero-right.png';	
	// img_hero_L.src = './img/hero-left.png';
	// img_ball.src = './img/ball_pink.png';
	// img_star.src = './img/star_gold.png';
	// img_star_black.src = './img/star_black.png';
	// img_button_pause.src = './img/button_pause.png';
	// img_screen_paused.src = './img/screen_paused.png';
	// img_game_over.src = './img/game_over.png';
	// img_tutorial_1.src = './img/tutorial_1.png';
	// img_tutorial_2.src = './img/tutorial_2.png';
	// img_welcome.src = './img/welcome.png';
	// img_rotate_please.src = './img/rotate_please.png';
}


function load_vars(){
	
	orientation_game = LANDSCAPE;

	score.txt = "SCORE: ";
	score.x = X0+W;
	score.y = 0.5*SIZE;
	score.score = 0;
	
	best.txt = "BEST: ";
	best.x = X0+W;
	best.y = 1.2*SIZE;
	//best.score = 0;

	FPS.txt = "FPS: ";
	FPS.x = X0+W;
	FPS.y = 1.9*SIZE;
	
	balls = [];
	stars = [];
	
	balls_sp = 0.003*SIZE;
	
	hero = new HeroLikeFlappy();
	hero.x = X0+W/2;
	hero.y = 0.75*H;
	hero.r = SIZE/2;

	// correctas:
	flapX = 0.75*SIZE;
	flapY = 0.01*SIZE;
	hero_gravity = 0.001*SIZE;
	
	
	star.r = SIZE/2;
	
	button_pause.x = X0+5;
	button_pause.y = Y0+5;
	button_pause.w = SIZE;
	button_pause.h = SIZE;
	
	spawn_star();
	
	spawn_stars();
	
	spawn_ball();
	
	frame = 0;
	//state = WELCOME;

}

function update_and_draw(){
	
	get_SIZE();
	//set_canvas();
	
	if(state===WELCOME && !orientation_is_ok){
		set_canvas();
		state_old = state;
		state = WRONG_INIT;
		frame = 0;
	}

	
	if((state===TUTORIAL_1 || state===TUTORIAL_2) && !orientation_is_ok){
		set_canvas();
		state_old = state;
		state = WRONG_INIT;
		frame = 0;
	}	
	
	if(state===WRONG_INIT && orientation_is_ok){
		set_canvas();
		state_old = state;
		state = WELCOME;
		frame = 0;
	}
	
	if(state===PLAYING && !orientation_is_ok){
		set_canvas();		
		state_old = state;
		state = WRONG_ORIENT;
		frame = 0;
	}

	if(state===PAUSED && !orientation_is_ok){
		set_canvas();		
		state_old = state;
		state = WRONG_ORIENT;
		frame = 0;
	}

	if(state===WRONG_ORIENT && orientation_is_ok){
		set_canvas();
		state_old = state;
		state = PAUSED;
		frame = 0;
	}

	if(state===GAMEOVER && !orientation_is_ok){
		set_canvas();		
		state_old = state;
		state = WRONG_ORIENT;
		frame = 0;
	}
	
	frame++;
	
	show_state();

	if(state === WRONG_ORIENT || state === WRONG_INIT){
		
		if(frame<10){
			//clear_canvas();
			ctx.fillStyle = 'black'; 
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			//ctx.drawImage(img_rotate_please, X0, Y0, W, H);
		}
	}


	if(state === WELCOME){

		if(frame<10){
			get_SIZE();
			set_canvas();			
			clear_canvas();
			//ctx.drawImage(img_welcome, X0, Y0, W, H);
		}
	}

	if(state === TUTORIAL_1){


		if(frame<10){
			get_SIZE();
			set_canvas();			
			clear_canvas();
			//ctx.drawImage(img_tutorial_1, X0, Y0, W, H);
		}
	}

	if(state === TUTORIAL_2){

		
		if(frame<10){
			get_SIZE();
			set_canvas();
			clear_canvas();
			//ctx.drawImage(img_tutorial_2, X0, Y0, W, H);
		}
	}

	if(state===PLAY){
		// get_SIZE();
		// set_canvas();
		load_vars();
		frame = 0;
		state_old = state;
		state = PLAYING;
	}
	
	if(state === PLAYING){

		get_SIZE();
		set_canvas();
		
		clear_canvas();
		
		hero.update();
		for(let i=0; i<balls.length; i++)
			balls[i].update();

		if(circle_in_circle(hero, stars[0])){
			score.score += 50;
			if(score.score >= best.score)
				best.score = score.score;
			stars[0].x = -100;
			stars[0].y = -100;
			//console.log("SCORE: ", score);
		}

		if(circle_in_circle(hero, stars[1])){
			score.score += 50;
			if(score.score >= best.score)
				best.score = score.score;		
			stars[1].x = -100;
			stars[1].y = -100;
			//console.log("SCORE: ", score);
		}
		
		if(circle_in_circle(hero, star)){
			score.score += 100;
			if(score.score >= best.score)
				best.score = score.score;		
			spawn_star();
			spawn_ball();
			spawn_stars();
			//console.log("SCORE: ", score);
		}
		
		for(let i=0; i<balls.length; i++){		
			if(circle_in_circle(hero, balls[i])){
				state = state_old
				state = GAMEOVER
				frame = 0;;
			}
		}
		
		hero.draw();
		stars[0].draw();
		stars[1].draw();
		star.draw();
		for(let i=0; i<balls.length; i++)
			balls[i].draw();
		
		
		score.draw();
		best.draw();
		if(frame_count%60===0)
			FPS.score = Math.floor(fps);
		FPS.draw();
		button_pause.draw();
	}
	
	if(state === PAUSED){
		
		if(frame < 10){
			clear_canvas();
			
			hero.draw();
			stars[0].draw();
			stars[1].draw();
			star.draw();
			for(let i=0; i<balls.length; i++)
				balls[i].draw();
			
			score.draw();
			best.draw();
			FPS.draw();
			
			//ctx.drawImage(img_screen_paused, X0, Y0, W, H);
			button_pause.draw();
		}
	}

	if(state === GAMEOVER){
		
		if(frame<10){
			
			clear_canvas();
			
			hero.draw();
			stars[0].draw();
			stars[1].draw();
			star.draw();
			for(let i=0; i<balls.length; i++)
				balls[i].draw();
			
			button_pause.draw();
			
			//ctx.drawImage(img_game_over, X0, Y0, W, H);

			score.draw();
			best.draw();
			FPS.draw();
		}
	}
}


function show_state(){

	if(frame_count%30===0){

		if(state===WELCOME)      console.log("WELCOME");
		if(state===TUTORIAL_1)   console.log("TUTORIAL 1");
		if(state===TUTORIAL_2)   console.log("TUTORIAL 2");
		if(state===PLAY)         console.log("PLAY");
		if(state===PLAYING)      console.log("PLAYING");
		if(state===PAUSED)       console.log("PAUSED");
		if(state===GAMEOVER)     console.log("GAMEOVER");
		if(state===WRONG_INIT)   console.log("WRONG INIT");	
		if(state===WRONG_ORIENT) console.log("WRONG ORIENT");
		
		console.log("orient is ok", orientation_is_ok);
		console.log("orient game", orientation_game);
		console.log("orient now", orientation_now);

	}
}

// ############################ OBJECTS ################################


function HeroLikeFlappy(){

	this.x = 0;
	this.y = 0;
	this.r = 0;
	this.dx = 0;
	this.dy = 0;
	this.dd = 0.005;
	this.dir = "R";
	this.g = 0;  //0.001*SIZE
	this.imgR = 0;
	this.imgL = 0;
	
	this.update = function(){
		
		this.g = hero_gravity;
		
		this.dx = 0;
		
		if (this.y + this.r + this.dy> Y0+H) {
			this.y = Y0+H - this.r; 
			this.dy = 0;
		}

		if (this.y - this.r - this.dx<= Y0){
			this.y = Y0+this.r;
			this.dy = 0;
		}	

		if (this.x + this.r >= X0+W){
			this.x = X0+W - this.r;
			this.dx = 0;
		}

		if (this.x - this.r - this.dx<= X0){
			this.x = X0+this.r;
			this.dx = 0;
		}		

		if (keyPresses.ArrowRight || keyPresses.d && !keyPresses.a) {
			this.move_to_right();
			keyPresses.d = false;
			keyPresses.ArrowRight = false;
		} 

		if (keyPresses.ArrowLeft ||keyPresses.a && !keyPresses.d) {
			this.move_to_left();
			keyPresses.a = false;
			keyPresses.ArrowLeft = false;
		} 

		if (click_in_right ) {
			this.move_to_right();
			click_in_right = false;
		} 

		if (click_in_left ) {
			this.move_to_left();
			click_in_left = false;
		}
		
		this.dy += this.g;
		
		this.y += this.dy*time_delta;
		this.x += this.dx*time_delta;
	};
	
	this.move_to_left = function(){
		// this.x  -= 0.75*SIZE;
		// this.dy = -0.01*SIZE;
		this.x  -= flapX;
		this.dy  = -flapY;		
		this.dir = "L";
		//console.log(this.x, this.dy);
	};
	
	this.move_to_right = function(){
		this.x  += flapX;
		this.dy  = -flapY;	
		this.dir = "R";
	};
	
	
	this.draw = function(){

		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
		ctx.strokeStyle = "blue";
		ctx.lineWidth = 3;
		ctx.fillStyle = "black";
		ctx.fill();
		ctx.stroke();
		ctx.closePath();		

	};
	
}


function Star(){

	this.x = 0;
	this.y = 0;
	this.r = 0;
	this.dx = 0;
	this.dy = 0;
	this.img = "";
	
	this.draw = function(){
		
		drawStar(this.x, this.y, 5, this.r, this.r/2)
		
		// ctx.beginPath();
		// ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
		// ctx.strokeStyle = "black";
		// ctx.lineWidth = 2;
		// ctx.fillStyle = "yellow";
		// ctx.fill();
		// ctx.stroke();
		// ctx.closePath();		
	};	
	
}

function Button(){

	this.x = 0;
	this.y = 0;
	this.w = 0;
	this.h = 0;
	this.img = "";
	
	this.draw = function(){
		ctx.beginPath();
		ctx.fillRect(this.x, this.y, this.w, this.h);
		ctx.strokeStyle = "black";
		ctx.lineWidth = 2;
		ctx.fillStyle = "gray";
		ctx.fill();
		ctx.stroke();
		ctx.closePath();		
		
		
	};	
	
}

function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    let step = Math.PI / spikes;

    ctx.strokeSyle = "#000";
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
    ctx.lineWidth=5;
    ctx.strokeStyle='black';
    ctx.stroke();
    ctx.fillStyle='black';
    ctx.fill();

}

function Score(){
	this.x = 0;
	this.y = 0;
	this.score = 0;
	this.txt = 0;
	
	this.draw = function(){
		ctx.font = 0.5*SIZE+"px monospace";
		ctx.fillStyle = "black";
		ctx.textAlign = "right";
		if(this.score === 0)
			ctx.fillText(this.txt+"0000"+" ", this.x, this.y);
		if(this.score > 0 && this.score <100)
			ctx.fillText(this.txt+"00"+this.score+" ", this.x, this.y);
		if(this.score >= 100 && this.score <1000)
			ctx.fillText(this.txt+"0"+this.score+" ", this.x, this.y);
		if(this.score >= 1000)
			ctx.fillText(this.txt+this.score+" ", this.x, this.y);		
		
	};
}


function Ball(){

	this.x = 0;
	this.y = 0;
	this.r = 0;
	this.img = 0;
	this.dx = 0;
	this.dy = 0;

	
	this.update = function(){
		
		if (this.y + this.r + this.dy > Y0+H) {
			this.dy = -this.dy;
			this.y = Y0+H - this.r; 
		}
		
		if(this.y - this.r - this.dy < Y0){
			this.dy = -this.dy;
			this.y = Y0+this.r;
		}

		if (this.x + this.r >= X0+W){
			this.x = X0+W - this.r;
			this.dx = -this.dx;
		}
		
		 if(this.x - this.r <= X0) {
			 this.x = X0+this.r;
			 this.dx = -this.dx;
		 }
		
		this.y += this.dy*time_delta;
		this.x += this.dx*time_delta;
	};
	
	this.draw = function(){

		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
		ctx.strokeStyle = "black";
		ctx.lineWidth = 3;
		ctx.fillStyle = "#FB03BB";
		ctx.fill();
		ctx.stroke();
		ctx.closePath();		

	};
	
}







function spawn_star(){
	
	let circle = {x: hero.x, y: hero.y, r: 10*hero.r};
	
	while(1){
		star.x = irand(X0+star.r, X0+W-star.r)
		star.y = irand(Y0+2*SIZE, Y0+H-star.r)
		if(!circle_in_circle(circle, star)) 
			break;
	}
}

function spawn_stars(){
	
	stars[0] = new Star();
	stars[1] = new Star();
		
	stars[0].r =  0.35*SIZE;
	stars[1].r =  0.35*SIZE;
	
	let hero_circle = {x: hero.x, y: hero.y, r: 10*hero.r};
	
	while(1){
		stars[0].x = irand(X0+stars[0].r, X0+W-stars[0].r);
		stars[0].y = irand(Y0+3*SIZE, Y0+H-stars[0].r)
		if(!circle_in_circle(stars[0], hero_circle ) &&
		   !circle_in_circle(stars[0], star)) 
			break;		
	}
	
	while(1){
		stars[1].x = irand(X0+stars[1].r, X0+W-stars[1].r);
		stars[1].y = irand(Y0+4*stars[1].r, Y0+H-stars[1].r)
		if(!circle_in_circle(stars[1], hero_circle ) &&
		   !circle_in_circle(stars[1], star) &&
		   !circle_in_circle(stars[1], stars[0])) 
			break;		
	}
}


function spawn_ball(){
	
	balls.push(new Ball());
	if(hero.x >= X0+XC)
		balls[balls.length-1].x = SIZE;
	else{
		balls[balls.length-1].x = X0+W-SIZE;
		//console.log(balls[balls.length-1].x);
	}
	balls[balls.length-1].y = irand(Y0, Y0+H/2);
	balls[balls.length-1].r = SIZE/4;
	if(irand(1,2)===1)
		balls[balls.length-1].dx = balls_sp;
	else
		balls[balls.length-1].dx = -balls_sp;
	if(irand(1,2)===1)
		balls[balls.length-1].dy = balls_sp;
	else
		balls[balls.length-1].dy = -balls_sp;	
	
}





















//######################### E N G I N E ###########################


let keyPresses = {};
let kpress = 0;
let mouse;
let click_in_right;
let click_in_left;
let click_press = 0;

window.addEventListener('keydown', key_down_listener, false);
function key_down_listener(event) {
	kpress++;
	keyPresses[event.key] = true;
	//console.log(event.key);

	if(state===GAMEOVER && keyPresses.Enter){
		frame = 0;
		state_old = state;
		state = PLAYING;
		load_vars();
	}
	
	if(state===PAUSED && keyPresses.p || keyPresses.P){
		keyPresses.p = false;
		frame = 0;
		state_old = state;
		state = PLAYING;
	}

	if(state===PLAYING && keyPresses.p || keyPresses.P){
		keyPresses.p = false;
		frame = 0;
		state_old = state;
		state = PAUSED;
	}

	if(state === WELCOME && keyPresses.Enter){
		keyPresses.Enter = false;
		frame = 0;
		state_old = state;
		state = TUTORIAL_1;
		//openFullscreen();
		//load_vars();
	}

	if(state === TUTORIAL_1 && keyPresses.Enter){
		keyPresses.Enter = false;
		frame = 0;
		state_old = state;
		state = TUTORIAL_2;
		//load_vars();
	}

	if(state === TUTORIAL_2 && keyPresses.Enter){
		keyPresses.Enter = false;
		frame = 0;
		state_old = state;
		// openFullscreen();
		state = PLAY;
		//load_vars();
	}

  
}

window.addEventListener('keyup', key_up_listener, false);
function key_up_listener(event) {
	keyPresses[event.key] = false;
	kpress = 0;

	// if(keyPresses.p || keyPresses.P){
		// key_p_press_count = 0;
	// }

}

canvas.addEventListener('click', click_listener, false);
function click_listener(e){
	
	click_press++;
	mouse = {x: e.clientX, y: e.clientY};
	
	if(state === PLAYING){

		if(mouse.x <= X0+XC && mouse.y > SIZE){
			click_in_right = false;
			click_in_left = true;	
			//console.log("LEFT CLICK");
			//console.log(click_in_left,click_in_right);
		}
		
		if(mouse.x > X0+XC && mouse.y > SIZE){
			click_in_right = true;
			click_in_left = false;		
			//console.log("RIGTH CLICK");
			//console.log(click_in_left,click_in_right);
		}

		if( mouse_click_in_rect(mouse, button_pause) ){
			//console.log("click in pause");
			frame = 0;
			state_old = state;
			state = PAUSED;
		}
		
	}
	
	if(state === PAUSED && frame > 0){

		if( mouse_click_in_rect(mouse, button_pause) ){
			//console.log("click in pause");
			frame = 0;
			state_old = state;
			state = PLAYING;
		}	
	}

	if(state === GAMEOVER){
		frame = 0;
		state_old = state;
		state = PLAY;
		//load_vars();
	}

	if(state === WELCOME && frame > 0){
		frame = 0;
		state_old = state;
		state = TUTORIAL_1;
		// openFullscreen();
		//load_vars();
	}

	if(state === TUTORIAL_1 && frame > 0){
		frame = 0;
		state_old = state;
		state = TUTORIAL_2;
		//load_vars();
	}

	if(state === TUTORIAL_2 && frame > 0){
		frame = 0;
		state_old = state;
		state = PLAY;
		//load_vars();
	}
	
}



function mouse_click_in_rect(mouse, rect){
	let ans = false;
	if(mouse.x > rect.x && mouse.x < rect.x+rect.w && mouse.y > rect.y && mouse.y < rect.y+rect.h)
		ans = true;
	return ans;
}


var time_old = 0;
var time_delta = 0;
var time_now = 0;
var frame_count = 0;
var fps = 0;

function init() {

	get_SIZE();	
	set_canvas();

	time_old = performance.now();  
	frame_count = 0;

	load_images();
		
	//load_vars();
	
	requestAnimationFrame(game_loop);	

}


function clear_canvas(){
	//clear canvas

	ctx.fillStyle = 'black'; 
	ctx.fillRect(0, 0, X0, canvas.height);

	ctx.fillStyle = 'black'; 
	ctx.fillRect(X0+W, 0, canvas.width-X0-W, canvas.height);

	ctx.fillStyle = 'gray'; 
	ctx.fillRect(X0, 0, W, canvas.height);

}

function game_loop() {

	update_and_draw();
	frame_count++;
	time_now   = performance.now();
	time_delta = (time_now - time_old);
	time_old   = time_now;
	fps += 1000/time_delta;
	
	if(frame_count%60===0){
		fps = Math.floor(fps/60);
	}	

    requestAnimationFrame(game_loop);
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




var SIZE; // 20SIZEx15SIZE
var H; //safe zone
var W; //safe zone
var X0; //safe zone
var Y0; //safe zone
var XC; //center
var YC; //center
var SIZE_old;
var orientation_now;
var orientation_is_ok;

function get_SIZE(){
	
	if(window.innerWidth > window.innerHeight){
		orientation_now = LANDSCAPE;
        SIZE = Math.trunc(window.innerWidth/20);
        while(1){
            W = 20*SIZE;
            H = 15*SIZE;        
            if(W <= window.innerWidth && H <= window.innerHeight)break;
            SIZE = SIZE - 1;
        }
        X0 = (window.innerWidth - W)/2;
		Y0 = 0;
	}else{
		orientation_now = PORTRAIT;
        SIZE = Math.trunc(window.innerHeight/20);
        while(1){
            W = 15*SIZE;
            H = 20*SIZE;
            if(W <= window.innerWidth && H <= window.innerHeight)break;
            SIZE = SIZE - 1;
        }
        Y0 = (window.innerHeight - H)/2;
        X0 = 0;
	}
	
	XC = W/2;
	YC = H/2;

	if(orientation_now===orientation_game)
		orientation_is_ok = true;
	else
		orientation_is_ok = false;

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



init();