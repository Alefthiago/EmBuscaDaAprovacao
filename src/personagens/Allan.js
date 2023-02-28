export class Boss4{
    constructor(img){
    // atribudos
    this.id = "Allan";
    this.srcX = this.srcY = 0;
    this.width = 64;
    this.height = 64;
    this.posX = 2220;
    this.posY = -100;
    this.img = img; 
    this.hp = 250;
    this.Ataque = 25;
    this.Defesa = 10;
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
    CheirinhoNesseCodigo(ObjAtacado){
        ObjAtacado.hp = ObjAtacado.hp - (this.Ataque - ObjAtacado.Defesa)
    }
    Assembly(ObjAtacado){
        ObjAtacado.hp = ObjAtacado.hp - (this.Ataque * 4)
    }
};
var imgAllan = new Image();
imgAllan.src = "public/AllanA.png";
export var Allan = new Boss4(imgAllan);