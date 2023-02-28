class Boss3{
    constructor(img){
        // atribudos
        this.id = "Ranieri";
        this.srcX = this.srcY = 0;
        this.width = 64;
        this.height = 64;
        this.posX = 2220;
        this.posY = -100;
        this.img = img;
        this.hp = 200;
        this.Ataque = 20;
        this.Defesa = 8;
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
        AntiReact(ObjAtacado){
            ObjAtacado.hp = ObjAtacado.hp - (this.Ataque - ObjAtacado.Defesa) 
        }
    
        Mimosinha(ObjAtacado){
            ObjAtacado.hp = ObjAtacado.hp - ((this.Ataque * 4) - ObjAtacado.Defesa) 
        }
};
var imgRany = new Image();
imgRany.src = "public/RanieriA.png";
export var Ranieri = new Boss3(imgRany);
