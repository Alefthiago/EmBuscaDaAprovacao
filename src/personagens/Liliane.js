export class Boss1{
    constructor(img,hp){
        // atribudos
        this.id = "Liliane";
        this.srcX = this.srcY = 0;
        this.width = 64;
        this.height = 64;
        this.posX = 2220;
        this.posY = -100;
        this.img = img;
        
        this.hp = hp;
        this.Ataque = 13;
        this.Defesa = 5;
        this.srcXC = 64;
        this.srcYC = 64;
        }
        // colisão
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
        }
        // batalha   
        Linux(ObjAtacado){
            ObjAtacado.hp = ObjAtacado.hp - (this.Ataque - ObjAtacado.Defesa)
        }

        Arduino(ObjAtacado){
            ObjAtacado.hp = ObjAtacado.hp - ((this.Ataque*3) - ObjAtacado.Defesa)
        }    
};

let imgLili = new Image();
imgLili.src = "public/LilianeA.png";
export var lili = new Boss1(imgLili, 128);