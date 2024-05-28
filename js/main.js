import { Ship } from "./ship.js";
import { Rock } from "./asteroid.js";
import { keyboardListener } from "./userInput.js";
import { randInt } from "./myFunctions.js";
import { checkCollision } from "./myFunctions.js";
import { Score, Clock } from "./score.js";
import { runOberver } from "./myObserver.js";
import { Wave } from "./wave.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let loopId;

const timerDiv = document.getElementById("timer");
const pointsDiv = document.getElementById("scorePoints");
const wavesDiv = document.getElementById("wave");



const clock = new Clock(timerDiv);
const score = new Score(clock, pointsDiv, timerDiv);
const ship = new Ship();
const rocks = [new Rock(canvas.width, 150)];
const wave = new Wave(wavesDiv, clock, rocks, canvas.width);
let mulSpeedX = 1;

score.clock.start();

runOberver(timerDiv, ship, score, wave)

const gameLoop = () => {
  
  clearInterval(loopId);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ship.move(canvas.width, canvas.height);
  ship.draw(ctx);

  rocks.forEach((rock) => {
    rock.draw(ctx)
  })

  rocks.forEach((rock) => {
    rock.move(mulSpeedX, randInt)
  })


  rocks.forEach((rock) => {
    checkCollision(ship, rock, canvas.width, score);
  })
  

  rocks.forEach((rock) => {
    rock.spaw(canvas, randInt)
  })

  keyboardListener(ship);


  loopId = setInterval(() => {
    gameLoop();
  }, 50);
};

gameLoop();
