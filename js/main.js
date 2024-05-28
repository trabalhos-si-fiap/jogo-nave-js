const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const asteroideLargura = 20;
const asteroideAltura = 20;
const naveLargura = 60;
const naveAltura = 50;

let direcao, loopId;

let validacao = true;

if( direcao == "parado"){
    validacao = false
}

let score = 0;
let time = 0;
const pontuaçao = document.getElementById('pontos');
const intervalo = setInterval(() => {
    while (!validacao) {
        score -= 1
    }
    pontuaçao.innerHTML = ` Pontos: ${score}`;
}, 1000);

const numeroAleatorio = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};
let imagemNave = new Image();
imagemNave.src = "images/spacecrafts/nave_direita.png";

const tamanho = 50;
const nave = { x: 200, y: 200 };

//let asteroides = [{ x: canvas.width, y: numeroAleatorio(0, 300)}];

const criarAsteroide = () => {
    /*let novoAsteroide = { x: canvas.width, y: numeroAleatorio(0, 300)}
    asteroides.forEach((pedra) => {
        if(novoAsteroide.y == pedra.y){
            novoAsteroide.y += asteroideAltura
        }
    })*/
  return { x: canvas.width, y: numeroAleatorio(0, 300)};
};


const asteroide = criarAsteroide();

const desenharNave = () => {
  ctx.drawImage(imagemNave, nave.x, nave.y);
};

let imagemAsteroide = new Image(50, 50);
imagemAsteroide.src = "images/rocks/Asteroids2.png";

const desenharAsteroide = () => {
  /*asteroides.forEach((pedra) => {
    ctx.drawImage(imagemAsteroide, pedra.x, pedra.y);
  });*/
  ctx.drawImage(imagemAsteroide, asteroide.x, asteroide.y)
};


const moveNave = () => {
  if (!direcao) return;

  if (direcao == "direita") {
    nave.x = nave.x + 10;
    imagemNave.src = "images/spacecrafts/nave_direita.png";
  }
  if (direcao == "esquerda") {
    nave.x = nave.x - 10;
    imagemNave.src = "images/spacecrafts/nave_esquerda.png";
  }
  if (direcao == "baixo") {
    nave.y = nave.y + 10;
    imagemNave.src = "images/spacecrafts/nave_baixo.png";
  }
  if (direcao == "cima") {
    nave.y = nave.y - 10;
    imagemNave.src = "images/spacecrafts/nave_cima.png";
  }

};


let decrementarAsteroide = 10;

const movimentarAsteroide = () => {
  /*asteroides.forEach((pedra) => {
    pedra.x -= decrementarAsteroide;
  });*/
  asteroide.x -= decrementarAsteroide;
  return;
};


const mudarAsteroideXY = () => {
  /*asteroides.forEach((pedra) => {
    if (pedra.x < 0) {
      pedra.x = canvas.width;
      pedra.y = numeroAleatorio(0, 300);
    }
    if (decrementarAsteroide < 30) {
      decrementarAsteroide += 5;
    }else{
        asteroides.push(criarAsteroide())
    }
  });*/

  if (asteroide.x < 0){
    asteroide.x = canvas.width;
    asteroide.y = numeroAleatorio(0,300)
    if (decrementarAsteroide < 50) {
        decrementarAsteroide += 5
    }    
    }
    return
};

const resetar = () => {
  nave.x = 200;
  nave.y = 200;
  asteroide.x = canvas.width;
  asteroide.y = numeroAleatorio(0, 300);
  score = 0;
};

const colapsar = () => {
    /*asteroides.forEach((pedra) => {
        if (
            pedra.x + asteroideLargura > nave.x &&
            pedra.x < nave.x + naveLargura &&
            pedra.y + asteroideAltura > nave.y &&
            pedra.y < nave.y + naveLargura
          ) {
            alert("Game Over!!");
            resetar();
          }
    })*/ 


  if (
    asteroide.x + asteroideLargura > nave.x &&
    asteroide.x < nave.x + naveLargura &&
    asteroide.y + asteroideAltura > nave.y &&
    asteroide.y < nave.y + naveLargura
  ) {
    alert("Game Over!!");
    resetar();
  }
};

const gameloop = () => {
  clearInterval(loopId);
  ctx.clearRect(0, 0, 900, 600);
  moveNave();
  desenharNave();
  desenharAsteroide();
  movimentarAsteroide();
  colapsar();
  mudarAsteroideXY();

  loopId = setInterval(() => {
    gameloop();
  }, 100);
};

gameloop();

document.addEventListener("keydown", ({ key }) => {
  console.log(key);
  if (key == "ArrowRight") {
    direcao = "direita";
  }
  if (key == "ArrowLeft") {
    direcao = "esquerda";
  }
  if (key == "ArrowDown") {
    direcao = "baixo";
  }
  if (key == "ArrowUp") {
    direcao = "cima";
  }
});

document.addEventListener("keyup", ({ key }) => {
   direcao = "parado"
});



