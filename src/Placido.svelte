<script>
// @ts-nocheck

import { trocarestadodojogo } from "./Estado";

setTimeout(() => {
    titulo.style.fontSize = "3.8em";
    p1.style.fontSize = "1.8em";
    p2.style.fontSize = "2em";
    p3.style.fontSize = "2em";
    p4.style.fontSize = "2em";
    p5.style.fontSize = "2em";
    Cp.style.fontSize = "4em";

    setTimeout(() => {
        gitHub.style.visibility = "visible";
        voltar.style.visibility = "visible";
        apoio.style.visibility = "visible";
    },4000)
},500)

</script>
<div id = "principal">
    <div id = "parteCima">
        <div id = "titulo">Inspiração</div>
        <div id = "p1">Para criação do projeto nossa equipe utilizou como inspiração</div>
        <div id = "p2">o trabalho do GRANDÍSSIMO Plácydo Lima.</div>
        <div id = "p3">(FINAL IFPE: Uma Jornada Esperada)</div>
        <div id  = "p4">Nossa equipe agradece por toda sua instrução e monitoria</div>
        <div id = "p5"> de apoio e doação de tempo.</div>
    </div>
    <div id = "parteBaixo">
        <div id = "Cp">pl4cydo</div>
        <button id = "gitHub"><a href="https://github.com/pl4cydo" target="_blank" rel="noreferrer">GitHub</a></button>
    </div>
    <div id = "botoes">
        <button id = "voltar" on:click={()=>trocarestadodojogo("sobre")}> Voltar</button>
        <button id = "apoio" on:click={()=>trocarestadodojogo("referencias")}>Material de apoio</button>
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
  #parteCima{
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #titulo{
    color: white;
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;    
    text-align: center;
    text-shadow: 0.1em 0.1em 0  black;
    font-size: 0em;
    transition: 1s;
    height: 100px;
    margin-top: 20px;
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
    transition: 1.5s;
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
    transition: 2s;
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
    transition: 3s;
}
#p4{
    color: white;
    font-family: 'Pixel12x10', sans-serif;
    font-family: 'Pixel12x10Mono', sans-serif; 
    text-align: center;
    text-shadow: 0.1em 0.1em 0  black;
    font-size: 0em;
    height: 15%;
    width: 100%;
    transition: 3.5s;
}
#p5{
    color: white;
    font-family: 'Pixel12x10', sans-serif;
    font-family: 'Pixel12x10Mono', sans-serif; 
    text-align: center;
    text-shadow: 0.1em 0.1em 0  black;
    font-size: 0em;
    height: 15%;
    width: 100%;
    transition: 4s;
}
#parteBaixo{
    height: 44%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#Cp{
    width: 100%;
    height:50%;
    color: white;
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;    
    text-align: center;
    text-shadow: 0.1em 0.1em 0 black;
    font-size: 0em;
    transition: 4.5s;
}
#gitHub{
    text-shadow: 0.1em 0.1em 0 #808080;
    position: relative;
    background: white;
    color:black;
    font-size: 1em;
    letter-spacing: 0.1em;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 10px;
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;
    box-shadow: 3px 3px 0 1px black;
    width: 200px;
    visibility: hidden;
}
#gitHub:hover{
    background: white;
    color: black;
    box-shadow: 3px 3px 0 1px black;
    font-size: 1.5em;
}
#gitHub:active{
    box-shadow: 0 0 0 0 black;
    transform: translate(5px, 5px);
}
a{
    text-decoration: none;
    color: black;
}
#botoes{
    width: 100%;
    height: 5%;
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
    font-size: 1.5em;
}
#voltar:active{
    box-shadow: 0 0 0 0 black;
    transform: translate(5px, 5px);
}
#apoio{
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
#apoio:hover {
    background: white;
    color: black;
    box-shadow: 3px 3px 0 1px black;
    font-size: 1.5em;
}
#apoio:active{
    box-shadow: 0 0 0 0 black;
    transform: translate(5px, 5px);
}

</style>