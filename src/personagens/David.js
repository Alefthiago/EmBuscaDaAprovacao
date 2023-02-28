class Boss2{
    constructor(img){
        // atribudos
        this.id = "David";
        this.srcX = this.srcY = 0;
        this.width = 64;
        this.height = 64;
        this.posX = 2220;
        this.posY = -100;
        this.img = img;
        this.hp = 160;
        this.Ataque = 16;
        this.Defesa = 6;
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
        PacketTracer(ObjAtacado){
            ObjAtacado.hp = ObjAtacado.hp - (this.Ataque - ObjAtacado.Defesa)  
        }
        PartiuCrossfit(ObjAtacado){
            ObjAtacado.hp = ObjAtacado.hp - ((this.Ataque*3) - ObjAtacado.Defesa)
        }
};
var imgDavid = new Image();
imgDavid.src = "public/DavidA.png";
export var David = new Boss2(imgDavid);
