export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class Score {
  constructor(clock, htmlPoins, htmlTimer) {
    this.score = 0;
    this.time = 0;
    this.clock = clock;
    this.stopedShipTime = 0;
    this.htmlTimer = htmlTimer;
    this.htmlPoins = htmlPoins;
  }

  async stopedShipTimer(ship) {
    let intervalId;
    if (ship.direction == "parado") {
      intervalId = setInterval(() => {
        this.stopedShipTime += 1;
      }, 1000);
    } else {
      clearInterval(intervalId);
      this.stopedShipTime = 0;
    }
    await sleep(1000);
    clearInterval(intervalId);
  }

  losePoints() {
    if (this.stopedShipTime > 3) {
      this.score -= 5;
      this.htmlPoins.innerHTML = `${this.score} pontos`;
    }
  }

  morePoints() {
    if (this.clock.onlySeconds % 5 == 0 && this.clock.onlySeconds != 0) {
      this.score += 5;
      this.htmlPoins.innerHTML = `${this.score} pontos`;
    }
  }

  restart() {
    this.score = 0;
    this.clock.restart();
  }

  run() {
    this.morePoints();
    this.losePoints();
  }
}

export class Clock {
  constructor(timerElement) {
    this.onlySeconds = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.timer;
    this.timerElement = timerElement;
  }

  updateTimer() {
    this.seconds++;
    this.onlySeconds++;
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes >= 60) {
        this.minutes = 0;
        this.hours++;
      }
    }
    this.timerElement.innerHTML =
      (this.hours ? (this.hours > 9 ? this.hours : "0" + this.hours) : "00") +
      ":" +
      (this.minutes
        ? this.minutes > 9
          ? this.minutes
          : "0" + this.minutes
        : "00") +
      ":" +
      (this.seconds > 9 ? this.seconds : "0" + this.seconds);
  }

  start() {
    this.timer = setInterval(() => this.updateTimer(), 1000);
  }

  stop() {
    clearInterval(this.timer);
    this.timer = null;
  }

  restart() {
    clearInterval(this.timer);
    this.timer = null;
    this.seconds = 0;
    this.onlySeconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.timerElement.textContent = "00:00:00";
  }
}
