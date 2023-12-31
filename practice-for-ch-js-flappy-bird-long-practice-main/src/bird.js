const CONSTANTS = {
    GRAVITY:  0.8,
    FLAP_SPEED:  -8,
    TERMINAL_VEL:  12,
    BIRD_WIDTH:  40,
    BIRD_HEIGHT:  30
  };


export default class Bird {
constructor (velocity = 0, dimensions) {
    this.velocity = velocity
    this.dimensions = dimensions
    this.positionY = this.dimensions.height / 2
    this.positionX = this.dimensions.width / 3
    this.vertical = 0
}


    drawBird (ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.positionX, this.positionY, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT );
    }

    animate (ctx) {
        this.move()
        this.drawBird(ctx)
    }

    move () {
        this.positionY += this.velocity
        this.velocity += CONSTANTS.GRAVITY
    }

    flap () {
        this.velocity = CONSTANTS.FLAP_SPEED
    }
} 


