// 320 x 240 = (16)x20 x (16)x15
// 320/240 = 1.333

// 416x240 = (16)x26 x (16)x15
// 416/240 = 1.7333


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var window_width;
var window_height;
var window_ratio;
var game_width;
var game_height;
var game_ratio;
var center;
var hero16_img;
var hero32_img;
var hero;
var hero_img_right;
var touch;
var key = {};
var KEY = {left: false, right: false, p: false, counter: 0};
var bullets;
var bullet_img;
var bulletfreeze_img;
var star;
var star_img;
var score;

function init() {

	hero32_img = new Image();
	hero32_img.src = 'hero_24.png';
	
	hero_img_right = new Image();
	hero_img_right.src = 'hero_24_right.png'
	
	bullet_img = new Image();
	bullet_img.src = 'miniball.png';

	bulletfreeze_img = new Image();
	bulletfreeze_img.src = 'miniball_freeze.png';

	star_img = new Image();
	star_img.src = 'star.png';

	game_width = 320;
	game_height = 240;
	canvas.width = game_width;
	canvas.height = game_height;
	game_ratio = game_width / game_height;

	resize();
	
	score = {current: 0, best: 0};
	touch = {left: false, right: false, x: -1, y: -1, counter: 0};
	
	state = "welcome";
		
	requestAnimationFrame(gameloop);	

}

function gameloop() {

	states();
	
    requestAnimationFrame(gameloop);
}

function states(){
	
	if(state==="welcome")
		state_welcome();
	
	if(state==="play")
		state_play();
	
	if(state==="playing")
		state_playing();
	
}

function state_welcome(){

	ctx.font = 2*16+"px monospace";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText("TapyTapyTap", game_width/2, game_height/2);


	if(touch.counter===1){
		openFullscreen();
		reset_touch();
		state = "play";
	}
	
	
}

function state_play(){

	hero = {
		x: 24,
		y: 100,
		w: 24,
		h: 24,
		dx: 2,
		dy: 2,
		move_like_clock: false, //false
		is_in_down: true, //true
		is_in_up: false,
		is_in_right: false,
		is_in_left: false,
		flying_to_up: false,
		flying_to_down: false,
		flying_to_left: false,
		flying_to_right: false,
		img: hero32_img
	};
	
	bullets = [];
	
	star = new Star();
	
	star.x = Math.floor(game_width/2);
	star.y = Math.floor(game_height/2);

	score.current = 0;

	touch = {left: false, right: false, x: -1, y: -1, counter: 0};

	state = "playing";
	
	// console.log(hero);
}

function state_playing(){
	
	//clear screen
	
	ctx.fillStyle = 'black'; 
	ctx.fillRect(0, 0, game_width, game_height);
	
	draw_score();

	//update

	hero_update();
	star_update(star);
	for(let i=0; i<bullets.length; i++)
		bullet_update(bullets[i]);
	
	//collisions
	
	if(coll_rect_rect(hero, star)){
		score.current++;
		if(score.current > score.best){
			score.best = score.current;
			// draw_score();
		}
		console.log(score);
		star_spawn();
		bullet_spawn();
	}
	
	for(let i=0; i<bullets.length; i++){
		if(coll_rect_rect(star, bullets[i])){
			bullets[i].freeze = 3*60;
		}
	}

	for(let i=0; i<bullets.length; i++){
		if(coll_rect_rect(hero, bullets[i]))
				
			if(bullets[i].freeze > 0){
				score.current++;
				
				bullets[i].x = game_width/2;
				bullets[i].y = game_height/2;
			}else{
				state = "play";
			}

	}

	//draw
	
	draw_sprite(hero);
	draw_sprite(star);
	for(let i=0; i<bullets.length; i++)
		draw_sprite(bullets[i]);

	

}

window.addEventListener('mousedown', mousedown, false);
function mousedown(e){
	
	touch.left  = false; 
	touch.right = false; 
	touch.x		= e.clientX;
	touch.y		= e.clientY;
	touch.counter++;
	
	if(touch.x <= window_width/2){
		touch.left = true;
		// bigbutton.left = true;
		// bigbutton.right = false;
	}
	else{
		touch.right = true;
		// bigbutton.left = false;
		// bigbutton.right = true;
	}
	
	console.log(touch);
}

