class Dungeon {
    constructor(path, wallsList) {
        this.path = path;
        this.wallsList = wallsList;
        this.imgX;
        this.imgY;
        this.constantX = -2920;
        this.constantY = -2950;
        this.constant2X = -2620;
        this.constant2Y = 201;
        this.constant3X = 1351;
        this.constant3Y = 398;
    }

    updateMap1(valX, valY) {
      this.imgX = -valX;
      this.imgY = -valY;
      image(this.path, this.imgX - 2920, this.imgY - 2950);
    }

    updateMap2(valX, valY) {
      this.imgX = -valX;
      this.imgY = -valY;
      image(this.path, this.imgX - 2620, this.imgY - (-200));
    }

    updateMap3(valX, valY) {
      this.imgX = -valX;
      this.imgY = -valY;
      image(this.path, this.imgX + 1350, this.imgY + 400);
    }

//———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

    room1G(){
      fill(40, 40, 40, 127);
      rect(1068 + this.constant3X + this.imgX, 185 + this.constant3Y + this.imgY, 39, 319);
      rect(169 + this.constant3X + this.imgX, 185 + this.constant3Y + this.imgY, 899, 103);
      rect(169 + this.constant3X + this.imgX, 184 + this.constant3Y + this.imgY, 41, 753);
      rect(169 + this.constant3X + this.imgX, 863 + this.constant3Y + this.imgY, 362, 73);
      rect(738 + this.constant3X + this.imgX, 863 + this.constant3Y + this.imgY, 372, 74);
      rect(1069 + this.constant3X + this.imgX, 727 + this.constant3Y + this.imgY, 42, 210);
      rect(1068 + this.constant3X + this.imgX, 395 + this.constant3Y + this.imgY, 1745, 106); //4 top
      rect(1068 + this.constant3X + this.imgX, 727 + this.constant3Y + this.imgY, 1745, 70); //4 bottom
    }

    room2G(){
      rect(494 + this.constant3X + this.imgX, 862 + this.constant3Y + this.imgY, 39, 1625); //1 left
      rect(739 + this.constant3X + this.imgX, 862 + this.constant3Y + this.imgY, 39, 1624); //1 right
      rect(162 + this.constant3X + this.imgX, 2383 + this.constant3Y + this.imgY, 371, 103);
      rect(162 + this.constant3X + this.imgX, 2384 + this.constant3Y + this.imgY, 39, 1607);
      rect(161 + this.constant3X + this.imgX, 3921 + this.constant3Y + this.imgY, 949, 70);
      rect(1071 + this.constant3X + this.imgX, 3706 + this.constant3Y + this.imgY, 39, 285);
      rect(1071 + this.constant3X + this.imgX, 2384 + this.constant3Y + this.imgY, 39, 1099);
      rect(739 + this.constant3X + this.imgX, 2385 + this.constant3Y + this.imgY, 371, 100);
      rect(1071 + this.constant3X + this.imgX, 3373 + this.constant3Y + this.imgY, 1743, 106); //2 top
      rect(1072 + this.constant3X + this.imgX, 3708 + this.constant3Y + this.imgY, 1742, 68); //2 bottom
    }
    
    room3G(){
      rect(3407 + this.constant3X + this.imgX, 6166 + this.constant3Y + this.imgY, 40, 362);
      rect(1627 + this.constant3X + this.imgX, 6458 + this.constant3Y + this.imgY, 1824, 72);
      rect(1627 + this.constant3X + this.imgX, 5534 + this.constant3Y + this.imgY, 36, 995);
      rect(1626 + this.constant3X + this.imgX, 5533 + this.constant3Y + this.imgY, 1326, 103);
      rect(3157 + this.constant3X + this.imgX, 5533 + this.constant3Y + this.imgY, 291, 102);
      rect(3406 + this.constant3X + this.imgX, 5534 + this.constant3Y + this.imgY, 37, 405);
      rect(2915 + this.constant3X + this.imgX, 4012 + this.constant3Y + this.imgY, 37, 1624); //3 left
      rect(3158 + this.constant3X + this.imgX, 4012 + this.constant3Y + this.imgY, 39, 1624); //3 right
    }

