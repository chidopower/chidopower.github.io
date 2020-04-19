

//--------------------------- hero VARS
var hero_x;
var hero_y;
var hero_speed_y;
var hero_size; 
var hero_g;
var hero_jump;

//--------------------------- PIPES VARS
var pipe_x=[];
var pipe_y=[];
var pipe_h1=[];
var pipe_h2=[];
var pipe_w;
var pipe_speed;
var pipe_gap_y;
var pipe_gap_x;


//--------------------------- GRAL VARS
var frame;
var time;
var FPS;
const FR = 60;
var game_over=false;
var is_phone=isMobile();
var score;
var score_x;
var score_max;

//--------------------------- RESOLUTIONS
var SCREEN_W = window.screen.width;
var SCREEN_H = window.screen.height;
//const SWdev = window.screen.width*window.devicePixelRatio;
//const SHdev = window.screen.height*window.devicePixelRatio;

if(SCREEN_W>=1366){
	SCREEN_W = 683; //Math.floor(SCREEN_W*0.75);
	SCREEN_H = 384; //Math.floor(SCREEN_H*0.75);
}

const GAME_SCREEN_W = SCREEN_H; // game screen width
const GAME_SCREEN_H = SCREEN_H; 

const SCREEN_X0 = 0;
const SCREEN_X1 = SCREEN_W - GAME_SCREEN_W - (SCREEN_W - GAME_SCREEN_W)/2 ;
const SCREEN_X2 = SCREEN_X1 + GAME_SCREEN_W
const SCREEN_X3 = SCREEN_W;

const SCREEN_Y0 = 0;
const SCREEN_Y1 = SCREEN_H;

console.log(GAME_SCREEN_W+"x"+GAME_SCREEN_H);

//---------------------------- BUTTONS

//BUTTON: LEFT
const BT_L_X0 = 0;
const BT_L_Y0 = 0;
const BT_L_W = SCREEN_X1;
const BT_L_H = SCREEN_H;

//BUTTON: RIGHT
const BT_R_X0 = SCREEN_X2;
const BT_R_Y0 = 0;
const BT_R_W = BT_L_W;
const BT_R_H = BT_L_H;

//BUTTON: FULLSCREEN:
const BT_FS_W = 0.8*BT_L_W;   
const BT_FS_H = GAME_SCREEN_H/12;
const BT_FS_X0 = 0.1*BT_L_W;
const BT_FS_Y0 = GAME_SCREEN_H/24;

console.log( SCREEN_W - BT_L_W - BT_R_W  );


//-----------------------------------------GAME START
function game_start(){

	frame = 0;
	time = 0;
	score = -2;
	game_over = false;

	//------------------------------------ the hero params
	hero_size = GAME_SCREEN_H/12;
	score_x = GAME_SCREEN_W/4 + BT_L_W - hero_size/2;
	hero_x = score_x;
	hero_y = SCREEN_H/2 - hero_size;
	hero_speed_y = 0;
	hero_g = 0.015;
	hero_jump = -0.18;

	//----------------------------------- pipes params
	pipe_gap_x = 4*hero_size; //gap beetwen pipes
	pipe_gap_y = 4*hero_size; //gap beetwen pipes
	pipe_speed = 0.1; //speed pipes
	pipe_w = 2*hero_size;
	
	pipe_spawn(0, SCREEN_X2);  //first pipe
	pipe_spawn(1, SCREEN_X2+GAME_SCREEN_W/2+hero_size/2);  //second pipe

}

//-----------------------------------------SETUP
function setup() {

	createCanvas(SCREEN_W, SCREEN_H);
	background(200);
	frameRate(FR);
	score_max = 0;
	game_start();

}


//------------------------- pipe_spawn()
function pipe_spawn(index, X){
	
	let h1 = random(hero_size,SCREEN_H-pipe_gap_y);
	let h2 = SCREEN_H - pipe_gap_y - h1;

	pipe_x[index] 	= X;
	pipe_h1[index]	= h1;
	pipe_y[index] 	= h1 + pipe_gap_y;
	pipe_h2[index] 	= h2;
	
	score++;
	
	if(score > score_max)
		score_max = score;
}


