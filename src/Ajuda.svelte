<script>
// @ts-nocheck

import { trocarestadodojogo } from "./Estado";


setTimeout(() => {
      titulo.style.fontSize = "3em";
      p1.style.fontSize = "1.9em";
      p2.style.fontSize = "1.9em";

      setTimeout(() => {
            teclas.style.visibility = "visible";
            voltar.style.visibility = "visible";
      },2000 )
},500)
</script>
<div id = "principal">
      <div id = "titulo">Como Jogar</div>
      <div id = "corpo" >
            <div id = "instrucoes">
                  <div id= "p1">Para mover o personagem pelo mapa use as setas do teclado.</div>
                  <div id= "p2"> Para ataques ou cura clique nos botões em batalha.</div>
            </div>
            <div id = "teclas">
                  <img src="public/setas.png" alt="teclas para movimentação">
            </div> 
      </div>


      <div id = "botoes">
            <button id = "voltar" on:click={() => trocarestadodojogo("menu")} > <span>Voltar</span></button>
      </div>
</div>
<style>
 #principal {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: auto;
      width: 90%;
      height: 90%;
      background: #66CDAA;
      border-radius: 10px;
      border:3px solid black;
      box-shadow: 5px 5px 0 4px black;
}
#titulo{
      width:100%;
      height:22.5%;
      text-align: center;
      color:white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Amiga Forever', sans-serif;
      font-family: 'Amiga Forever Pro2', sans-serif;
      font-family: 'Amiga Forever Pro', sans-serif;    
      text-shadow: 0.1em 0.1em 0 black;
      font-size: 0em;
      transition: 1s;
}
#corpo{
      width: 100%;
      height: 68.6%;
      display: flex;
      flex-direction: column;
}
#instrucoes{
      width:100%;
      height:50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
}
#p1{
      width: 100%;
    height:30%;
    color:white;
    font-family: 'Pixel12x10', sans-serif;
    font-family: 'Pixel12x10Mono', sans-serif;
    text-align: center;
    text-shadow: 0.1em 0.1em 0  black;
    font-size: 0em;
    transition: 1.5s;
}
#p2{
      width: 100%;
    height:30%;
    color:white;
    font-family: 'Pixel12x10', sans-serif;
    font-family: 'Pixel12x10Mono', sans-serif;
    text-align: center;
    text-shadow: 0.1em 0.1em 0  black;
    font-size: 0em;
    transition: 2s;
}
#teclas{
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: center;
      visibility: hidden;
}
img{
      width:30%;
      height:80%;
}
#botoes{
    width: 100%;
    height:8%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end; 
}
#voltar{
    text-shadow: 0.1em 0.1em 0 #808080;
    position: relative;
    background: white;
    color:black;
    font-size: 1.2em;
    letter-spacing: 0.1em;
    padding: 15px 30px;
    cursor: pointer;
    border-radius: 10px;
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;
    box-shadow: 3px 3px 0 1px black;
    visibility: hidden;
}
#voltar:hover {
    background: white;
    color: black;
    box-shadow: 3px 3px 0 1px black;
    font-size: 1.3em;
}
#voltar:active{
    box-shadow: 0 0 0 0 black;
    transform: translate(5px, 5px);
}
</style>