    room4G(){
      rect(2770 + this.constant3X + this.imgX, 177 + this.constant3Y + this.imgY, 44, 323);
      rect(2769 + this.constant3X + this.imgX, 180 + this.constant3Y + this.imgY, 944, 104);
      rect(3672 + this.constant3X + this.imgX, 181 + this.constant3Y + this.imgY, 41, 753);
      rect(2771 + this.constant3X + this.imgX, 858 + this.constant3Y + this.imgY, 942, 76);
      rect(2771 + this.constant3X + this.imgX, 728 + this.constant3Y + this.imgY, 41, 207);
    }

    room5G(){
      rect(2777 + this.constant3X + this.imgX, 3087 + this.constant3Y + this.imgY, 39, 394);
      rect(2779 + this.constant3X + this.imgX, 3087 + this.constant3Y + this.imgY, 1387, 102);
      rect(4372 + this.constant3X + this.imgX, 3089 + this.constant3Y + this.imgY, 224, 94);
      rect(4558 + this.constant3X + this.imgX, 3087 + this.constant3Y + this.imgY, 37, 343);
      rect(4557 + this.constant3X + this.imgX, 3659 + this.constant3Y + this.imgY, 40, 425);
      rect(3158 + this.constant3X + this.imgX, 4012 + this.constant3Y + this.imgY, 1439, 71);
      rect(2777 + this.constant3X + this.imgX, 4012 + this.constant3Y + this.imgY, 176, 72);
      rect(2773 + this.constant3X + this.imgX, 3708 + this.constant3Y + this.imgY, 40, 377);
    }

    room6G(){
      rect(5110 + this.constant3X + this.imgX, 5696 + this.constant3Y + this.imgY, 42, 239);
      rect(5110 + this.constant3X + this.imgX, 5697 + this.constant3Y + this.imgY, 941, 101);
      rect(6010 + this.constant3X + this.imgX, 5697 + this.constant3Y + this.imgY, 38, 754);
      rect(5108 + this.constant3X + this.imgX, 6375 + this.constant3Y + this.imgY, 945, 75);
      rect(5111 + this.constant3X + this.imgX, 6164 + this.constant3Y + this.imgY, 41, 284);
      rect(3408 + this.constant3X + this.imgX, 5832 + this.constant3Y + this.imgY, 1743, 103); //7 top
      rect(3407 + this.constant3X + this.imgX, 6165 + this.constant3Y + this.imgY, 1744, 70); //7 bottom
    }

    room7G(){
      rect(4008 + this.constant3X + this.imgX, 1568 + this.constant3Y + this.imgY, 159, 74); 
      rect(4008 + this.constant3X + this.imgX, 889 + this.constant3Y + this.imgY, 42, 750); 
      rect(4010 + this.constant3X + this.imgX, 891 + this.constant3Y + this.imgY, 940, 100); 
      rect(4909 + this.constant3X + this.imgX, 890 + this.constant3Y + this.imgY, 40, 750); 
      rect(4372 + this.constant3X + this.imgX, 1566 + this.constant3Y + this.imgY, 577, 76); 
      rect(4128 + this.constant3X + this.imgX, 1566 + this.constant3Y + this.imgY, 39, 1626); //5 left
      rect(4373 + this.constant3X + this.imgX, 1566 + this.constant3Y + this.imgY, 37, 1624); //5 right
    }

    room8G(){
      rect(7551 + this.constant3X + this.imgX, 3946 + this.constant3Y + this.imgY, 38, 1623); //8 left
      rect(7794 + this.constant3X + this.imgX, 3946 + this.constant3Y + this.imgY, 38, 1623); //8 Right
      rect(6257 + this.constant3X + this.imgX, 3024 + this.constant3Y + this.imgY, 1828, 99); 
      rect(8046 + this.constant3X + this.imgX, 3021 + this.constant3Y + this.imgY, 35, 996); 
      rect(7793 + this.constant3X + this.imgX, 3945 + this.constant3Y + this.imgY, 291, 68); 
      rect(6261 + this.constant3X + this.imgX, 3949 + this.constant3Y + this.imgY, 1325, 73); 
      rect(6260 + this.constant3X + this.imgX, 3019 + this.constant3Y + this.imgY, 38, 413); 
      rect(6260 + this.constant3X + this.imgX, 3659 + this.constant3Y + this.imgY, 38, 413); 
      rect(4555 + this.constant3X + this.imgX, 3325 + this.constant3Y + this.imgY, 1742, 106); 
      rect(4555 + this.constant3X + this.imgX, 3659 + this.constant3Y + this.imgY, 1742, 106); 
    }

