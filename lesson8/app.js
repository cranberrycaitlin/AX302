var game = new Phaser.Game(800, 600, Phaser.AUTO,'', {preload:preload, create:create, update:update});

var score = 0;
var life = 3;

function preload(){
  game.load.image('sky', 'assets/sky.png');
  game.load.image('ground', 'assets/platform.png');
  game.load.image('star', 'assets/star.png');
  game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
  game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	// Create the sky
	game.add.sprite(0, 0, 'sky');
	// Create group of platforms
	platforms = game.add.physicsGroup();
	platforms.enableBody = true;
	// Create the ground
	var ground = platforms.create(0, 550, 'ground');
	ground.scale.setTo(2, 2);
	ground.body.immovable = true;
	// Create the ledges
	var ledge = platforms.create(400, 400, 'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(-100, 250, 'ground');
	ledge.body.immovable = true;

	//set text style
	var style = {font: "bold 32px Arial", fill: "#fff"}
	//positioning the score
	scorelabel = game.add.text(300,560, "Score: ", style);
	scoretext = game.add.text(420, 560, score,style);
	scorelabel.setShadow(3,3,'rgba(0,0,0,0.5)',2);
	scoretext.setShadow(3,3,'rgba(0,0,0,0.5)',2);

	//positioning the lives
	lifelabel = game.add.text(10,5, "Lives: ", style);
	lifetext = game.add.text(120,5, life,style);
	lifelabel.setShadow(3,3,'rgba(0,0,0,0.5)',2);
	lifetext.setShadow(3,3,'rgba(0,0,0,0.5)',2);

	//create the player
	player = game.add.sprite(32,400,'dude');
	//animating the player sprite
	player.animations.add('left',[0,1,2,3],10,true);
	player.animations.add('right',[5,6,7,8],10,true);
	game.physics.arcade.enable(player);
	player.body.bounce.y = 0.2;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;

	baddie = game.add.sprite(700,60,'baddie');
	baddie.animations.add('left',[0,1],10,true);
	baddie.animations.add('right',[2,3],10,true);
	baddie.body.bounce.y = 0.2;
	baddie.body.gravity.y = 300;
	baddie.body.collideWorldBounds = true;

	//create the stars
	star = game.add.physicsGroup();
	star.enableBody = true;
	// we will create 12 stars evenly spaced
	for (var i = 0; i < 12; i++){
		var star = star.create(i * 70, 0, 'star');
		star.body.gravity.y = 200;
		star.body.bounce.y = 0.7 + Math.random() * 0.2;
	}

	// add cursor control (with arrow)
	cursors = game.input.keyboard.createCursorKeys();
}


//function update(){
	// game.physics.arcade.collide(player, platforms);
	// game.physics.arcade.collide(stars, platforms);
	// game.physics.arcade.collide(baddie, platforms);

	// //set the player speed to 0 when there is nothing
	// player.body.velocity.x = 0;

	// //checking the keyboard input
	// // do something when the arrow key is pressed

	// if (cursors.left.isDown){
	// 	player.body.velocity.x = -150;
	// 	player.animations.play('left');
	// } else if (cursor.right.isDown){
	// 	player.body.velocity.x = 150;
	// 	player.animations.play('right');		 
	// } else {
	// 	player.animations.stop();
	// 	player.frame = 4;
	// }

	// //check if player is eligible to jump or not
	// if (cursors.up.isDown && player.body.touching.down){
	// 	player.body.velocity.y = -300;
	// }
}