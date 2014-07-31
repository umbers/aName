LootChest = 
{

};

LootChest.Boot = function (game)
{

};

LootChest.Boot.prototype = 
{
	preload: function ()
	{
		this.load.tilemap('level','assets/sprites/level1.json',null, Phaser.Tilemap.TILED_JSON);
		this.load.image('tiles-1', 'assets/sprites/tiles-1.png');
		this.load.spritesheet('player','assets/sprites/dude.png', 32,48);
		this.load.image('chest','assets/sprites/chest.png');
		this.load.image('sword1','assets/sprites/sword1.png');
		this.load.image('sword2','assets/sprites/sword2.png');
		this.load.image('chip','assets/sprites/chip.png');
	},
	
	create: function ()
	{
		this.state.start('Game');
	}

};