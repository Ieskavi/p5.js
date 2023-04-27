let tamanho = 20;
let gameover = false;

function setup() {
  createCanvas(800, 800);
  cobra = new Cobra(width/2, height/2, tamanho);
  comida = new Comida(tamanho);
  frameRate(30);
}

function draw() {
  background(0);
  cobra.desenha();
  if(!gameover){
    cobra.anda();
    cobra.controla();  
    if(cobra.selfColisao()){
      gameover = true;
    }
    if(comida.disponivel){
      comida.desenha();
    }
    
    if(cobra.colide(comida.posicao)){
      cobra.comer();
      comida = new Comida(tamanho);
    }
  }
  
}