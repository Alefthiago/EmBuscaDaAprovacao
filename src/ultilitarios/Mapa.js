class mapa {
  constructor(img, srcX, srcY, width, height, srcDesenhoX, srcDesenhoY){
  // atributos
    this.srcDesenhoX = srcDesenhoX;
    this.srcDesenhoY = srcDesenhoY;
    this.srcX = srcX;
    this.srcY = srcY;
    this.img = img;
    this.width = width;
    this.height = height;
    this.blocoAcert = false;
  }
    // desenho
      desenho(ctx){
      ctx.drawImage(this.img, 0, 0, this.width, this.height, this.srcX, 0, this.srcDesenhoX, this.srcDesenhoY)
  }
};

var imgMapaInicial = new Image();
imgMapaInicial.src = "public/Mapa(inicial).png";
export var mapaInicial = new mapa(imgMapaInicial, 0, 0, 1600, 900, 1600, 900);

var imgaMapaSala = new Image();
imgaMapaSala.src = "public/Mapa(Sala).png";
export var mapaSala = new mapa(imgaMapaSala,1600,0, 1600, 900 , 1300, 700);
