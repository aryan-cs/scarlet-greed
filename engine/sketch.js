var map1Path, map2Path, map3Path;


function preload () {
    base_player = loadImage("assets/images/player/base_player.png");
    // map1Path = loadImage('assets/images/maps/TotalMap.png');
    // map2Path = loadImage('assets/images/maps/TotalMapRed.png');
    map3Path = loadImage('assets/images/maps/TotalMapGreen.png')
}

function setup () {
    player = new Player(1000, 500);
    dungeon1 = new Dungeon(map1Path, 1);
    dungeon2 = new Dungeon(map2Path, 1);
    dungeon3 = new Dungeon(map3Path, 1);
    
    createCanvas(WIDTH, HEIGHT);
    frameRate(60);
    noSmooth();
}

function draw () {
    background(BACKGROUND_COLOR);
    tick();
    // dungeon1.updateMap1(player.getPlayerX(), player.getPlayerY());
    // dungeon1.room1();
    // dungeon1.room2();
    // dungeon1.room3();
    // dungeon1.room4();
    // dungeon1.room5();
    // dungeon1.room6();
    // dungeon1.room7();
    // dungeon1.room8();
    // dungeon1.room9();
    // dungeon1.room10();
    // dungeon1.room11();
    // dungeon1.room12();

    // dungeon2.updateMap2(player.getPlayerX(), player.getPlayerY());
    // dungeon2.room1R();
    // dungeon2.room2R();
    // dungeon2.room3R();
    // dungeon2.room4R();
    // dungeon2.room5R();
    // dungeon2.room6R();
    // dungeon2.room7R();
    // dungeon2.room8R();
    // dungeon2.room9R();
    // dungeon2.room10R();
    // dungeon2.room11R();
    // dungeon2.room12R();

    dungeon3.updateMap3(player.getPlayerX(), player.getPlayerY());
    dungeon3.room1G();
    dungeon3.room2G();
    dungeon3.room3G();
    dungeon3.room4G();
    dungeon3.room5G();
    dungeon3.room6G();
    dungeon3.room7G();
    dungeon3.room8G();
    dungeon3.room9G();
    dungeon3.room10G();
    dungeon3.room11G();
    dungeon3.room12G();

    player.update();
    player.render();
    // player.checkCollision(400, 100, 200, 100);
}

function tick () {
    if (frameCount % 6 == 0) { fps++; }
}



