class blocosCjt{
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
export var blocos =[];
var imgBloco = new Image();
imgBloco.src = "public/fundoVazio.png";
var blocoA = new blocosCjt("blocoA",imgBloco, 415, 440, 50, 50, 375, 390, 95, 95);
blocos.push(blocoA);
var blocoX = new blocosCjt("blocoX",imgBloco, 1176, 440, 50, 50, 1136, 390, 95, 95);
blocos.push(blocoX);
var blocoB = new blocosCjt("blocoB",imgBloco, 1340, 55, 50, 50, 1300, 10, 95, 95);
blocos.push(blocoB);
var blocoC = new blocosCjt("blocoC",imgBloco, 718, 50, 50, 50, 678, 10, 95, 95);
blocos.push(blocoC);
var blocoD = new blocosCjt("blocoD",imgBloco, 268, 50, 50, 50, 228, 10, 95, 95);
blocos.push(blocoD);

// saidas dos blocos
var saidaBlocoA = new blocosCjt("saidaBlocoA",imgBloco, 2148, 800, 50, 50, 2109, 800, 95, 95);
blocos.push(saidaBlocoA);
var saidaBlocoB = new blocosCjt("saidaBlocoB",imgBloco, 2148, 800, 50, 50, 2109, 800, 95, 95);
blocos.push(saidaBlocoB);
var saidaBlocoC = new blocosCjt("saidaBlocoC",imgBloco, 2148, 800, 50, 50, 2109, 800, 95, 95);
blocos.push(saidaBlocoC);
var saidaBlocoD = new blocosCjt("saidaBlocoD",imgBloco, 2148, 800, 50, 50, 2109, 800, 95, 95);
blocos.push(saidaBlocoD);

// barreiras no mapa 781 214
var barreira1 = new blocosCjt("barreira",imgBloco, 300, 600, 400, 300, 290, 588, 400, 300);
blocos.push(barreira1);
var barreira2 = new blocosCjt("barreira",imgBloco, 800, 600, 500, 270, 764, 570, 540, 300);
blocos.push(barreira2);
var barreira3 = new blocosCjt("barreira",imgBloco, 250, 532, 50, 50, 200, 512, 95, 95);
blocos.push(barreira3);
var barreira4 = new blocosCjt("barreira",imgBloco, 305, 452, 100, 50, 250, 400, 95, 95);
blocos.push(barreira4);
var barreira5 = new blocosCjt("barreira",imgBloco, 480, 220, 220, 280, 480, 400, 95, 95);
blocos.push(barreira5);
var barreira6 = new blocosCjt("barreira",imgBloco, 800, 220, 360, 280, 781, 214, 95, 95);
blocos.push(barreira6);
var barreira7 = new blocosCjt("barreira",imgBloco, 1240, 220, 200, 280, 1226, 386, 95, 95);
blocos.push(barreira7);
var barreira8 = new blocosCjt("barreira",imgBloco, 1487, 156, 50, 50, 1477, 126, 95, 95);
blocos.push(barreira8);
var barreira9 = new blocosCjt("barreira",imgBloco, 1410, 50, 50, 70, 1390, 12, 95, 95);
blocos.push(barreira9);
var barreira10 = new blocosCjt("barreira",imgBloco, 790, 50, 530, 70, 768, 12, 95, 95);
blocos.push(barreira10);
var barreira11 = new blocosCjt("barreira",imgBloco, 350, 50, 350, 70, 768, 12, 95, 95);
blocos.push(barreira11);
var barreira12 = new blocosCjt("barreira",imgBloco, 220, 50, 50, 70, 768, 12, 95, 95);
blocos.push(barreira12);
var barreira13 = new blocosCjt("barreira",imgBloco, 130, 120, 50, 50, 80, 120, 95, 95);
blocos.push(barreira13);
var barreira14 = new blocosCjt("barreira",imgBloco, 185, 222, 250, 50, 180, 210, 95, 95);
blocos.push(barreira14);
var barreira15 = new blocosCjt("barreira",imgBloco, 1310, 524, 50, 50, 1343, 524, 95, 95);
blocos.push(barreira15);
var barreira16 = new blocosCjt("barreira",imgBloco, 1160, 220, 50, 50 , 1160, 220, 95, 95);
blocos.push(barreira16);

// limtes das salas
var salaLeft = new blocosCjt("salaLeft",imgBloco, 1730, 0, 350, 920, 1660, 0, 400, 600);
blocos.push(salaLeft); 
var salaReight = new blocosCjt("salaLeft",imgBloco, 2440, 0, 350, 920, 1660, 0, 400, 600);
blocos.push(salaReight)
//x2464 y31

