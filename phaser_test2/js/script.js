var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 320,
        height: 480
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
    this.load.image('hero', 'assets/bubble_32x32.png');
	this.load.image('fondo', 'assets/fondo.png');
}

function create ()
{
	this.add.image(320/2, 480/2, 'fondo');
	
	hero = this.physics.add.sprite(100, 100, 'hero');
	hero.setCircle(16);
	hero.setCollideWorldBounds(true);
	
	spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
	
}

function update ()
{
	
	if (Phaser.Input.Keyboard.JustDown(spacebar) )
    {
		hero.setVelocityY(-350);
	}

}