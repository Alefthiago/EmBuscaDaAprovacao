export class blocosSaida{
  constructor(id, img, posX, posY, width, height, posDesenhoX, posDesenhoY, srcDesenhoX, srcDesenhoY){
    this.img = img;
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;

    this.posDesenhoX = posDesenhoX;
    this.posDesenhoY = posDesenhoY;
    this.srcDesenhoX = srcDesenhoX;
    this.srcDesenhoY = srcDesenhoY;
    this.id = id;
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
    desenho(ctx){
      ctx.drawImage(this.img, 0, 0, 100, 100, this.posDesenhoX, this.posDesenhoY, this.srcDesenhoX, this.srcDesenhoY);
    }
};