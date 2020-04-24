const SIZE = 64;
const SCREEN_WIDTH =  10*SIZE;
const SCREEN_HEIGHT = 15*SIZE;


var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 2000 },
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
    this.load.image('hero', 'assets/hero_05.png');
	this.load.image('fondo_01', 'assets/fondo.png');
	this.load.image('top_bar', 'assets/top_bar.png');
	this.load.image('game_over_bar', 'assets/game_over_bar.png');
	this.load.image('pipe', 'assets/pipe_black_02.png');
	this.load.image('mini_star', 'assets/mini_star_2.png');
	this.load.image('particle', 'assets/particle_01.png');
	this.load.image('particle_red', 'assets/particle_red.png');
	this.load.image('star', 'assets/star.png');
	this.load.image('button_reload', 'assets/button_reload_white.png');
	this.load.spritesheet('button_fullscreen', 'assets/button_fullscreen_white.png', { frameWidth: 64, frameHeight: 64 });

    this.load.audio('theme', ['music/music.mp3']);
	this.load.audio('game_over', ['music/game_over.mp3']);
}


function game_start(){
	score = 0;
	pipe_count = 0;
	pipe_speed = -200;
	tap = 1;
	music.play();
	music_game_over.stop();
	is_game_over=false;
	
	for(i=0; i<N_mini_stars; i++)
		mini_star_spawn(i);

	for(i=0; i<N_stars; i++)
		star_spawn(i);

	pipe_spaw(pipe_speed);

	hero.setX(SCREEN_WIDTH/4);
	hero.setY(SIZE);
	hero.body.setAllowGravity(true);
	hero.setVelocity(0, 10)
	hero_can_move = true;
	
	emitter.startFollow(hero);
	//emitter_red.stopFollow(hero);
	
	game_over_text.setText('');
	game_over_text.setStroke('#de77ae', 16);
	//game_over_text.setShadow(4, 4, "#333333", 2, true, true);
	//game_over_text.setShadow(2, 2, '#333333', 2, true, false);
}

function game_over(){
	music.stop();
	music_game_over.play();
	is_game_over = true;
	hero.setVelocity(0,0);
	hero.body.setAllowGravity(false);
	hero_can_move = false;
	pipe_top_1.setVelocity(0,0);
	pipe_bottom_1.setVelocity(0,0);
	game_over_text.setText('GAME OVER');
	//emitter.stopFollow(hero)
	//emitter_red.startFollow(hero);
	//this.add.image(SCREEN_WIDTH/2, SCREEN_HEIGHT/2, 'game_over_bar');
}

function create ()
{
	this.add.image(320, 480, 'fondo_01');
	this.add.image(320, 32, 'top_bar');
	music = this.sound.add('theme');
	music_game_over = this.sound.add('game_over');
	is_game_over=true;
	
	
	score = 0;
	pipe_count = 0;
	pipe_speed = -150;
	hero_jump = -450;
	tap = 0;

	mini_stars=[];
	N_mini_stars = 50;

	stars=[];
	N_stars = 8;
	
	for(i=0; i<N_mini_stars; i++){
		mini_stars[i] = this.physics.add.sprite(0, 0, 'mini_star');
		mini_stars[i].body.setAllowGravity(false);
		//mini_star_spawn(i);
	}

	for(i=0; i<N_stars; i++){
		stars[i] = this.physics.add.sprite(0, 0, 'star');
		stars[i].body.setAllowGravity(false);
		//star_spawn(i);
	}
	
	pipe_top_1 = this.physics.add.sprite(SCREEN_WIDTH, 0, 'pipe');
	pipe_top_1.body.setAllowGravity(false);
	pipe_top_1.setOrigin(0);
	
	pipe_bottom_1 = this.physics.add.sprite(SCREEN_WIDTH, 0, 'pipe');
	pipe_bottom_1.body.setAllowGravity(false);
	pipe_bottom_1.setOrigin(0);
	
	//pipe_spaw(pipe_speed);
		

    particles = this.add.particles('particle');
    emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    /*particles_red = this.add.particles('particle_red');
    emitter_red = particles_red.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });*/

	hero = this.physics.add.sprite( SCREEN_WIDTH/4 , SCREEN_HEIGHT/2, 'hero');
	hero.setCollideWorldBounds(true);
	hero.setVelocity(0, 10)
	hero_can_move = true;
	//hero.setOrigin(0);
	hero.setCircle(24, 8, 0 );
	
	emitter.startFollow(hero);

	hero.body.setAllowGravity(false);
	hero.setVelocity(0, 0)
	hero_can_move = false;	

	this.physics.add.overlap(hero, pipe_top_1, choca, null, this);
	this.physics.add.overlap(hero, pipe_bottom_1, choca, null, this);
	
	for(j=0; j<N_mini_stars; j++)
		this.physics.add.overlap(hero, mini_stars[j], null, null, this);
	
	function choca(){
		game_over();
	}
	
	spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
	
    this.input.on('pointerdown', function (pointer) {
		if(hero_can_move)
			hero.setVelocityY(hero_jump);
		tap++;
		console.log(tap);
    }, this);


	scoreText = this.add.text(SCREEN_WIDTH/2, 32 , 'Score: 0', { fontSize: '64px', fill: '#fff', strokeThickness: 3});
	scoreText.setOrigin(0.5);

	game_over_text = this.add.text(SCREEN_WIDTH/2, SCREEN_HEIGHT/2 , '', { fontSize: '100px', fill: '#fff', strokeThickness: 3});
	game_over_text.setOrigin(0.5);


	button_fullscreen = this.add.image(SCREEN_WIDTH-2, 2, 'button_fullscreen', 0).setOrigin(1, 0).setInteractive();

	button_fullscreen.on('pointerup', function () {
		if (this.scale.isFullscreen){
			button_fullscreen.setFrame(0);
			this.scale.stopFullscreen();
		}else{
			button_fullscreen.setFrame(1);
			this.scale.startFullscreen();
		}
	}, this);


	button_restart = this.add.image(64+2, 2, 'button_reload', 0).setOrigin(1, 0).setInteractive();

	button_restart.on('pointerup', function () {

		console.log("restart");
		game_start();

	}, this);



	
	//game_start();

}

function update ()
{
	
	if(tap===1 && is_game_over===true)
		game_start();
	
	if (Phaser.Input.Keyboard.JustDown(spacebar) )
    {
		if(hero_can_move)
			hero.setVelocityY(hero_jump);
		tap++
		console.log(tap);
	}
	
	if(pipe_top_1.x < -128){
		pipe_count++;
		if(Math.abs(pipe_speed) < Math.abs(400))
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
	
	console.log("speed: ", pipe_speed);
	console.log("pipes: ", pipe_count);
	
	
}

function rand(_rnd_min_, _rnd_max_){
	return Phaser.Math.FloatBetween(_rnd_min_, _rnd_max_);
}