class Player {

    constructor (x, y, s, v) {

      this.pos = createVector(x, y);
      this.angle = 0;
      this.bullets = [];
      this.s = s;
      this.v = 4;
      this.color = "white";
      this.accent = "black";


    }
    
    render () {

      push();

      noStroke();
      rectMode(CENTER);
      translate(this.pos.x, this.pos.y);
      rotate(this.angle);
      fill(this.color);
      rect(0, 0, this.s, this.s, 5);
      fill(this.accent);
      triangle(-10, -10, 10, 0, -10, 10);

      
      pop();

    }
    
    update () {

      let xSpeed = 0;
      let ySpeed = 0;

      if (keyIsDown(65)) { xSpeed = -this.v; }
      if (keyIsDown(68)) { xSpeed = this.v; }
      if (keyIsDown(87)) { ySpeed = -this.v; }
      if (keyIsDown(83)) { ySpeed = this.v; }

      this.pos.add(xSpeed, ySpeed);
      this.angle = atan2(mouseY - this.pos.y, mouseX - this.pos.x);

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