    room9G(){
      rect(8137 + this.constant3X + this.imgX, 2916 + this.constant3Y + this.imgY, 1538, 72);
      rect(8136 + this.constant3X + this.imgX, 2917 + this.constant3Y + this.imgY, 40, 1101);
      rect(9636 + this.constant3X + this.imgX, 2917 + this.constant3Y + this.imgY, 40, 1101);
      rect(8139 + this.constant3X + this.imgX, 3947 + this.constant3Y + this.imgY, 612, 67);
      rect(8958 + this.constant3X + this.imgX, 3947 + this.constant3Y + this.imgY, 718, 71);
      rect(8712 + this.constant3X + this.imgX, 3945 + this.constant3Y + this.imgY, 40, 1624); // 9 Left
      rect(8958 + this.constant3X + this.imgX, 3945 + this.constant3Y + this.imgY, 40, 1624); //9 Right
    }

    room10G(){
      rect(5785 + this.constant3X + this.imgX, 6756 + this.constant3Y + this.imgY, 948, 102); 
      rect(6694 + this.constant3X + this.imgX, 6756 + this.constant3Y + this.imgY, 52, 258);
      rect(6694 + this.constant3X + this.imgX, 7244 + this.constant3Y + this.imgY, 52, 258);
      rect(5782 + this.constant3X + this.imgX, 6754 + this.constant3Y + this.imgY, 54, 751);
      rect(5783 + this.constant3X + this.imgX, 7434 + this.constant3Y + this.imgY, 947, 86);
      rect(6692 + this.constant3X + this.imgX, 6910 + this.constant3Y + this.imgY, 2033, 104); //10 top
      rect(6692 + this.constant3X + this.imgX, 7243 + this.constant3Y + this.imgY, 2031, 69); //10 bottom
    }

    room11G(){
      rect(8958 + this.constant3X + this.imgX, 5463 + this.constant3Y + this.imgY, 371, 104);
      rect(7793 + this.constant3X + this.imgX, 5462 + this.constant3Y + this.imgY, 958, 107);
      rect(7506 + this.constant3X + this.imgX, 5462 + this.constant3Y + this.imgY, 38, 997);
      rect(7501 + this.constant3X + this.imgX, 6388 + this.constant3Y + this.imgY, 1223, 72);
      rect(8932 + this.constant3X + this.imgX, 6389 + this.constant3Y + this.imgY, 398, 71);
      rect(9291 + this.constant3X + this.imgX, 5461 + this.constant3Y + this.imgY, 46, 997);
      rect(8686 + this.constant3X + this.imgX, 6386 + this.constant3Y + this.imgY, 38, 630); // 11 Left Top
      rect(8689 + this.constant3X + this.imgX, 7242 + this.constant3Y + this.imgY, 38, 689); // 11 left Bottom
      rect(8933 + this.constant3X + this.imgX, 6386 + this.constant3Y + this.imgY, 38, 1543); // 11 Right
    }

    room12G(){
      rect(8357 + this.constant3X + this.imgX, 7829 + this.constant3Y + this.imgY, 370, 102); 
      rect(8359 + this.constant3X + this.imgX, 7828 + this.constant3Y + this.imgY, 35, 1607); 
      rect(8358 + this.constant3X + this.imgX, 9366 + this.constant3Y + this.imgY, 947, 68); 
      rect(9266 + this.constant3X + this.imgX, 7828 + this.constant3Y + this.imgY, 55, 1606); 
      rect(8932 + this.constant3X + this.imgX, 7828 + this.constant3Y + this.imgY, 337, 102); 
    }
//———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

    room1R(){
      fill(40, 40, 40, 127);
      rect(712 + this.constant2X + this.imgX, 512 + this.constant2Y + this.imgY, 940, 109);
      rect(712 + this.constant2X + this.imgX, 512 + this.constant2Y + this.imgY, 45, 750);
      rect(1611 + this.constant2X + this.imgX, 512 + this.constant2Y + this.imgY, 45, 750);
      rect(711 + this.constant2X + this.imgX, 1191 + this.constant2Y + this.imgY, 383, 76);
      rect(1297 + this.constant2X + this.imgX, 1191 + this.constant2Y + this.imgY, 358, 77);
      rect(1298 + this.constant2X + this.imgX, 1191 + this.constant2Y + this.imgY, 41, 1624); //1 Right 
      rect(1054 + this.constant2X + this.imgX, 1191 + this.constant2Y + this.imgY, 41, 1624); //1 Left
    }

