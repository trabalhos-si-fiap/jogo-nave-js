export class Ship {
  constructor(
    x = 200,
    y = 20,
    height = 60,
    width = 60,
    speed = 10,
    direction = "stopped"
  ) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.speed = speed;
    this.direction = direction;
    this.image = new Image();
  }

  move(canvasWidth, canvasHeight) {
    if (!this.direction) return;

    if (
      this.direction === "right" &&
      this.x + this.width + this.speed <= canvasWidth
    ) {
      this.x += this.speed;
      this.image.src = "images/spacecrafts/nave_direita.png";
    } else if (this.direction === "left" && this.x - this.speed >= 0) {
      this.x -= this.speed;
      this.image.src = "images/spacecrafts/nave_esquerda.png";
    } else if (
      this.direction === "down" &&
      this.y + this.height * 2 + this.speed <= canvasHeight
    ) {
      this.y += this.speed;
      this.image.src = "images/spacecrafts/nave_baixo.png";
    } else if (this.direction === "up" && this.y - this.speed >= 0) {
      this.y -= this.speed;
      this.image.src = "images/spacecrafts/nave_cima.png";
    }
  }

  draw(ctx) {
    if (!this.image.src) {
      this.image.src = "images/spacecrafts/nave_direita.png";
    }
    ctx.drawImage(this.image, this.x, this.y, this.height, this.width);
  }
}
