export const keyboardListener = (ship) => {
  document.addEventListener("keydown", ({ key }) => {
    if (key == "ArrowRight") {
      ship.direction = "right";
    }
    if (key == "ArrowLeft") {
      ship.direction = "left";
    }
    if (key == "ArrowDown") {
      ship.direction = "down";
    }
    if (key == "ArrowUp") {
      ship.direction = "up";
    }
  });

  document.addEventListener("keyup", ({ key }) => {
    ship.direction = "stopped";
  });
};