    room2R(){
      rect(285 + this.constant2X + this.imgX, 2708 + this.constant2Y + this.imgY, 809, 108);
      rect(1297 + this.constant2X + this.imgX, 2707 + this.constant2Y + this.imgY, 813, 105);
      rect(282 + this.constant2X + this.imgX, 2708 + this.constant2Y + this.imgY, 40, 996);
      rect(288 + this.constant2X + this.imgX, 3635 + this.constant2Y + this.imgY, 1823, 63);
      rect(2067 + this.constant2X + this.imgX, 3341 + this.constant2Y + this.imgY, 44, 364);
      rect(2067 + this.constant2X + this.imgX, 2709 + this.constant2Y + this.imgY, 42, 402);
      rect(1297 + this.constant2X + this.imgX, 2709 + this.constant2Y + this.imgY, 808, 106);
      rect(2067 + this.constant2X + this.imgX, 3009 + this.constant2Y + this.imgY, 1743, 102); // 2 top
      rect(2067 + this.constant2X + this.imgX, 3340 + this.constant2Y + this.imgY, 1744, 69); // 2 botton
    }

    room3R(){
      rect(4170 + this.constant2X + this.imgX, 474 + this.constant2Y + this.imgY, 943, 104);
      rect(4171 + this.constant2X + this.imgX, 475 + this.constant2Y + this.imgY, 42, 750);
      rect(4171 + this.constant2X + this.imgX, 1154 + this.constant2Y + this.imgY, 264, 74);
      rect(5070 + this.constant2X + this.imgX, 964 + this.constant2Y + this.imgY, 43, 276);
      rect(5070 + this.constant2X + this.imgX, 475 + this.constant2Y + this.imgY, 58, 264);
      rect(4640 + this.constant2X + this.imgX, 1153 + this.constant2Y + this.imgY, 476, 79);
      rect(5070 + this.constant2X + this.imgX, 633 + this.constant2Y + this.imgY, 1742, 105); //6 top
      rect(5069 + this.constant2X + this.imgX, 966 + this.constant2Y + this.imgY, 1744, 69); //6 bottom
    }

    room4R(){
      rect(3770 + this.constant2X + this.imgX, 2745 + this.constant2Y + this.imgY, 41, 364);
      rect(3774 + this.constant2X + this.imgX, 3343 + this.constant2Y + this.imgY, 38, 397);
      rect(3773 + this.constant2X + this.imgX, 3672 + this.constant2Y + this.imgY, 1823, 68);
      rect(5553 + this.constant2X + this.imgX, 3365 + this.constant2Y + this.imgY, 40, 375);
      rect(5554 + this.constant2X + this.imgX, 2745 + this.constant2Y + this.imgY, 45, 390);
      rect(4642 + this.constant2X + this.imgX, 2745 + this.constant2Y + this.imgY, 948, 104);
      rect(3771 + this.constant2X + this.imgX, 2745 + this.constant2Y + this.imgY, 663, 105);
      rect(4397 + this.constant2X + this.imgX, 1154 + this.constant2Y + this.imgY, 39, 1695); //3 left
      rect(4641 + this.constant2X + this.imgX, 1154 + this.constant2Y + this.imgY, 39, 1695); //3 right
      rect(5554 + this.constant2X + this.imgX, 3033 + this.constant2Y + this.imgY, 1744, 103); //4 top
      rect(5554 + this.constant2X + this.imgX, 3365 + this.constant2Y + this.imgY, 1744, 73); //4 Bottom
    }

    room5R(){
      rect(6012 + this.constant2X + this.imgX, 8413 + this.constant2Y + this.imgY, 39, 411);
      rect(4514 + this.constant2X + this.imgX, 8752 + this.constant2Y + this.imgY, 1538, 71);
      rect(4514 + this.constant2X + this.imgX, 7724 + this.constant2Y + this.imgY, 40, 1098);
      rect(4512 + this.constant2X + this.imgX, 7724 + this.constant2Y + this.imgY, 1537, 69);
      rect(6011 + this.constant2X + this.imgX, 7723 + this.constant2Y + this.imgY, 38, 461);
    }

