const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const tamanho = 50;

const nave = { x: 200, y: 200 }

const desenharNave = () => {
    ctx.fillStyle = '#ddd'
    ctx.fillRect(nave.x, nave.y, tamanho, tamanho)
}

let direcao;

const moveNave = () => {
if (!direcao)return

    if (direcao == 'direita'){
        nave.x = nave.x + 10
    }
    if (direcao == 'esquerda'){
        nave.x = nave.x - 10
    }
    if (direcao == 'baixo'){
        nave.y = nave.y + 10
    }
    if (direcao == 'cima'){
        nave.y = nave.y - 10
    }


}

setInterval(() => {
    ctx.clearRect(0,0,900,600)

    moveNave()
    desenharNave()
},300)
