const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const asteroideLargura = 20;
const asteroideAltura = 20;

import { Nave } from './nave.js'


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



let imagemAsteroide = new Image(50, 50);
imagemAsteroide.src = "images/rocks/Asteroids2.png";

const desenharAsteroide = () => {
/*asteroides.forEach((pedra) => {
    ctx.drawImage(imagemAsteroide, pedra.x, pedra.y);
});*/
ctx.drawImage(imagemAsteroide, asteroide.x, asteroide.y)
};


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

const colapsar = (nave) => {
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
    asteroide.x < nave.x + nave.largura &&
    asteroide.y + asteroideAltura > nave.y &&
    asteroide.y < nave.y + nave.largura
  ) {
    alert("Game Over!!");
    resetar();
  }
};


const escutaTeclado = (nave) => {
    document.addEventListener("keydown", ({ key }) => {
        if (key == "ArrowRight") {
          nave.direcao = "direita";
        }
        if (key == "ArrowLeft") {
          nave.direcao = "esquerda";
        }
        if (key == "ArrowDown") {
          nave.direcao = "baixo";
        }
        if (key == "ArrowUp") {
          nave.direcao = "cima";
        }
      });
      
      document.addEventListener("keyup", ({ key }) => {
         nave.direcao = "parado"
      });
      
}


const nave = new Nave();

const gameloop = () => {

  clearInterval(loopId);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  nave.mover(canvas.width, canvas.height);
  nave.desenhar(ctx);
  desenharAsteroide();
  movimentarAsteroide();
  colapsar(nave);
  mudarAsteroideXY();
  escutaTeclado(nave)

  loopId = setInterval(() => {
    gameloop();
  }, 50);
};

gameloop();