window.addEventListener('keydown', keydown, false);
function keydown(e) {
	
	KEY.counter++;
	
	if(e.key==="ArrowLeft"){
		KEY.left = true;
		KEY.right = false;
		KEY.p = false;
	}

	if(e.key==="ArrowRight"){
		KEY.left = false;
		KEY.right = true;
		KEY.p = false;
	}

	if(e.key==="p" || e.key==="P"){
		KEY.left = false;
		KEY.right = false;
		KEY.p = true;
	}

	console.log(KEY);
	e.preventDefault()
}

window.addEventListener('keyup', keyup, false);
function keyup(e) {
	KEY.left = false;
	KEY.right = false;
	KEY.counter = 0;
}


function reset_touch(){
	touch = {left: false, right: false, x: -1, y: -1, counter: 0};
}

function hero_update(){
	
	hero.img = hero32_img;
	
	if(KEY.counter === 1 && KEY.right){
		if(hero.move_like_clock)
			hero.move_like_clock = false;
		else
			hero.move_like_clock = true;
		KEY.right = false;
	}
	
	if(KEY.counter === 1 && KEY.left){
		if(hero.is_in_down)
			hero.flying_to_up = true;
		
		if(hero.is_in_up)
			hero.flying_to_down = true;
	
		if(hero.is_in_left)
			hero.flying_to_right = true;
		
		if(hero.is_in_right)
			hero.flying_to_left = true;
		
		KEY.left = false;
	}
	
	if(touch.counter === 1 && touch.right){
		if(hero.move_like_clock)
			hero.move_like_clock = false;
		else
			hero.move_like_clock = true;
		touch.counter = 0;
	}

	if(touch.counter === 1 && touch.left){
		
		if(hero.is_in_down)
			hero.flying_to_up = true;
		
		if(hero.is_in_up)
			hero.flying_to_down = true;
	
		if(hero.is_in_left)
			hero.flying_to_right = true;
		
		if(hero.is_in_right)
			hero.flying_to_left = true;
		
		touch.counter = 0;
		// console.log("ok");
	}
	
	if(hero.is_in_down)
		hero.y = game_height - hero.h;
	
	if(hero.is_in_up)
		hero.y = 0;
	
	if(hero.is_in_left)
		hero.x = 0;
	
	if(hero.is_in_right)
		hero.x = game_width - hero.w;
	
	if( !hero.flying_to_up && !hero.move_like_clock && hero.is_in_down){
		hero.x += hero.dx;
	}
	
	if(!hero.move_like_clock && hero.x+hero.w >= game_width){
		hero.is_in_right = true;
		hero.is_in_down = false;
	}
	
	if(!hero.move_like_clock && hero.is_in_right){
		hero.y -= hero.dy;
	}
	
	if(!hero.move_like_clock && hero.y <= 0){
		hero.is_in_up = true;
		hero.is_in_right = false;
	}
	
	if(!hero.move_like_clock && hero.is_in_up){
		hero.x -= hero.dx;
	}
	
	if(!hero.move_like_clock && hero.x <= 0){
		hero.is_in_up = false;
		hero.is_in_left = true;
	}
	
	if(!hero.move_like_clock && hero.is_in_left)
		hero.y += hero.dy;
	
	if(!hero.move_like_clock && hero.y+hero.h >= game_height){
		hero.is_in_left = false;
		hero.is_in_down = true;
	}
	
	if(hero.move_like_clock && hero.is_in_left)
		hero.y -= hero.dy;
	
	if(hero.move_like_clock && hero.y <= 0){
		hero.is_in_up = true;
		hero.is_in_left = false;
	}
	
	if(hero.move_like_clock && hero.is_in_up)
		hero.x += hero.dx;
	
	if(hero.move_like_clock && hero.x+hero.w >= game_width){
		hero.is_in_up = false;
		hero.is_in_right = true;
	}
	
	if(hero.move_like_clock && hero.is_in_right)
		hero.y += hero.dy
	
	if(hero.move_like_clock && hero.y+hero.h >= game_height){
		hero.is_in_right = false;
		hero.is_in_down = true;
	}
	
	if(hero.move_like_clock && hero.is_in_down)
		hero.x -= hero.dx;
	
	if(hero.move_like_clock && hero.x <=0){
		hero.is_in_down = false;
		hero.is_in_left = true;
	}
	
	//flying up-down
	
	if(hero.flying_to_up){
		hero.y -= 3*hero.dy;
		hero.is_in_down = false;
	}
	
	if(hero.flying_to_up && hero.y <= 0){
		hero.flying_to_up = false;
		hero.is_in_up = true;
	}	

	if(hero.flying_to_down){
		hero.y += 3*hero.dy;
		hero.is_in_up = false;
	}

	if(hero.flying_to_down && hero.y+hero.h >= game_height){
		hero.flying_to_down = false;
		hero.is_in_down = true;
	}	


	//flying left-right
	
	if(hero.flying_to_left){
		hero.x -= 3*hero.dx;
		hero.is_in_right = false;
	}
	
	if(hero.flying_to_left && hero.x <= 0){
		hero.flying_to_left = false;
		hero.is_in_left = true;
	}	

	if(hero.flying_to_right){
		hero.x += 3*hero.dx;
		hero.is_in_left = false;
		hero.img = hero_img_right;
	}

	if(hero.flying_to_right && hero.x+hero.w >= game_width){
		hero.flying_to_right = false;
		hero.is_in_right = true;
	}	

}

