<script>
// @ts-nocheck

import { trocarestadodojogo } from "./Estado";

setTimeout(() => {
    titulo.style.fontSize = "3em";

    setTimeout(() => {
        p1.style.fontSize = "2em";
        p2.style.fontSize = "2em";
        p3.style.fontSize = "2em";

        setTimeout(() => {
            continuar.style.visibility = "visible";
        },3000 )
    },1500 );
},1000);

</script>
<div id = "principal">
    <div id= "corpo" >
        <div id = "titulo">Seus cafezinhos acabaram!</div>
        <div id = "p1">Mas não se preocupe, seu parceiro John acaba de chegar</div>
        <div id = "p2"> ao campus.</div>
        <div id = "p3">(Hora do café) foi substituido por (Jhon's Hot Dog).</div>
    </div>
    <div id = "botao" >
        <button id = "continuar" on:click={() => (trocarestadodojogo("jogar"))}>Continuar</button>
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
#corpo{
    width:100%;
    height: 81.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 600%;
}
#titulo{
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;    
    color: white;
    text-shadow: 0.1em 0.1em 0  black;
    text-align: center;
    font-size: 0em;
    transition: 1s;
}
#p1{
    color: white;
    font-family: 'Pixel12x10', sans-serif;
    font-family: 'Pixel12x10Mono', sans-serif; 
    text-align: center;
    text-shadow: 0.1em 0.1em 0  black;
    font-size: 0em;
    height: 15%;
    width: 100%;
    transition: 1s;
}
#p2{
    color: white;
    font-family: 'Pixel12x10', sans-serif;
    font-family: 'Pixel12x10Mono', sans-serif; 
    text-align: center;
    text-shadow: 0.1em 0.1em 0  black;
    font-size: 0em;
    height: 15%;
    width: 100%;
    transition: 1.5s;
}
#p3{
    color: white;
    font-family: 'Pixel12x10', sans-serif;
    font-family: 'Pixel12x10Mono', sans-serif; 
    text-align: center;
    text-shadow: 0.1em 0.1em 0  black;
    font-size: 0em;
    height: 15%;
    width: 100%;
    transition: 1.5s;
}
#botao {
    width: 99%;
    height: 17%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}
#continuar{
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
#continuar:hover {
    background: white;
    color: black;
    box-shadow: 3px 3px 0 1px black;
    font-size: 1.5em;
}
#continuar:active{
    box-shadow: 0 0 0 0 black;
    transform: translate(5px, 5px);
}
</style>