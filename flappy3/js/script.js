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
    this.load.image('hero', 'assets/hero_00.png');
	this.load.image('fondo_01', 'assets/fondo.png');
	this.load.image('fondo_02', 'assets/fondo_02.png');
	this.load.image('pipe', 'assets/pipe_black.png');
	this.load.image('mini_star', 'assets/mini_star.png');
	this.load.image('star', 'assets/star.png');
	this.load.image('reload', 'assets/button_reload.png');
	this.load.spritesheet('fullscreen', 'assets/button_fs_.png', { frameWidth: 64, frameHeight: 64 });
}

function create ()
{
	this.add.image(320, 480, 'fondo_01');
	
	this.scale.startFullscreen();

	score = 0;
	pipe_count = 0;
	pipe_speed = -100;


	mini_stars=[];
	N_mini_stars = 50;

	stars=[];
	N_stars = 8;
	
	for(i=0; i<N_mini_stars; i++){
		mini_stars[i] = this.physics.add.sprite(0, 0, 'mini_star');
		mini_stars[i].body.setAllowGravity(false);
		mini_star_spawn(i);
	}

	for(i=0; i<N_stars; i++){
		stars[i] = this.physics.add.sprite(0, 0, 'star');
		stars[i].body.setAllowGravity(false);
		star_spawn(i);
	}
	
	//console.log(mini_stars);
	

	pipe_top_1 = this.physics.add.sprite(320*2, 0, 'pipe');
	pipe_top_1.body.setAllowGravity(false);
	pipe_top_1.setOrigin(0);
	
	pipe_bottom_1 = this.physics.add.sprite(320*2, 0, 'pipe');
	pipe_bottom_1.body.setAllowGravity(false);
	pipe_bottom_1.setOrigin(0);
	
	pipe_spaw(pipe_speed);
		
	hero = this.physics.add.sprite( 320*2/4 , 64, 'hero');
	hero.setCollideWorldBounds(true);
	hero.setVelocity(0, 10)
	hero_can_move = true;

	this.physics.add.overlap(hero, pipe_top_1, choca, null, this);
	this.physics.add.overlap(hero, pipe_bottom_1, choca, null, this);
	
	for(j=0; j<N_mini_stars; j++)
		this.physics.add.overlap(hero, mini_stars[j], null, null, this);
	
	function choca(){
		//console.log("choca");
		hero.setVelocity(0,0);
		hero.body.setAllowGravity(false);
		hero_can_move = false;
		pipe_top_1.setVelocity(0,0);
		pipe_bottom_1.setVelocity(0,0);
	}
	
	spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
	
    this.input.on('pointerdown', function (pointer) {
		if(hero_can_move)
			hero.setVelocityY(-380);
    }, this);

	scoreText = this.add.text(150, 16, 'Score: 0', { fontSize: '60px', fill: '#fff', strokeThickness: 5, align: 'center' });

	var button = this.add.image(320*2-4, 4, 'fullscreen', 0).setOrigin(1, 0).setInteractive();

	button.on('pointerup', function () {

		if (this.scale.isFullscreen)
		{
			button.setFrame(0);

			this.scale.stopFullscreen();
		}
		else
		{
			button.setFrame(1);

			this.scale.startFullscreen();
		}

	}, this);


	var buttonR = this.add.image(74+4, 4, 'reload', 0).setOrigin(1, 0).setInteractive();

	buttonR.on('pointerup', function () {

		console.log("restart");

	}, this);

}

function update ()
{
	
	if (Phaser.Input.Keyboard.JustDown(spacebar) )
    {
		if(hero_can_move)
			hero.setVelocityY(-380);
	}
	
	if(pipe_top_1.x < -128){
		pipe_speed -= 10;		
		pipe_spaw(pipe_speed);
	}

	for(i=0; i<N_mini_stars; i++){
		if(Phaser.Geom.Intersects.RectangleToRectangle(hero.getBounds(),mini_stars[i].getBounds())){
			if(hero_can_move){
				score++;
				mini_star_spawn(i);
			}
		}
	}

	for(i=0; i<N_mini_stars; i++){
		if(mini_stars[i].x < -32)
			mini_star_spawn(i)
	}

	for(i=0; i<N_stars; i++){
		if(stars[i].x < -32){
			stars[i].setX(320*2);
			stars[i].setY(rand(0,480*2));
		}
	}
	
	scoreText.setText('Score: ' + score);

	if(pipe_top_1.x < -128){
			
		pipe_speed -= 10;
		
		pipe_spaw(pipe_speed);
		score += 10;
		scoreText.setText('Score: ' + score);		
	}
		
}

function mini_star_spawn(index){
	
	mini_stars[index].setX(rand(0,480*4));
	mini_stars[index].setY(rand(-320,0));
	mini_stars[index].setVelocity(-100,100);
	
}

function star_spawn(index){
	
	stars[index].setX(rand(0,320*2));
	stars[index].setY(rand(0, 480*2));
	stars[index].setVelocity(-20,0);

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