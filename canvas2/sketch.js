
var SIZE;
var H; //safe zone
var W; //safe zone
var X0; //safe zone
var Y0; //safe zone

const game_is_landscape = false;
const debug = true;

function get_WxH(){
    if(game_is_landscape){
        SIZE = Math.trunc(window.innerWidth/20);
        while(1){
            W = 20*SIZE;
            H = 15*SIZE;        
            if(W <= window.innerWidth && H <= window.innerHeight)break;
            SIZE = SIZE - 1;
        }
        X0 = (window.innerWidth - W)/2;
        if(window.innerWidth > window.innerHeight)
            Y0 = 0;
        else
            Y0 = (window.innerHeight - H)/2;
        
    }else{
        SIZE = Math.trunc(window.innerHeight/20);
        while(1){
            W = 15*SIZE;
            H = 20*SIZE;
            if(W <= window.innerWidth && H <= window.innerHeight)break;
            SIZE = SIZE - 1;
        }
        Y0 = (window.innerHeight - H)/2;
        if(window.innerWidth < window.innerHeight)
            X0 = 0;
        else
            X0 = (window.innerWidth - W)/2;
    }
}

function windowResized() {
  get_WxH();
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function setup() {
    
    pixelDensity(1);

    get_WxH();

    console.log("game_is_landscape: ", game_is_landscape);
    console.log("SAFE ZONE: ", SIZE, "; ", W,"x", H);
    console.log("displayView: ", displayWidth,"x", displayHeight);
    console.log("innnerView: ", window.innerWidth,"x", window.innerHeight);
        
    createCanvas(window.innerWidth, window.innerHeight);
    rectMode(CENTER);
    ellipseMode(CENTER);
    background(200);

}

function draw() {

    background(200);

    if(debug){
        rectMode(CENTER);
        noFill();
        strokeWeight(4)
        stroke("red");  
        rect(width/2, height/2, W, H);

        noFill();
        strokeWeight(1)
        stroke("red"); 
        rectMode(CORNER);
        if(game_is_landscape){
            for(let i=0; i<20; i++){
                for(let j=0; j<15; j++)
                    rect(X0+i*SIZE, Y0+j*SIZE, SIZE, SIZE);
            }
        }else{
            for(let i=0; i<15; i++){
                for(let j=0; j<20; j++)
                    rect(X0+i*SIZE, Y0+j*SIZE, SIZE, SIZE);
            } 
        }
        rectMode(CENTER);
        
        ellipseMode(CENTER);
        circle(X0, Y0, SIZE);
        circle(X0+W, Y0, SIZE);
        circle(X0+W, Y0+H, SIZE);
        circle(X0, Y0+H, SIZE); 
    }
    

  
}
