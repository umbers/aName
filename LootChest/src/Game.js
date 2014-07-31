LootChest.Game = function(game)
{
this.map;
this.tileset;
this.layer;
this.player;
this.facing = 'left';
this.jumptimer = 0;
this.cursors;
this.jumpButton;
this.chest;
this.sword1;
this.sword2;
this.chip;
};



LootChest.Game.prototype =
{

preload: function()
{},

create: function()
{
this.physics.startSystem(Phaser.Physics.ARCADE)
this.stage.backgroundColor = '#008800';

this.map = this.add.tilemap('level');
this.map.addTilesetImage('tiles-1');
this.map.setCollisionByExclusion([13,15,16,46,47,48,49,50,51]);

this.layer = this.map.createLayer('Tile Layer 1');
this.layer.resizeWorld();

this.physics.arcade.gravity.y = 250;
this.player = this.add.sprite(32,32,'player')
this.physics.enable(this.player, Phaser.Physics.ARCADE);

this.player.body.bounce.y = 0.2;

this.player.body.collideWorldBounds = true;

this.player.body.setSize(20,32,5,16);

this.player.animations.add('left',[0,1,2,3],10, true);

this.player.animations.add('right',[5,6,7,8],10, true);

this.player.animations.add('turn',[4],20, true);

this.camera.follow(this.player);

this.cursors = this.input.keyboard.createCursorKeys();
this.jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

},

update: function()
{}

};