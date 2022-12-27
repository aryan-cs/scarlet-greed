function preload () {

    base_player = loadImage("assets/images/player/base_player.png");

}

function setup () {

    player = new Player(300, 200);
    createCanvas(WIDTH, HEIGHT);
    frameRate(60);
    noSmooth();

}

function draw () {

    background(BACKGROUND_COLOR);

    tick();

    player.update();
    player.render();

    console.log(player.pos)

}

function tick () {

    if (frameCount % 6 == 0) { fps++; }

}