    room6R(){
    rect(7252 + this.constant2X + this.imgX, 2845 + this.constant2Y + this.imgY, 945, 106);
     rect(8156 + this.constant2X + this.imgX, 2848 + this.constant2Y + this.imgY, 43, 752);
     rect(7261 + this.constant2X + this.imgX, 3367 + this.constant2Y + this.imgY, 37, 231);
     rect(7258 + this.constant2X + this.imgX, 2903 + this.constant2Y + this.imgY, 37, 231);
     rect(7255 + this.constant2X + this.imgX, 3527 + this.constant2Y + this.imgY, 387, 73);
     rect(7850 + this.constant2X + this.imgX, 3528 + this.constant2Y + this.imgY, 348, 69);
     rect(7603 + this.constant2X + this.imgX, 3526 + this.constant2Y + this.imgY, 42, 1624); // 5 Left
     rect(7851 + this.constant2X + this.imgX, 3526 + this.constant2Y + this.imgY, 42, 1624); // 5 Right
    }

    room7R(){
      rect(8048 + this.constant2X + this.imgX, 5966 + this.constant2Y + this.imgY, 39, 1622); //8 left
      rect(8293 + this.constant2X + this.imgX, 5967 + this.constant2Y + this.imgY, 38, 1624); //8 right
      rect(8293 + this.constant2X + this.imgX, 5966 + this.constant2Y + this.imgY, 802, 73); 
      rect(9053 + this.constant2X + this.imgX, 5044 + this.constant2Y + this.imgY, 44, 993); 
      rect(7848 + this.constant2X + this.imgX, 5045 + this.constant2Y + this.imgY, 1247, 98); 
      rect(7274 + this.constant2X + this.imgX, 5966 + this.constant2Y + this.imgY, 814, 74); 
      rect(7275 + this.constant2X + this.imgX, 5043 + this.constant2Y + this.imgY, 36, 993); 
      rect(7273 + this.constant2X + this.imgX, 5043 + this.constant2Y + this.imgY, 368, 103); 
    }

    room8R(){
      rect(8625 + this.constant2X + this.imgX, 8804 + this.constant2Y + this.imgY, 39, 288);
      rect(7716 + this.constant2X + this.imgX, 9020 + this.constant2Y + this.imgY, 950, 71);
      rect(7716 + this.constant2X + this.imgX, 8415 + this.constant2Y + this.imgY, 40, 675);
      rect(6013 + this.constant2X + this.imgX, 8415 + this.constant2Y + this.imgY, 1741, 68); //9 bottom
      rect(6012 + this.constant2X + this.imgX, 8082 + this.constant2Y + this.imgY, 1743, 101); //9 top
      rect(7716 + this.constant2X + this.imgX, 7485 + this.constant2Y + this.imgY, 38, 700);
      rect(7715 + this.constant2X + this.imgX, 7485 + this.constant2Y + this.imgY, 371, 103);
      rect(8292 + this.constant2X + this.imgX, 7488 + this.constant2Y + this.imgY, 371, 97);
      rect(8624 + this.constant2X + this.imgX, 7484 + this.constant2Y + this.imgY, 40, 1091);
    }

    room9R(){
      rect(6773 + this.constant2X + this.imgX, 407 + this.constant2Y + this.imgY, 40, 328);
      rect(6772 + this.constant2X + this.imgX, 405 + this.constant2Y + this.imgY, 1826, 102);
      rect(8555 + this.constant2X + this.imgX, 405 + this.constant2Y + this.imgY, 39, 339);
      rect(8555 + this.constant2X + this.imgX, 974 + this.constant2Y + this.imgY, 47, 428);
      rect(6774 + this.constant2X + this.imgX, 1330 + this.constant2Y + this.imgY, 1824, 72);
      rect(6777 + this.constant2X + this.imgX, 966 + this.constant2Y + this.imgY, 36, 435);
      rect(8555 + this.constant2X + this.imgX, 641 + this.constant2Y + this.imgY, 1741, 104);//7 up
      rect(8555 + this.constant2X + this.imgX, 974 + this.constant2Y + this.imgY, 1741, 67);//7 down
    }

