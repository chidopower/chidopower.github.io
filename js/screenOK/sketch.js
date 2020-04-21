//estoy disenando con 16:10, por ejemplo 800x480
// 20 unidades de largo x 12 unidades de alto
//please rotate your device


//const ORIENTATION_GAME = "landscape";
const ORIENTATION_GAME = "portrait";


var window_screen_width;
var window_screen_height;
var window_screen_width_old;
var window_screen_height_old;

var window_innerWidth;
var window_innerHeight;
var window_innerWidth_old;
var window_innerHeight_old;

var game_screen_h;
var game_screen_w;
var game_screen_x;
var game_screen_y;


var ratioWH;
var ratioWH_game;
var SIZE;

var orientation_current;

function get_WxH(){

	window_screen_width_old = window_screen_width;
	window_screen_height_old = window_screen_height;
	
	window_screen_width = window.screen.width;
	window_screen_height = window.screen.height;

	window_innerWidth_old = window_innerWidth;
	window_innerHeight_old = window_innerHeight;

	window_innerWidth = window.innerWidth;
	window_innerHeight = window.innerHeight;

	if(window_innerWidth > window_innerHeight){
		orientation_current = "landscape";
		ratioWH = window_innerWidth/window_innerHeight;
	}
	
	if(window_innerWidth < window_innerHeight){
		orientation_current = "portrait";
		ratioWH = window_innerHeight/window_innerWidth;
	}

	if(window_innerWidth === window_innerHeight){
		orientation_current = "square";
		ratioWH = 1;
	}	

	if(ORIENTATION_GAME==="landscape" && orientation_current==="landscape"){
		SIZE = window_innerHeight/12;
		game_screen_h = 12*SIZE;
		game_screen_w = 20*SIZE;
		ratioWH_game = game_screen_w/game_screen_h;

		if( ratioWH > 1.5){
			if( game_screen_w <= window_innerWidth){
				game_screen_x = (window_innerWidth-game_screen_w)/2;
				game_screen_y = 0;
			}else{
			}				
		}
		
	}

	if(ORIENTATION_GAME==="landscape" && orientation_current==="portrait"){
		SIZE = window_innerWidth/20;
		game_screen_h = 12*SIZE;
		game_screen_w = 20*SIZE;
		ratioWH_game = game_screen_w/game_screen_h;
		
		if( ratioWH > 1.5){		
			if(game_screen_h < window_innerHeight){
				game_screen_x = 0;
				game_screen_y = (window_innerHeight-game_screen_h)/2
			}else{
			}

		}	
	}

	if(ORIENTATION_GAME==="portrait" && orientation_current==="portrait"){
		SIZE = window_innerWidth/12;
		game_screen_h = 20*SIZE;
		game_screen_w = 12*SIZE;
		ratioWH_game = game_screen_h/game_screen_w;

		if( ratioWH > 1.5){
			if( game_screen_h < window_innerHeight){
				game_screen_x = 0;
				game_screen_y = (window_innerHeight-game_screen_h)/2;
			}else{
			}				
		}	
	}

	if(ORIENTATION_GAME==="portrait" && orientation_current==="landscape"){
		SIZE = window_innerHeight/20;
		game_screen_h = 20*SIZE;
		game_screen_w = 12*SIZE;
		ratioWH_game = game_screen_h/game_screen_w;

		if( ratioWH > 1.5){
			if(game_screen_w < window_innerWidth){
				game_screen_x = (window_innerWidth-game_screen_w)/2;
				game_screen_y = 0;
			}else{
			}

		}	
	}
	
	
	
}



function show_WxH_info(){

	console.log("----------------");
	console.log("window: "+window_screen_width+"x"+window_screen_height);
	console.log("inner: "+window_innerWidth+"x"+window_innerHeight);
	console.log("game: "+floor(game_screen_w)+"x"+floor(game_screen_h));
	console.log("ratioWH: "+ratioWH);
	console.log("ratioWH_game: "+ratioWH_game);
	console.log("orientation_current: "+orientation_current);
	console.log("ORIENTATION_GAME: "+ORIENTATION_GAME);
	
}


//------------------------------------------------- P5JS: SETUP
function setup() {

	get_WxH();
	show_WxH_info();

	createCanvas(window_innerWidth, window_innerHeight);
	background("black");


}

//------------------------------------------------- P5JS: DRAW
function draw() {

	get_WxH();

	if(window_screen_width_old !== window_screen_width){
		resizeCanvas(window_innerWidth, window_innerHeight);
		show_WxH_info();
	}

	background("black");
	fill(200);
	rect(game_screen_x, game_screen_y, game_screen_w, game_screen_h);


	fill("red");
	rect(game_screen_x, game_screen_y, SIZE, SIZE);
	fill("blue");
	rect(game_screen_x+game_screen_w-SIZE, game_screen_y, SIZE, SIZE);
	fill("green");
	rect(game_screen_x, game_screen_y + game_screen_h - SIZE, SIZE, SIZE);
	fill("white");
	rect(game_screen_x+game_screen_w-SIZE, game_screen_y + game_screen_h - SIZE, SIZE, SIZE);

  
}

function mousePressed() {
  //x = append(x, mouseX);
  //y = append(y, mouseY);
}


