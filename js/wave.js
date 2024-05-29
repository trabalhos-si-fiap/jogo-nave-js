import { Rock } from "./rock.js";

export class Wave {
  constructor(waveDiv, clock, rocks, canvasWidth) {
    this.waveDiv = waveDiv;
    this.clock = clock;
    this.rocks = rocks;
    this.canvasWidth = canvasWidth;
    this.wave = 1;
    this.waveDiv.innerHTML = `Fase ${this.wave}`;
  }

  changeWave() {
    if (this.clock.onlySeconds % 30 == 0 && this.rocks.length <= 5) {
      this.wave += 1;
      this.waveDiv.innerHTML = `Fase ${this.wave}`;
      this.rocks.push(new Rock(this.canvasWidth, 150, this.wave));
      console.log(this.rocks.length);
    }
  }
}