    room10R(){
      rect(10254 + this.constant2X + this.imgX, 331 + this.constant2Y + this.imgY, 42, 415);
      rect(10257 + this.constant2X + this.imgX, 330 + this.constant2Y + this.imgY, 944, 103);
      rect(11164 + this.constant2X + this.imgX, 332 + this.constant2Y + this.imgY, 41, 1608);
      rect(10770 + this.constant2X + this.imgX, 1867 + this.constant2Y + this.imgY, 437, 70);
      rect(10257 + this.constant2X + this.imgX, 1867 + this.constant2Y + this.imgY, 311, 69);
      rect(10258 + this.constant2X + this.imgX, 974 + this.constant2Y + this.imgY, 37, 964);
      rect(10529 + this.constant2X + this.imgX, 1869 + this.constant2Y + this.imgY, 37, 1615);//10 left
      rect(10770 + this.constant2X + this.imgX, 1868 + this.constant2Y + this.imgY, 40, 1619);//10 right
    }

    room11R(){
      rect(10197 + this.constant2X + this.imgX, 3382 + this.constant2Y + this.imgY, 368, 100);
      rect(10198 + this.constant2X + this.imgX, 3382 + this.constant2Y + this.imgY, 44, 755);
      rect(10201 + this.constant2X + this.imgX, 4059 + this.constant2Y + this.imgY, 939, 74);
      rect(11100 + this.constant2X + this.imgX, 3381 + this.constant2Y + this.imgY, 41, 757);
      rect(10772 + this.constant2X + this.imgX, 3383 + this.constant2Y + this.imgY, 369, 101);
    }

    room12R(){
      rect(10327 + this.constant2X + this.imgX, 8299 + this.constant2Y + this.imgY, 41, 278);
      rect(10326 + this.constant2X + this.imgX, 8298 + this.constant2Y + this.imgY, 943, 103);
      rect(11226 + this.constant2X + this.imgX, 8298 + this.constant2Y + this.imgY, 41, 754);
      rect(10326 + this.constant2X + this.imgX, 8976 + this.constant2Y + this.imgY, 942, 75);
      rect(10327 + this.constant2X + this.imgX, 8806 + this.constant2Y + this.imgY, 41, 245);
      rect(8624 + this.constant2X + this.imgX, 8471 + this.constant2Y + this.imgY, 1743, 104);//11 top
      rect(8625 + this.constant2X + this.imgX, 8803 + this.constant2Y + this.imgY, 1743, 71);//11 bottom
    }

//———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

//BLUE ROOMS
    room1(){
      rect(524 + this.constantX + this.imgX, 202 + this.constantY + this.imgY, 39, 1104);
      rect(524 + this.constantX + this.imgX, 201 + this.constantY + this.imgY, 1538, 71);
      rect(2023 + this.constantX + this.imgX, 202 + this.constantY + this.imgY, 37, 1100);
      rect(1387 + this.constantX + this.imgX, 1230 + this.constantY + this.imgY, 674, 72);
      rect(524 + this.constantX + this.imgX, 1230 + this.constantY + this.imgY, 659, 67);
      rect(1141 + this.constantX + this.imgX, 1229 + this.constantY + this.imgY, 43, 1622);//1 left
      rect(1387 + this.constantX + this.imgX, 1230 + this.constantY + this.imgY, 42, 1621);//1 right
    }
    
    room2(){
      rect(809 + this.constantX + this.imgX, 2748 + this.constantY + this.imgY, 372, 105);
      rect(811 + this.constantX + this.imgX, 2748 + this.constantY + this.imgY, 37, 1606);
      rect(810 + this.constantX + this.imgX, 4285 + this.constantY + this.imgY, 370, 60);
      rect(1385 + this.constantX + this.imgX, 4285 + this.constantY + this.imgY, 372, 60);
      rect(1718 + this.constantX + this.imgX, 2749 + this.constantY + this.imgY, 40, 1607);
      rect(1388 + this.constantX + this.imgX, 2749 + this.constantY + this.imgY, 372, 104);
      rect(1143 + this.constantX + this.imgX, 4285 + this.constantY + this.imgY, 39, 1621);//2 left
      rect(1388 + this.constantX + this.imgX, 4283 + this.constantY + this.imgY, 38, 1624);//2 right
    }

