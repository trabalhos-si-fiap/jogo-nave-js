favico: https://www.flaticon.com/br/buscar?word=spaceship
sprites: https://arcadeisland.itch.io/space-shooter-wang-tiles
https://fearless-design.itch.io/tiny-ships-free-spaceships

<!DOCTYPE html>
<html>
	<head>
	<meta charset="utf-8"/>
	<title> Detecção de colisão</title>
	</head>
<body>
<canvas id="minha-tela" width="800" height="400" style="border: #F00 solid 1px;"> </canvas>  
<script type="text/javascript">
		
	var canvas = document.getElementById("minha-tela");
	var context = canvas.getContext("2d");
	 //Dados do quadrado vermelho
     var x_vermelho = 0;
     var y_vermelho = 200;
     var largura_vermelho = 50;
     var altura_vermelho = 50;
    //Dados do quadrado azul
     var x_azul = 700;
     var y_azul = 200;
     var largura_azul = 50;
     var altura_azul = 50;
     
	 //executa o gameloop a cada ciclo do navegador
     requestAnimationFrame(gameloop);
     function detectarColisao()
     {
         if( ( (x_vermelho + largura_vermelho) >  x_azul &amp;&amp; x_vermelho < (x_azul + 
    largura_azul) ) &amp;&amp; ( (y_vermelho + altura_vermelho) > y_azul &amp;&amp; y_vermelho < (y_azul + altura_azul) 
) )
         {
          //interrompe o game loop parando a movimentação dos quadrados
          alert("game over");
         }
		 else {
			//chama novamente o ciclo da animação
			requestAnimationFrame(gameloop);
		 }
     }
      
	 
     function gameloop()
     {
         desenharQuadrado(x_vermelho,y_vermelho);
		 desenharQuadrado(x_azul,y_azul);
		 detectarColisao();
		
     }
     
	 function desenharQuadrado()
     {
         //limpa todo o Canvas
         context.clearRect(0, 0, 800, 400); 
         //Definindo a cor vermelha
         context.fillStyle = "rgb(255,0,0)";
  		 //desenha o quadrado vermelho
         context.fillRect(x_vermelho, y_vermelho,  largura_vermelho, altura_vermelho); 
         //Definindo a cor azul
         context.fillStyle = "rgb(0,0,255)";
         //desenha o quadrado azul
         context.fillRect(x_azul, y_azul, largura_azul, altura_azul); 
         //para movimentar o quadrado vermelho
         x_azul = x_azul - 5; 
		 x_vermelho = x_vermelho + 5; 
      }
 </script>
</body>
</html>