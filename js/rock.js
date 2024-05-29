export class Rock {
  constructor(
    x = 0,
    y = 0,
    id = 0,
    height = 35,
    width = 35,
    image = null,
    speed = 10
  ) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.image = new Image();
    this.image.src = "images/rocks/Asteroids2.png";
    this.speed = speed;
    this.seatedTrajectory = false;
    this.yDirection = 0;
  }

  calcYtragetory(randInt) {
    if (!this.seatedTrajectory) {
      const middleToDown = this.y >= 180 && this.y <= 350;
      const middleUp = this.y > 0 && this.y < 180;

      if (middleToDown) {
        this.yDirection = randInt(0, -5);
      } else if (middleUp) {
        this.yDirection = randInt(0, 5);
      }
      this.seatedTrajectory = true;
    }
  }

  move(multipleSpeedX, randInt) {
    this.x -= this.speed * multipleSpeedX;
    this.calcYtragetory(randInt);
    this.y -= this.yDirection;
  }

  changeSpeed() {
    if (this.speed < 30) {
      this.speed += 2.5;
    }
  }

  spaw(canvas, randInt) {
    if (this.x < 0) {
      this.x = canvas.width;
      this.y = randInt(0, canvas.height);
      this.changeSpeed();
      this.seatedTrajectory = false;
    }
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.height, this.height);
  }
}
