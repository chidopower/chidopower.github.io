var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var window_width;
var window_height;
var window_ratio;
var game_width;
var game_height;
var game_ratio;
var hero16_img;
var hero32_img;
var hero;
var touch;
var bullets;
var bullet_img;
var star;
var star_img;
var score;

function init() {

	hero32_img = new Image();
	hero32_img.src = 'hero_32.png';
	
	bullet_img = new Image();
	bullet_img.src = 'bullet.png';
	
	star_img = new Image();
	star_img.src = 'star.png';


	game_width = 240;
	game_height = 320;
	canvas.width = game_width;
	canvas.height = game_height;
	game_ratio = game_width / game_height;

	resize();
	
	hero = {
		x: 16,
		y: 100,
		w: 32,
		h: 32,
		dx: 2,
		dy: 2,
		move_like_clock: false, //false
		is_in_down: true, //true
		is_in_up: false,
		is_in_right: false,
		is_in_left: false,
		img: hero32_img
	};
	

	bullets = [];
	
	star = new Star();
	
	star_spawn();

	score = 0;

	touch = {left: false, right: false, x: -1, y: -1, counter: 0};
	
	requestAnimationFrame(gameloop);	

}

function gameloop() {

	//clear screen
	
	ctx.fillStyle = 'black'; 
	ctx.fillRect(0, 0, game_width, game_height);

	//update

	hero_update();
	star_update(star);
	for(let i=0; i<bullets.length; i++)
		bullet_update(bullets[i]);
	
	//collisions
	
	if(coll_rect_rect(hero, star)){
		star_spawn();
		bullet_spawn();
	}
	
	for(let i=0; i<bullets.length; i++){
		if(coll_rect_rect(star, bullets[i]))
			bullets[i].freeze = 120;
	}

	// for(let i=0; i<bullets.length; i++){
		// if(coll_rect_rect(hero, bullets[i]))
			// init();
	// }

	//draw
	
	draw_sprite(hero);
	draw_sprite(star);
	for(let i=0; i<bullets.length; i++)
		draw_sprite(bullets[i]);
	

    requestAnimationFrame(gameloop);
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

function reset_touch(){
	touch = {left: false, right: false, x: -1, y: -1, counter: 0};
}

function hero_update(){
	
	if(touch.counter === 1){
		
		if(hero.move_like_clock)
			hero.move_like_clock = false;
		else
			hero.move_like_clock = true;
		
		reset_touch();
	}
	
	
	if(hero.is_in_down)
		hero.y = game_height - hero.h;
	
	if(hero.is_in_up)
		hero.y = 0;
	
	if(hero.is_in_left)
		hero.x = 0;
	
	if(hero.is_in_right)
		hero.x = game_width - hero.w;
	
	if(!hero.move_like_clock && hero.is_in_down){
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
	
}

function Bullet(){

	this.x = 1;
	this.y = 1;
	this.w = 16;
	this.h = 16;
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
	
	bullets[n].x = Math.floor(game_width/2);
	bullets[n].y = Math.floor(game_height/2);
	
	if(irand(1,2)===1)
		bullets[n].dx *= -1;

	if(irand(1,2)===1)
		bullets[n].dy *= -1;

	
}

function bullet_update(o){
	
	if(o.freeze>0){
		o.freeze--;
	}else{
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
	
	star.x = irand(5,10)*16;
	star.y = irand(5,15)*16;
	
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

init();