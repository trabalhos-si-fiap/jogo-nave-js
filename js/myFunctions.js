export const randInt = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

export const checkCollision = (ship, rock, canvasWidth, score) => {
  if (
    (rock.x + rock.width > ship.x) &&
    (rock.x < ship.x + ship.width) &&
    (rock.y + rock.height > ship.y) &&
    (rock.y < ship.y + ship.width)
  ) {
    alert("Game Over!!");
    restartGame(ship, rock, canvasWidth, score);
  } else {
    console.log('Não colidiu', rock.id)
  }
};

export const restartGame = (ship, rock, canvasWidth, score) => {
  ship.x = 200;
  ship.y = 200;
  rock.x = canvasWidth;
  rock.y = randInt(0, 300);
  score.score = 0;
};

