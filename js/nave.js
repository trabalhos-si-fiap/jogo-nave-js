
export class Nave { 
    constructor(x = 200, y = 20, altura = 50, largura = 60, velocidade = 10, direcao = null) {
        this.x = x;
        this.y = y;
        this.altura = altura;
        this.largura = largura;
        this.velocidade = velocidade;
        this.direcao = direcao;
        this.imagem = new Image();
    }

    mover(canvasWidth, canvasHeight)  {
        if (!this.direcao) return;
  
        if (this.direcao === "direita" && this.x + this.largura + this.velocidade <= canvasWidth) {
            this.x += this.velocidade;
            this.imagem.src = "images/spacecrafts/nave_direita.png";
        } else if (this.direcao === "esquerda" && this.x - this.velocidade >= 0) {
            this.x -= this.velocidade;
            this.imagem.src = "images/spacecrafts/nave_esquerda.png";
        } else if (this.direcao === "baixo" && this.y + this.altura * 2 + this.velocidade <= canvasHeight) {
            this.y += this.velocidade;
            this.imagem.src = "images/spacecrafts/nave_baixo.png";
        } else if (this.direcao === "cima" && this.y - this.velocidade >= 0) {
            this.y -= this.velocidade;
            this.imagem.src = "images/spacecrafts/nave_cima.png";
        }
    }

    desenhar(ctx) {
        if (!this.imagem.src){
            this.imagem.src = "images/spacecrafts/nave_direita.png";
        }
        ctx.drawImage(
            this.imagem, 
            this.x, 
            this.y);
    }
};
