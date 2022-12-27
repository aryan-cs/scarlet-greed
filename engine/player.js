class Player {

    constructor (x, y) {

      this.pos = createVector(x, y);
      this.bullets = [];
      this.state = "idle";
      this.facing = "down";
      this.velocity = 1;
      this.color = "white";
      this.accent = "black";
      this.spritesheet = base_player;
      
      this.renderer = new Renderer(this, 64, 64, 3);

    }
    
    render () {

      push();

      noStroke();
      // rectMode(CENTER);
      translate(this.pos.x, this.pos.y);
      this.renderer.display(this.state, this.facing);
      
      pop();

    }
    
    update () {

      let xSpeed = 0;
      let ySpeed = 0;

      if (keyIsDown(65) || keyIsDown(37)) { xSpeed = -this.velocity; this.state = "walk"; }
      else if (keyIsDown(68) || keyIsDown(39)) { xSpeed = this.velocity; this.state = "walk"; }
      else if (keyIsDown(87) || keyIsDown(38)) { ySpeed = -this.velocity; this.state = "walk"; }
      else if (keyIsDown(83) || keyIsDown(40)) { ySpeed = this.velocity; this.state = "walk"; }
      else { this.state = "idle"; }

      // sahil fix this movement thingy

      if (xSpeed != 0 || ySpeed != 0) { this.pos.add(xSpeed, ySpeed); }
      if (xSpeed > 0) { this.facing = "right"; }
      else if (xSpeed < 0) { this.facing = "left"; }
      else if (ySpeed > 0) { this.facing = "down"; }
      else if (ySpeed < 0) { this.facing = "up"; }

    }
    
    shoot () { this.bullets.push(new Bullet(this.pos.x, this.pos.y, this.angle)); }
    
    hasShot(zombie) {

      for (let i = 0; i < this.bullets.length; i++) {

        if (dist(this.bullets[i].x, this.bullets[i].y, zombie.pos.x, zombie.pos.y) < 15) {
          this.bullets.splice(i, 1);
          return true;

        }

      }
      
      return false;

    }

  }