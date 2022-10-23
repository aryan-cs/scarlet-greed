function preload () {

    

}

function setup () {

    player = new Player(WIDTH / 2, HEIGHT / 2, 50);
    createCanvas(WIDTH, HEIGHT);

}

function draw () {

    background(BACKGROUND_COLOR);

    player.update();
    player.render();

}




