const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const numeroAleatorio = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}
let imagemNave = new Image()
imagemNave.src = "images/spacecrafts/nave_direita.png"

const tamanho = 50;
const nave = { x: 200,  y: 200 }
const asteroide = {x: numeroAleatorio(0,500),  y: numeroAleatorio(0,500)}

const desenharNave = () => {
    ctx.fillStyle = '#ddd'
    ctx.drawImage(imagemNave,nave.x, nave.y)
}

const desenharAsteroide = () => {
    ctx.shadowColor = 'blue';
    ctx.shadowBlur = 50;
    ctx.fillStyle = 'blue'
    ctx.fillRect(asteroide.x, asteroide.y, tamanho, tamanho)
    ctx.shadowBlur = 0
}

let direcao, loopId;



const moveNave = () => {
if (!direcao)return

    if (direcao == 'direita'){
        nave.x = nave.x + 10
        imagemNave.src = "images/spacecrafts/nave_direita.png"
    }
    if (direcao == 'esquerda'){
        nave.x = nave.x - 10
        imagemNave.src = "images/spacecrafts/nave_esquerda.png"
    }
    if (direcao == 'baixo'){
        nave.y = nave.y + 10
        imagemNave.src = "images/spacecrafts/nave_baixo.png"
    }
    if (direcao == 'cima'){
        nave.y = nave.y - 10
        imagemNave.src = "images/spacecrafts/nave_cima.png"
    }

}

const gameloop = () => {
    clearInterval(loopId)
    ctx.clearRect(0,0,900,600);
    moveNave();
    desenharNave();
    desenharAsteroide();
    
    
    loopId = setInterval(() => {
        gameloop();
    }, 150)
}

gameloop();

document.addEventListener("keydown", ({key}) => {
    console.log(key);
    if(key == "ArrowRight"){
        direcao = 'direita'
    }
    if(key == "ArrowLeft"){
        direcao = 'esquerda'
    }
    if(key == "ArrowDown"){
        direcao = 'baixo'
    }
    if(key == "ArrowUp"){
        direcao = 'cima'
    }
})