//-----------------------------------------DRAW
function draw() {
	
	background(200);
	stroke(0);
	strokeWeight(1);
	
	//------------------------input
	


	//------------------------update & draw pipes
	
	if(!game_over){

		for(let i=0; i<pipe_x.length; i++){
			
			//if(pipe_x[i]+pipe_w < score_x)
			//	score++;

			if(pipe_x[i]+pipe_w < SCREEN_X1)
				pipe_spawn(i, SCREEN_X2);
			
			pipe_x[i] -= pipe_speed*deltaTime;
			
		}		
	}
	
	for(let i=0; i<pipe_x.length; i++){

		fill("black");
		
		rect(pipe_x[i],         0, pipe_w, pipe_h1[i]);	
		rect(pipe_x[i], pipe_y[i], pipe_w, pipe_h2[i]);	
	}

	//------------------------ update & draw hero

	if(!game_over){

		hero_speed_y = hero_speed_y + hero_g;
		hero_y = hero_y + hero_speed_y*deltaTime;
		
		if(hero_y+hero_size >= GAME_SCREEN_H ){
			hero_y = GAME_SCREEN_H - hero_size;
			hero_speed_y = 0;
		}
		
		if(hero_y <= 0){
			hero_y = 0;
			hero_speed_y = 0;
		}		
	}	
	
	fill("black");
	stroke("white");
	rect(hero_x, hero_y, hero_size, hero_size);

	
	//--------------------------- overlaps
	
	
	for(let i=0; i<pipe_x.length; i++){
	
		if(rectIntersect(hero_x, hero_y, hero_size, hero_size, pipe_x[i], 0, pipe_w, pipe_h1[i]  )   )
			game_over = true;

		if(rectIntersect(hero_x, hero_y, hero_size, hero_size, pipe_x[i], pipe_y[i], pipe_w, pipe_h2[i]  )   )
			game_over = true;


	}
	
	//--------------------------- draw lateral buttons
	fill("black");
	stroke("white");
	rect(BT_L_X0, BT_L_Y0, BT_L_W, BT_L_H);
	rect(BT_R_X0, BT_R_Y0, BT_R_W, BT_R_H);

	//--------------------------- draw fullscreen button
	fill(200);
	stroke("black");
	textSize(14);
	rect(BT_FS_X0, BT_FS_Y0, BT_FS_W, BT_FS_H);
	fill("black");
	text("    FULLSCREEN", BT_FS_X0, hero_size+hero_size/4);
	
	//-----------------------update & draw text
	textSize(14);
	fill("white");
	text("FPS: "+floor(frame/(time/1000)), width-120, 20);	
	text("frame: "+frame, width-120, 40);
	text("time: "+floor(time/1000), width-120, 60);	
	text("Score: "+score, width-120, 80);
	text("MaxScore: "+score_max, width-120, 100);
	text("Ver: "+100, width-120, 120);

	if(game_over){
		
		textSize(18);
		fill("red");
		stroke("red");
		text("GAME OVER!", SCREEN_X1+hero_size, SCREEN_H/2);
		
		
		
	}


	//text(SCREEN_W+"x"+SCREEN_H+"; "+SCREEN_W/SCREEN_H, width-120, 80);
	//text("Phone? "+is_phone, width-120, 100);
	
	//--------------------------- update time
	
	if(!game_over){
		frame++;
		time += deltaTime;
	}

}





//-----------------------------------------INPUT

function keyPressed() {
	
	if (keyCode === 32) {
		hero_speed_y = hero_jump;
		
		if(game_over)
			game_start();
	}

  if (keyCode === TAB) {
    let fs = fullscreen();
    fullscreen(!fs);
  }


}



//-----------------------------------------INPUT HACK for TOUCH

var released = true;

function mouseReleased(){
	released = true;
	return false;
}

function mousePressed(){
	if(!released) return;
	released = false;
	//rest of your code here
	hero_speed_y = hero_jump;
	if(game_over)
		game_start();
	
	
  //if (mouseX > 0 && mouseX < (SCREEN_W-GAME_SCREEN_W)/2 && mouseY > 0 && mouseY < GAME_SCREEN_H) {
  if (mouseX > BT_FS_X0 && mouseX < (BT_FS_X0+BT_FS_W) && mouseY > BT_FS_Y0 && mouseY < (BT_FS_Y0+BT_FS_H) ) {	  
    let fs = fullscreen();
    fullscreen(!fs);
  }	
	
}


//no sirve, hace doble click en mobile device
//function touchStarted() { 
//	hero_speed_y = -6;
//}


function isMobile() {
  var check = false;
  (function(a){
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|hero_size(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|hero_g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|hero_g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( hero_g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-hero_g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(hero_g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
      check = true;
  })(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};



//-----------------------------------------
function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) 
{
    // Check x and y for overlap
    if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2){
        return false;
    }
    return true;
}
