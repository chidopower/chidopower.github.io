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
            gravity: { y: 1000 },
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
    this.load.image('hero', 'assets/bubble_64x64_alpha.png');
	this.load.image('bubble', 'assets/bubble_128x128.png');
	this.load.image('fondo', 'assets/fondo2.png');
}

function create ()
{
	this.add.image(320      , 480, 'fondo');

	
	hero = this.physics.add.sprite(Phaser.Math.FloatBetween(0, 320), Phaser.Math.FloatBetween(0, 480), 'hero');
	hero.setCircle(32);
	hero.setCollideWorldBounds(true);
	hero.setVelocity(-200, 60)
	hero.setBounce(1);


	bubble = this.physics.add.sprite(Phaser.Math.FloatBetween(0, 320), Phaser.Math.FloatBetween(0, 480), 'bubble');
	bubble.setCircle(128/2);
	bubble.setCollideWorldBounds(true);
	bubble.setVelocity(-200, 60)
	bubble.setBounce(1);
	
	this.physics.add.collider(hero, bubble);
	
	spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
	
    this.input.on('pointerdown', function (pointer) {

        //console.log(this.game.loop.frame, 'down B');
		hero.setVelocityY(-350);

    }, this);

	
}

function update ()
{
	
	if (Phaser.Input.Keyboard.JustDown(spacebar) )
    {
		hero.setVelocityY(-350);
	}



}