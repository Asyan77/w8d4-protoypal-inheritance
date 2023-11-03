import Level from "./level.js"
import Bird from "./bird.js"

export default class FlappyBird {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart()
    console.log('hello')
    this.ctx.canvas.addEventListener("mousedown", () => this.click() )
  }

  restart() {
    this.level = new Level(this.dimensions)
    this.bird = new Bird(0, this.dimensions)
    console.log('hi')
    this.running = false
    this.animate()

  }

  animate() {
    this.level.animate(this.ctx)
    this.bird.animate(this.ctx)
      while(this.running) {
        requestAnimationFrame(this.animate.bind(this))
      }
  }

  play() {
    this.running = true
    this.animate()
  }
  
  click () {
    console.log('what')
    if (this.running) {
      this.bird.flap()
    } else {
    this.play()
    this.bird.flap()
  }
  }










}