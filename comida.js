class Comida{
  constructor(tamanho){
    this.tamanho = tamanho;
    this.xtemp = floor(random(0,width/this.tamanho)) * this.tamanho;
    this.ytemp = floor(random(0,height/this.tamanho)) * this.tamanho;
    this.posicao = createVector(this.xtemp,this.ytemp);
    
    this.comidaVisivel = true;
  }
  
   desenha(){
    if(this.comidaVisivel){
      push();
      fill(color('pink'));
      rect(this.posicao.x,this.posicao.y,this.tamanho);
      pop();
    }
   }
     
    disponivel(){
      return(this.comidaVisivel);
    }
  
}