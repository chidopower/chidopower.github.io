

//--------------------------- BIRD VARS
var bx;
var by;
var bspx; //speed in x
var bspy;
var br; //radius

//--------------------------- PIPES VARS
var px=[];
var py0=[];
var py1=[];
var py2=[];
var py3=[];
var pw=[];
var pspx; //speed pipes in x
var pspy;
const Npipes = 4;
var pgapx; //gap beetwen pipes
var pgapy;
var pR=[];
var pG=[];
var pB=[];

//--------------------------- GRAL VARS
var frame;
var time;
var spawn_t_old=0;
var spawn_t_now=0;
var spawn_dt;
var FPS;
const G = 0.3; //gravity
const FR = 60;

//--------------------------- RESOLUTIONS
const WSW = window.screen.width;
const WSH = window.screen.height;
const SWdev = window.screen.width*window.devicePixelRatio;
const SHdev = window.screen.height*window.devicePixelRatio;

console.log(WSW+"x"+WSH);
console.log("relation: "+WSW/WSH);

const GSW = WSH; // game screen width
const GSH = WSH; 


//-----------------------------------------SETUP
function setup() {

	createCanvas(WSW, WSH);
	background(200);
	frameRate(FR);
	frame = 0;
	time = 0;
	//fullscreen();

	//------------------------------------ the bird params
	br = GSH/24;
	bx = 0.5*WSW - 2*br;
	by = 0;

	bspx = 0;
	bspy = 0;

	//----------------------------------- pipes params
	pgapx = 8*br; //gap beetwen pipes
	pgapy = 8*br;
	pspx = 0.1; //speed pipes 
	pipe_spawn(WSW);  //first pipe
	pipe_spawn(WSW+WSW*(1/3));  //second pipe
	pipe_spawn(WSW+WSW*(2/3));  //

}

//------------------------- pipe_spawn()
function pipe_spawn(X){
	
	let y0 = 0;
	let y1 = random(2*br,GSH/2);
	let y2 = y1 + pgapy;
	let y3 = GSH - y2;
	
	px = append(px, X);
	py0 = append(py0, y0);
	py1 = append(py1, y1);
	py2 = append(py2, y2);
	py3 = append(py3, y3);
	pw = append(pw, 4*br);	
	
	pR = append(pR, random(256) );
	pG = append(pG, random(256) );
	pB = append(pB, random(256) );
	
	//spawn_t_old = spawn_t_now;
	//spawn_t_now = time/1000;
	//spawn_dt = spawn_t_now - spawn_t_old;
	
}

//-----------------------------------------DRAW
function draw() {
	
	background(200);
	stroke(0);
	strokeWeight(1);
	
	//------------------------input
	


	//------------------------update & draw pipes
	
	for(let i=0; i<px.length; i++){
		
		if(px[i]+pw[i] < 0){
			px[i] = width;
			//pR[i] = random(256);
			//pG[i] = random(256);
			//pB[i] = random(256);
		}
		
		px[i] -= pspx*deltaTime;
		
	}
	
	for(let i=0; i<px.length; i++){
		
		//fill(pR[i], pG[i], pB[i]);

		fill("black");
		
		rect(px[i], py0[i], pw[i], py1[i]);	
		rect(px[i], py2[i], pw[i], py3[i]);	
	}
	
	//console.log(px.length, time);



	//------------------------ update & draw bird

	bspy = bspy + G;
	by = by + bspy;
	
	if(by+br >= GSH ){
		by = GSH - br;
		bspy = 0;
	}
	
	if(by-br <= 0){
		by = br;
		bspy = 0;
	}
	
	fill("black");
	circle(bx, by, 2*br);
	
	//--------------------------- safe zone
	fill("black");
	rect(0, 0, (WSW-GSW)/2, GSH);
	rect( (WSW-GSW)/2 + GSW, 0, (WSW-GSW)/2, GSH);

	//-----------------------update & draw text
	textSize(16);
	fill("white");
	text("FPS: "+floor(frame/(time/1000)), width-120, 20);	
	text("frame: "+frame, width-120, 40);
	text("time: "+floor(time/1000), width-120, 60);	
	text(WSW+"x"+WSH+"; "+WSW/WSH, width-120, 80);
	text("Phone: "+isMobile(), width-120, 100);
	text(":D", width-120, 120);

	//--------------------------- update time
	frame++;
	time += deltaTime;

}

//-----------------------------------------INPUT

function keyPressed() {
	if (keyCode === 32) {
		bspy = -5;
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
	bspy = -5;
}


//no sirve, hace doble click en mobile device
//function touchStarted() { 
//	bspy = -6;
//}


function isMobile() {
  var check = false;
  (function(a){
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
      check = true;
  })(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

