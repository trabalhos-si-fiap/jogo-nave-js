export const randInt = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

export const checkCollision = (ship, rock, canvasWidth, score, rocks, wave) => {
  if (
    rock.x + rock.width > ship.x &&
    rock.x < ship.x + ship.width &&
    rock.y + rock.height > ship.y &&
    rock.y < ship.y + ship.width
  ) {
    alert("Game Over!!\nClique em ok para reiniciar.");
    restartGame(ship, rock, canvasWidth, score, rocks, wave);
  }
};

export const restartGame = (ship, rock, canvasWidth, score, rocks, wave) => {
  ship.x = 200;
  ship.y = 200;
  ship.direction = "stopped";
  score.stopedShipTime = 0;
  rock.x = canvasWidth;
  rock.y = randInt(0, 300);
  score.restart();
  score.clock.start();
  wave.wave = 0;

  for (let i = 0; i <= rocks.length; i++) {
    rocks.pop();
  }
};
