class Renderer {

    constructor (entity, spriteWidth, spriteHeight, scale) {

        this.entity = entity
        this.spritesheet = entity.spritesheet;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.spriteCount = (this.spritesheet.width / this.spriteWidth) - 2;
        this.scale = scale;

    }

    display (state, facing) {

        var row;

        if (facing === "left") { row = 7; }

        else if (facing === "right") { row = 6; }

        else if (facing === "up") { row = 5; }

        else if (facing === "down") { row = 4; }

        if (state === "idle") {

            return image(this.spritesheet, this.entity.pos.x, this.entity.pos.y,
                            this.spriteWidth * this.scale, this.spriteHeight * this.scale,
                            this.spriteWidth * 0, (this.spriteHeight * (row - 4)),
                            this.spriteWidth, this.spriteHeight);

        }

        else if (state === "walk") {

            return image(this.spritesheet, this.entity.pos.x, this.entity.pos.y, // draw location
                            this.spriteWidth * this.scale, this.spriteHeight * this.scale, // draw size
                            this.spriteWidth * (fps % this.spriteCount), this.spriteHeight * row, // sprite location
                            this.spriteWidth, this.spriteHeight); // sprite size

        }

    }
    
  }