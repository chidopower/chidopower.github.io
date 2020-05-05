
var SIZE;
var H; //safe zone
var W; //safe zone
var X0; //safe zone
var Y0; //safe zone

const game_is_landscape = false;
const show_safe_zone = true;

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

function Ball(x, y, r, c){
    
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;
    this.spx = 0;
    this.spy = 0;
    this.gx = 0;
    this.gy = 0;
    this.dirx = 1;
    this.diry = 1;
    this.bounce = false;
    
    this.update = function(){
        this.spx += this.gx;
        this.spy += this.gy; 
        this.x += this.spx*this.dirx*deltaTime;        
        this.y += this.spy*this.diry*deltaTime;  
        
        ellipseMode(CENTER);
        
        if(this.y > height-this.r){
            this.y = height-this.r;
            if(this.bounce)
                this.diry *= -1;            
        }
        
        if(this.y < this.r){
            this.y = this.r;
            if(this.bounce)
                this.diry *= -1; 
        }
    
        if(this.x > width-this.r){
            this.x = width-this.r;
            if(this.bounce)
                this.dirx *= -1;            
        }
        
        if(this.x < this.r){
            this.x = this.r;
            if(this.bounce)
                this.dirx *= -1; 
        }
        
    };
    
    this.draw = function(){
        ellipseMode(CENTER);
        fill(c);
        strokeWeight(1)
        stroke(256);
        circle(this.x, this.y, 2*this.r);
    };
    
}


function draw_safe_zone(){
        
        rectMode(CENTER);
        noFill();
        strokeWeight(1)
        stroke("gray"); 
        
        rect(width/2, height/2, W, H);

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
    
    
}

var myBall;
var balls = [];
const N_balls = 25;

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
    
    
    for(let i=0; i<N_balls; i++){
    
        balls[i] = new Ball( width/2, height/2, random(SIZE/5, SIZE), [random(256),random(256),random(256)]);
        balls[i].spx = random(-1,1);
        balls[i].spy = random(-1,1);
        balls[i].bounce=true;        
            
    }
    

}

function draw() {

    background(0);
    
    for(let i=0; i<N_balls; i++){
        balls[i].update();
        balls[i].draw();
    }
    

    if(show_safe_zone)
        draw_safe_zone();
    
  
}
