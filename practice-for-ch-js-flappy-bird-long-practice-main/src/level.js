const CONSTANTS = {
  distance: 220,
  gapSize: 150,
  pipeWidth: 50
}

export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.pipes = [{x: 0, gap: this.gapArea()}, {x: CONSTANTS.distance, gap: this.gapArea()}, {x: CONSTANTS.distance * 2, gap: this.gapArea()}]
  }

  gapArea() {
    return Math.floor(Math.random() * this.dimensions.height)
  }

  createPipe() {
    return {x: this.dimensions.width, gap: this.gapArea()}
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }
  animate(ctx) {
    this.drawBackground(ctx)
  }

  movePipes() {
    for (let i = 0; i < 3; i++) {
      this.pipes[i].x -= 1

    }
    if (this.pipes[0].x < 0) {
      this.pipes.slice(1)
      this.pipes.push(this.createPipe())
    }
  }

  drawPipes() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.pipes[0].x, 0, CONSTANTS.pipeWidth, this.dimensions.height);
  }
}