function Bullet(){

	this.x = 1;
	this.y = 1;
	this.w = 8;
	this.h = 8;
	this.dx = 1;
	this.dy = 1;
	this.freeze = 0;
	this.img = bullet_img;

}

function bullet_spawn(){
	
	let n;
	
	if(bullets.length === 0){
		n = 0;
		bullets[n] = new Bullet();
	}else{
		n = bullets.length;
		bullets[n] = new Bullet();
	}

	if(hero.x >= game_width/2)
		bullets[n].x = 2*bullets[n].w;
	else
		bullets[n].x = game_width-2*bullets[n].w;
	
	if(hero.y >= game_height/2)
		bullets[n].y = 2*bullets[n].h;
	else
		bullets[n].y = game_height-2*bullets[n].h;
	
	if(irand(1,2)===1)
		bullets[n].dx *= -1;

	if(irand(1,2)===1)
		bullets[n].dy *= -1;

	
}

function bullet_update(o){
	
	if(o.freeze>0){
		o.freeze--;
		o.img = bulletfreeze_img;
	}else{
		o.img = bullet_img;
		if(o.x+o.w >= game_width)
			o.dx *= -1;

		if(o.x <= 0)
			o.dx *= -1;

		if(o.y+o.h >= game_height)
			o.dy *= -1;
		
		if(o.y <= 0)
			o.dy *= -1;

		o.x += o.dx;
		o.y += o.dy;
	}


}

function Star(){

	this.x = 1;
	this.y = 1;
	this.w = 16;
	this.h = 16;
	this.dx = 1;
	this.dy = 1;
	this.img = star_img;

}

function star_spawn(){

	while(true){
		if(hero.x >= game_width/2)
			star.x = 4*star.w;
		else
			star.x = game_width-4*star.w;
		
		if(hero.y >= game_height/2)
			star.y = 4*star.h;
		else
			star.y = game_height-4*star.h;
		
		if(!coll_rect_rect(hero, star))
			break;
	}


	
	// star.x = Math.floor(game_width/2);
	// star.y = Math.floor(game_height/2);
	
	if(irand(1,2)===1)
		star.dx *= -1;

	if(irand(1,2)===1)
		star.dy *= -1;
	
}

function star_update(o){
	
	if(o.x+o.w >= game_width)
		o.dx *= -1;

	if(o.x <= 0)
		o.dx *= -1;

	if(o.y+o.h >= game_height)
		o.dy *= -1;
	
	if(o.y <= 0)
		o.dy *= -1;

	o.x += o.dx;
	o.y += o.dy;

}

function draw_sprite(o){
	ctx.drawImage(o.img, o.x, o.y);	
}

function draw_score(){
	ctx.font = 16*4+"px monospace";
	ctx.fillStyle = "green";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(score.current+"", Math.floor(game_width/2), Math.floor(game_height/2) );
	
	ctx.fillStyle = "white";
	ctx.font = 16+"px monospace";
	ctx.fillText(score.best+"", game_width/2, game_height/2 + 2*16);
}


window.addEventListener('resize', resize, false);
function resize() {
    window_width = window.innerWidth;
    window_height = window.innerHeight;
    window_ratio = window_width / window_height;
    game_ratio = game_width / game_height;
    if(window_ratio < game_ratio){
        canvas.style.width = window_width + "px";
        canvas.style.height = Math.floor(window_width / game_ratio) + "px";
    }
    else{
        canvas.style.width = Math.floor(window_height * game_ratio) + "px";
        canvas.style.height = window_height + "px";
    }
	
	center = {
		x: Math.floor(window_width/2),
		y: Math.floor(window_height/2)
	}
	
}

function irand(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
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

init();