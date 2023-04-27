class Cobra{
  constructor(x,y,tamanho){
    this.posicao = createVector(x,y);
    this.direcao = createVector(1,0);
    this.velocidade = createVector(this.tamanho,this.tamanho);
    this.corpo = [] ; 
    this.tamanho = tamanho;
    this.corpo.push(this.posicao);
  }
  
   desenha(){
    for(this.parte of this.corpo){
      rect(this.parte.x,this.parte.y,this.tamanho);
    }    
  }
  
  anda(){
    this.novaParte = this.corpo[this.corpo.length-1].copy();
    this.novaParte.add(this.direcao.x*this.tamanho,this.direcao.y*this.tamanho);
   
    if(this.novaParte.x>=width){
      this.novaParte.x=0;
    }
    if(this.novaParte.x<0){
      this.novaParte.x=width-this.tamanho;
    }
    if(this.novaParte.y>=height){
      this.novaParte.y=0;
    }
    if(this.novaParte.y<0){
      this.novaParte.y=height-this.tamanho;
    }
      this.corpo.push(this.novaParte);      
      this.corpo.splice(0,1)
     
  }
  
  comer(){
    this.posicaoCabeca = this.corpo[this.corpo.length-1].copy();
    this.posicaoCabeca.add(this.direcao.x*this.tamanho,this.direcao.y*this.tamanho);
    this.corpo.push(this.posicaoCabeca);
  }
  
  controla(){
    if(keyIsDown(LEFT_ARROW)){
      if(this.direcao.x==0 && this.direcao.y!=0){
        this.direcao.x=-1;
        this.direcao.y=0;
      }
      
    }else if(keyIsDown(RIGHT_ARROW)){
      if(this.direcao.x==0 && this.direcao.y!=0){
        this.direcao.x=1;
        this.direcao.y=0;
      }
      
    }else if(keyIsDown(DOWN_ARROW)){
      if(this.direcao.y==0 && this.direcao.x!=0){
        this.direcao.x=0;
        this.direcao.y=1;
      }
      
    }else if(keyIsDown(UP_ARROW)){
      if(this.direcao.y==0 && this.direcao.x!=0){
        this.direcao.x=0;
        this.direcao.y=-1;
      }
    }else if(keyIsDown(ENTER)){
      this.comer();
    }
  }
  selfColisao(){
    this.cabeca = this.corpo[this.corpo.length-1];
    
    for(let i=0;i<this.corpo.length-1;i++){
      if(this.direcao.y>0){//Indo para baixo
        if(this.cabeca.y+this.tamanho==this.corpo[i].y && this.cabeca.x==this.corpo[i].x){
          console.log("Colisao abaixo");
          return true;
        }
      }else if(this.direcao.y<0){//Indo para cima
        if(this.cabeca.y==this.corpo[i].y+this.tamanho && this.cabeca.x==this.corpo[i].x){
          console.log("Colisao acima");
          return true;
        }
      }else if(this.direcao.x>0){//Indo para a direita
        if(this.cabeca.x+this.tamanho==this.corpo[i].x && this.cabeca.y==this.corpo[i].y){
          console.log("Colisao a direita");
          return true;
        }        
      }else if(this.direcao.x<0){//Indo para a esquerda
        if(this.cabeca.x==this.corpo[i].x+this.tamanho && this.cabeca.y==this.corpo[i].y){
          console.log("Colisao a esquerda");
          return true;
        }        
      }
    }
  }
  
   colide(objeto){
    this.cabeca = this.corpo[this.corpo.length-1];
      
    if(this.direcao.y>0){//Indo para baixo
      if(this.cabeca.y+this.tamanho==objeto.y && this.cabeca.x==objeto.x){
        return true;
      }
    }else if(this.direcao.y<0){//Indo para cima
      if(this.cabeca.y==objeto.y+this.tamanho && this.cabeca.x==objeto.x){
        return true;
      }
    }else if(this.direcao.x>0){//Indo para a direita
      if(this.cabeca.x==objeto.x && this.cabeca.y==objeto.y){
        return true;
      }        
    }else if(this.direcao.x<0){//Indo para a esquerda
      if(this.cabeca.x==objeto.x+this.tamanho && this.cabeca.y==objeto.y){
        return true;
      }
    }
      return false;
  }
    
 
}
