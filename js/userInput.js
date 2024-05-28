export const keyboardListener = (ship) => {
  document.addEventListener("keydown", ({ key }) => {
    if (key == "ArrowRight") {
      ship.direction = "direita";
    }
    if (key == "ArrowLeft") {
      ship.direction = "esquerda";
    }
    if (key == "ArrowDown") {
      ship.direction = "baixo";
    }
    if (key == "ArrowUp") {
      ship.direction = "cima";
    }
  });

  document.addEventListener("keyup", ({ key }) => {
    ship.direction = "parado";
  });
};
