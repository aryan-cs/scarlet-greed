class Player {
    constructor (x, y) {
      this.pos = createVector(x, y);
      this.bullets = [];
      this.state = "idle";
      this.facing = "down";
      this.velocity = 30;
      this.color = "white";
      this.accent = "black";
      this.spritesheet = base_player;
      this.renderer = new Renderer(this, 64, 64, 2);
      this.playerWidth = 40;
      this.playerHeight = 65;
      this.tempX = x;
      this.tempY = y;
    }
    
    render () {
      push();
      noStroke();
      // translate(this.pos.x, this.pos.y);
      this.renderer.display(this.state, this.facing);
      pop();
    }

  update () { 
    if (keyIsDown(49)) {
      console.log(this.tempX + " | " + this.tempY);
      // rect(this.pos.x, this.pos.y, 50, 50);
    }


    let xSpeed = 0;
    let ySpeed = 0;
    var moveLeft = false, moveRight = false, moveUp = false, moveDown = false;
    if (keyIsDown(65)) {
      moveLeft = true;
      this.state = "walk";
    } 
   if (keyIsDown(68)) {
      moveRight = true;
      this.state = "walk";
    } 
   if (keyIsDown(87)) {
      moveUp = true;
      this.state = "walk";
    } 
   if (keyIsDown(83)) {
      moveDown = true;
      this.state = "walk";
    } 
    
    if(!moveLeft && !moveRight && !moveUp && !moveDown) {
      this.state = "idle";
    }
    
    if(!(moveLeft && moveRight)){
      if(moveLeft) {
        xSpeed = -1* this.velocity;
      } else if (moveRight){
        xSpeed = this.velocity;
      }
    }

    if(!(moveUp && moveDown)){
      if(moveUp) {
        ySpeed = -1* this.velocity;
      } else if (moveDown) {
        ySpeed = this.velocity;
      }
    }
    if (xSpeed != 0 || ySpeed != 0) {
      //  this.pos.add(xSpeed, ySpeed); 
      this.tempX += xSpeed;
      this.tempY += ySpeed;
    }
    if (xSpeed > 0) { 
      this.facing = "right"; 
    }
    else if (xSpeed < 0) { 
      this.facing = "left"; 
    }
    else if (ySpeed > 0) {
       this.facing = "down"; 
    }
    else if (ySpeed < 0) { 
      this.facing = "up"; 
    }
    // this.pos.add(xSpeed, ySpeed);
    this.tempX += xSpeed;
    this.tempY += ySpeed;
  }

  checkCollision(xCoord, yCoord, width1, height1){
    var rightEdge = false, leftEdge = false, topEdge = false, bottomEdge = false;
    var rightAmt = 0, leftAmt = 0, topAmt = 0, bottomAmt = 0;
    if(this.pos.x - this.playerWidth/2 < xCoord + width1){
      leftEdge = true
      leftAmt = Math.abs((this.pos.x - this.playerWidth/2) - (xCoord + width1));
      // console.log("left");
    }
    if(this.pos.x + this.playerWidth/2 > xCoord){
      rightEdge = true
      rightAmt = Math.abs((this.pos.x + this.playerWidth/2) - (xCoord));
      // console.log("right")
    }
    if(this.pos.y + this.playerHeight/2 > yCoord){
      bottomEdge = true
      bottomAmt = Math.abs((this.pos.y + this.playerHeight/2) - (yCoord));
    }
    if(this.pos.y - this.playerHeight/2 < yCoord + height1){
      topEdge = true
      topAmt = Math.abs((this.pos.y - this.playerHeight/2) - (yCoord + height1));
    }

    if(rightEdge && leftEdge && topEdge && bottomEdge) {
      // console.log("LEFT: " + leftAmt + " , RIGHT: " + rightAmt + " , TOP: " + topAmt + " , BOTTOM: " + bottomAmt);
      if(leftAmt < rightAmt && leftAmt < topAmt && leftAmt < bottomAmt){
        this.pos.x = xCoord + width1 + this.playerWidth/2;
      }
      if(rightAmt < leftAmt && rightAmt < topAmt && rightAmt < bottomAmt){
        this.pos.x = xCoord - this.playerWidth/2;
      }
      if(topAmt < leftAmt && topAmt < rightAmt && topAmt < bottomAmt){
        this.pos.y = yCoord + height1 + this.playerHeight/2;
      }
      if(bottomAmt < leftAmt && bottomAmt < topAmt && bottomAmt < rightAmt){
        this.pos.y = yCoord - this.playerHeight/2;
      }
   
    }
  }
  
  getPlayerX(){return this.tempX};
  getPlayerY(){return this.tempY};
  
}