    room3(){
      rect(377 + this.constantX + this.imgX, 5800 + this.constantY + this.imgY, 806, 101);
      rect(376 + this.constantX + this.imgX, 6726 + this.constantY + this.imgY, 421, 69);
      rect(377 + this.constantX + this.imgX, 5800 + this.constantY + this.imgY, 38, 992);
      rect(1387 + this.constantX + this.imgX, 5802 + this.constantY + this.imgY, 810, 101);
      rect(2156 + this.constantX + this.imgX, 5801 + this.constantY + this.imgY, 46, 407);
      rect(2158 + this.constantX + this.imgX, 6100 + this.constantY + this.imgY, 1748, 111); //4 top
      rect(2158 + this.constantX + this.imgX, 6436 + this.constantY + this.imgY, 1748, 111); //4 bottom
      rect(2156 + this.constantX + this.imgX, 6437 + this.constantY + this.imgY, 40, 336);
      rect(1003 + this.constantX + this.imgX, 6723 + this.constantY + this.imgY, 1196, 77);
    }

    room4(){
      rect(428 + this.constantX + this.imgX, 8242 + this.constantY + this.imgY, 48, 750);
      rect(1332 + this.constantX + this.imgX, 8242 + this.constantY + this.imgY, 44, 758);
      rect(431 + this.constantX + this.imgX, 8923 + this.constantY + this.imgY, 948, 69);
      rect(429 + this.constantX + this.imgX, 8231 + this.constantY + this.imgY, 372, 117);
      rect(1003 + this.constantX + this.imgX, 8231 + this.constantY + this.imgY, 372, 117);
      rect(757 + this.constantX + this.imgX, 6723 + this.constantY + this.imgY, 47, 1624); //2 left
      rect(1004 + this.constantX + this.imgX, 6723 + this.constantY + this.imgY, 47, 1624); //2 right
    }

    room5(){
      rect(4635 + this.constantX + this.imgX, 1159 + this.constantY + this.imgY, 41, 999);
      rect(4633 + this.constantX + this.imgX, 1161 + this.constantY + this.imgY, 1825, 110);
      rect(6414 + this.constantX + this.imgX, 1160 + this.constantY + this.imgY, 47, 234);
      rect(6416 + this.constantX + this.imgX, 1395 + this.constantY + this.imgY, 2642, 109); //9 top
      rect(4635 + this.constantX + this.imgX, 2084 + this.constantY + this.imgY, 186, 73);
      rect(5029 + this.constantX + this.imgX, 2089 + this.constantY + this.imgY, 1427, 73);
      rect(6411 + this.constantX + this.imgX, 1730 + this.constantY + this.imgY, 43, 432);
      rect(6410 + this.constantX + this.imgX, 1730 + this.constantY + this.imgY, 2648, 83);//9 bottom 
    }

    room6(){
      rect(4455 + this.constantX + this.imgX, 3582 + this.constantY + this.imgY, 44, 753);
      rect(5355 + this.constantX + this.imgX, 3584 + this.constantY + this.imgY, 44, 753);
      rect(4495 + this.constantX + this.imgX, 3583 + this.constantY + this.imgY, 287, 104);
      rect(5059 + this.constantX + this.imgX, 3583 + this.constantY + this.imgY, 300, 104);
      rect(4499 + this.constantX + this.imgX, 4260 + this.constantY + this.imgY, 314, 75);
      rect(5020 + this.constantX + this.imgX, 4259 + this.constantY + this.imgY, 377, 76);
      rect(4778 + this.constantX + this.imgX, 2082 + this.constantY + this.imgY, 42, 1605); //5 left
      rect(5028 + this.constantX + this.imgX, 2082 + this.constantY + this.imgY, 42, 1605); //5 left
      rect(4775 + this.constantX + this.imgX, 4258 + this.constantY + this.imgY, 41, 1649); //6 Left
      rect(5019 + this.constantX + this.imgX, 4258 + this.constantY + this.imgY, 40, 1651); //6 right
    }

    room7(){
      rect(5019 + this.constantX + this.imgX, 5801 + this.constantY + this.imgY, 664, 106); 
      rect(5640 + this.constantX + this.imgX, 5799 + this.constantY + this.imgY, 45, 344); 
      rect(5634 + this.constantX + this.imgX, 6370 + this.constantY + this.imgY, 48, 429); 
      rect(3860 + this.constantX + this.imgX, 6724 + this.constantY + this.imgY, 1821, 70); 
      rect(3859 + this.constantX + this.imgX, 6432 + this.constantY + this.imgY, 40, 363); 
      rect(3861 + this.constantX + this.imgX, 5799 + this.constantY + this.imgY, 38, 407); 
      rect(3860 + this.constantX + this.imgX, 5801 + this.constantY + this.imgY, 955, 104); 
    }

