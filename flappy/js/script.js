var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 320*2,
        height: 480*2
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1500 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);


function preload ()
{
    this.load.image('bubble', 'assets/bubble_64x64_alpha.png');
	this.load.image('fondo', 'assets/fondo2.png');
	this.load.image('pipe', 'assets/pipe128x960.png');
}

function create ()
{
	this.add.image(320      , 480, 'fondo');
	
	score = 0;
	pipe_speed = -100;

	pipe_top_1 = this.physics.add.sprite(320*2, 0, 'pipe');
	pipe_top_1.body.setAllowGravity(false);
	pipe_top_1.setOrigin(0);
	
	pipe_bottom_1 = this.physics.add.sprite(320*2, 0, 'pipe');
	pipe_bottom_1.body.setAllowGravity(false);
	pipe_bottom_1.setOrigin(0);
	
	pipe_spaw(pipe_speed);
		
	bubble = this.physics.add.sprite( 320*2/4 , 64, 'bubble');
	bubble.setCircle(64/2);
	bubble.setCollideWorldBounds(true);
	bubble.setVelocity(0, 10)
	bubble_can_move = true;

	this.physics.add.overlap(bubble, pipe_top_1, choca, null, this);
	this.physics.add.overlap(bubble, pipe_bottom_1, choca, null, this);
	
	function choca(){
		//console.log("choca");
		bubble.setVelocity(0,0);
		bubble.body.setAllowGravity(false);
		bubble_can_move = false;
		pipe_top_1.setVelocity(0,0);
		pipe_bottom_1.setVelocity(0,0);
	}
	
	spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
	
    this.input.on('pointerdown', function (pointer) {
		if(bubble_can_move)
			bubble.setVelocityY(-350);
    }, this);

	scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '40px', fill: '#000' });

}

function update ()
{
	
	if (Phaser.Input.Keyboard.JustDown(spacebar) )
    {
		if(bubble_can_move)
			bubble.setVelocityY(-350);
	}
	
	if(pipe_top_1.x < -128){
			
		pipe_speed -= 10;
		
		pipe_spaw(pipe_speed);
		score += 10;
		scoreText.setText('Score: ' + score);		
	}
		
}

function pipe_spaw(pipe_speed){
	pipe_top_hmax = -14*64;
	pipe_top_hmin = -4*64;
	pipe_gap = 2.5*64;
	
	pipe_top_1_h = rand(pipe_top_hmin, pipe_top_hmax);
	pipe_bottom_1_h = 480*2 + pipe_top_1_h + pipe_gap;
	pipe_top_1.setX(320*2+64);
	pipe_top_1.setY(pipe_top_1_h);
	pipe_bottom_1.setX(320*2+64);
	pipe_bottom_1.setY(pipe_bottom_1_h);
	pipe_top_1.setVelocity(pipe_speed,0);
	pipe_bottom_1.setVelocity(pipe_speed,0);
	
	console.log(pipe_speed);
	
	
}

function rand(_rnd_min_, _rnd_max_){
	return Phaser.Math.FloatBetween(_rnd_min_, _rnd_max_);
}