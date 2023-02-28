// @ts-nocheck
export  class Protagonista{
    constructor(id, img, hp){
        // atribudos
        this.mvDireita = this.mvEsquerda = this.mvCima = this.mvBaixo = false;
        this.srcX = this.srcY = 0;
        this.width = 64;
        this.height = 64;
        this.posX = 716;
        this.posY = 848;
        this.img = img;
        this.speed = 3;
        this.ctdA = 0;
        this.id = id;
        this.srcXC = this.srcYC = 30;

        this.certificadoLili = false;
        this.certificadoDavid = false;
        this.certificadoRanieri = false;
        this.certificadoAllan = false; 

        this.cafe = 3;
        this.hotDog = 2;
        this.hp = hp;
        this.Ataque = 0;
        this.Defesa = 0;
        }
        halfWidth(){ 
            return this.width/2;
        }
        halfHeight(){
            return this.height/2;
        }
        centroX(){
            return this.posX + this.halfWidth();
        }
        centroY(){
            return this.posY + this.halfHeight();
        } 
        // desenho
        desenho(ctx){  
        ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.height,this.posX,this.posY, this.srcXC, this.srcYC);
        this.animacao(); 
        }
        animacao(){
            if(this.mvEsquerda || this.mvDireita || this.mvCima || this.mvBaixo){
            this.ctdA++;
            if(this.ctdA >= 20){
                this.ctdA = 0;
            }
            else{
            this.srcX = Math.floor(this.ctdA / 5 ) * this.width;
                }  
            } 
        };
        // movimentção
        move(){
            if(this.mvEsquerda){
                this.posX -= this.speed;
                this.srcY = this.height * 1;
            } 
            else if(this.mvDireita){
            this.posX += this.speed;
            this.srcY = this.height * 2;
            } 
            else if(this.mvCima){
            this.posY -= this.speed;
            this.srcY = this.height * 3;
            }
            else if (this.mvBaixo){
            this.posY += this.speed;
            this.srcY = this.height * 0;
            } 
        }
        ChuvaDeCodigos(ObjAtacado){
            ObjAtacado.hp = ObjAtacado.hp - (this.Ataque - ObjAtacado.Defesa) 
        }
    
        Recursao(ObjAtacado){
            ObjAtacado.hp = ObjAtacado.hp - ((this.Ataque * 4) - ObjAtacado.Defesa)
        }
    
        HoraDoCafe() {
            let min = 30;
            let randoValue = (Math.floor(Math.random() * 50));
    
            if (randoValue < min) {
                randoValue =  min
                this.hp = this.hp + randoValue;
            } else {
                this.hp = this.hp + randoValue;
            }
        }
    
        HotDogJhon() {
            this.hp = this.hp + 70;
        }
      
 }
 var imgAlef = new Image();
 imgAlef.src = "public/Jogadora.png";
 export var Jogadora = new Protagonista ("Luiza",imgAlef,100);