    room8(){
      rect(11 + this.constantX + this.imgX, 11 + this.constantY + this.imgY, 11, 11);
      rect(6456 + this.constantX + this.imgX, 2221 + this.constantY + this.imgY, 44, 264);
      rect(5559 + this.constantX + this.imgX, 2210 + this.constantY + this.imgY, 953, 117);
      rect(5551 + this.constantX + this.imgX, 2240 + this.constantY + this.imgY, 49, 752);
      rect(5559 + this.constantX + this.imgX, 2908 + this.constantY + this.imgY, 953, 117);
      rect(6445 + this.constantX + this.imgX, 2720 + this.constantY + this.imgY, 44, 264);
    }

    room9(){
     rect(8244 + this.constantX + this.imgX, 5767 + this.constantY + this.imgY, 1828, 116);
     rect(10028 + this.constantX + this.imgX, 5776 + this.constantY + this.imgY, 36, 578);
     rect(10022 + this.constantX + this.imgX, 6584 + this.constantY + this.imgY, 53, 188);
     rect(8232 + this.constantX + this.imgX, 6700 + this.constantY + this.imgY, 1834, 72);
     rect(8226 + this.constantX + this.imgX, 6378 + this.constantY + this.imgY, 44, 398);
     rect(8236 + this.constantX + this.imgX, 5758 + this.constantY + this.imgY, 44, 398);
     rect(5644 + this.constantX + this.imgX, 6034 + this.constantY + this.imgY, 2632, 116); //7 top
     rect(5644 + this.constantX + this.imgX, 6370 + this.constantY + this.imgY, 2632, 78); //7 bottom
    }

    room10(){
      fill(40, 40, 40, 127);
      rect(9018 + this.constantX + this.imgX, 1316 + this.constantY + this.imgY, 41, 189);
      rect(9019 + this.constantX + this.imgX, 1316 + this.constantY + this.imgY, 947, 103);
      rect(9927 + this.constantX + this.imgX, 1315 + this.constantY + this.imgY, 40, 1182);
      rect(9926 + this.constantX + this.imgX, 2394 + this.constantY + this.imgY, 2602, 104);//11 top
      rect(9016 + this.constantX + this.imgX, 1725 + this.constantY + this.imgY, 50, 766);
      rect(6454 + this.constantX + this.imgX, 2379 + this.constantY + this.imgY, 2604, 111);//10 top
      rect(6454 + this.constantX + this.imgX, 2716 + this.constantY + this.imgY, 2604, 83);//10 bottom
      rect(9925 + this.constantX + this.imgX, 2727 + this.constantY + this.imgY, 43, 196);
      rect(9015 + this.constantX + this.imgX, 2852 + this.constantY + this.imgY, 953, 71);
      rect(9023 + this.constantX + this.imgX, 2723 + this.constantY + this.imgY, 37, 219);
    }

    room11(){
      rect(12486 + this.constantX + this.imgX, 2316 + this.constantY + this.imgY, 43, 184);
      rect(12485 + this.constantX + this.imgX, 2316 + this.constantY + this.imgY, 943, 99);
      rect(13387 + this.constantX + this.imgX, 2317 + this.constantY + this.imgY, 40, 752);
      rect(12487 + this.constantX + this.imgX, 2995 + this.constantY + this.imgY, 940, 74);
      rect(12488 + this.constantX + this.imgX, 2727 + this.constantY + this.imgY, 42, 341);
      rect(9927 + this.constantX + this.imgX, 2726 + this.constantY + this.imgY, 2606, 72);//11 bottom
    }

    room12(){
      rect(13520 + this.constantX + this.imgX, 6111 + this.constantY + this.imgY, 47, 754);
      rect(12620 + this.constantX + this.imgX, 6111 + this.constantY + this.imgY, 943, 100);
      rect(12619 + this.constantX + this.imgX, 6113 + this.constantY + this.imgY, 42, 241);
      rect(12622 + this.constantX + this.imgX, 6788 + this.constantY + this.imgY, 939, 76);
      rect(12618 + this.constantX + this.imgX, 6581 + this.constantY + this.imgY, 45, 282);
      rect(10022 + this.constantX + this.imgX, 6580 + this.constantY + this.imgY, 2639, 71);//8 top
      rect(10022 + this.constantX + this.imgX, 6246 + this.constantY + this.imgY, 2641, 108);//8 bottom
    }
}