
var SIZE;
var HEIGHT;
var WIDTH;
const game_is_landscape = false;

function setup() {
    
    pixelDensity(1);

    if(game_is_landscape){
        SIZE = Math.trunc(window.innerWidth/20);
        while(1){
            WIDTH = 20*SIZE;
            HEIGHT = 10*SIZE;        
            if(WIDTH < window.innerWidth && HEIGHT < window.innerHeight)break;
            SIZE = SIZE - 1;
        }            
    }else{
        SIZE = Math.trunc(window.innerHeight/20);
        while(1){
            WIDTH = 10*SIZE;
            HEIGHT = 20*SIZE;
            if(WIDTH < window.innerWidth && HEIGHT < window.innerHeight)break;
            SIZE = SIZE - 1;
        }
    }

    console.log("game_is_landscape: ", game_is_landscape);
    console.log("GAME SIZE: ", SIZE, "; ", WIDTH,"x", HEIGHT);
    console.log("displayView: ", displayWidth,"x", displayHeight);
    console.log("innnerView: ", window.innerWidth,"x", window.innerHeight);
        
    createCanvas(WIDTH, HEIGHT);
    background(200);

}

function draw() {

  fill(0);
  ellipse(WIDTH/2, HEIGHT/2, SIZE, SIZE);
  
  noFill();
  stroke(51);
  
  if(game_is_landscape){
    for(let i=0; i<20; i++){
        for(let j=0; j<10; j++)
            rect(i*SIZE, j*SIZE, SIZE, SIZE);
    
    }
  }else{
    for(let i=0; i<10; i++){
        for(let j=0; j<20; j++)
            rect(i*SIZE, j*SIZE, SIZE, SIZE);
    
    } 
  }
      
      
  

  
}
