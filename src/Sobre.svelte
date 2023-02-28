<script>
// @ts-nocheck

import { estado,trocarestadodojogo } from "./Estado";
    import Referencias from "./Referencias.svelte";

setTimeout(() => {
  p1.style.fontSize = "2em";
  h1.style.fontSize = "3.5em";
  Ap.style.fontSize = "1.5em";
  Ap1.style.fontSize = "1.3em";
  Cp.style.fontSize = "1.5em";
  Cp1.style.fontSize = "1.3em";
  Ep.style.fontSize = "1.5em";
  Ep1.style.fontSize = "1.3em";
  Fp.style.fontSize = "1.5em";
  Fp1.style.fontSize = "1.3em";

  setTimeout(() => {
    gitHub1.style.visibility = "visible";
    gitHub2.style.visibility = "visible";
    gitHub3.style.visibility = "visible";
    voltar.style.visibility = "visible";
    referencias.style.visibility = "visible";


  },2500 )
},500)
</script>
<link href="https://fonts.cdnfonts.com/css/amiga-forever" rel="stylesheet">
<link href="https://fonts.cdnfonts.com/css/pixel12x10" rel="stylesheet">


<div id = "principal">
  <div id= "titulo">
    <div id = "texto">
      <div id = "p1">
        Imformações da equipe.
      </div>
    </div>
  </div>
  <div id = "corpo">
    <div id = "criadores">
        <div id = "tituloCorpo">
            <div id = "h1">Criadores:</div>
        </div>
        <div id = "alef">
            <div id= "Ap">Alef Silva</div>
            <div id = "Ap1">(Alefsilvadn@gmail.com)</div>
            <button id = "gitHub1"><a href="https://github.com/Alefthiago" target="_blank" rel="noreferrer">GitHub</a></button>
        </div>
        <div id= "cleiton">
            <div id = "Cp">Cleiton Ribeiro</div>
            <div id = "Cp1">(lucascleiton180@gmail.com)</div>
            <button id = "gitHub2"><a href="https://github.com/CleitonLucas" target="_blank" rel="noreferrer">GitHub</a></button>
        </div>
        <div id ="emanuel">
            <div id = "Ep">Emanuel Carvalho</div>
            <div id = "Ep1">(ehcs@discente.ifpe.edu.br)</div>
            <button id = "gitHub3"><a href="https://github.com/emanoelCarvalho" target="_blank" rel="noreferrer">GitHub</a></button>
        </div>
        <div id="fabio">
            <div id = "Fp">Fábio Rodrigues</div>
            <div id = "Fp1">(fabiofilhomae@gmail.com)</div>
        </div>
    </div>
  
  </div>
    <div id = "botoes">
      <button id = "voltar" on:click={()=>trocarestadodojogo("menu")}> Voltar</button>
      <button id = "referencias" on:click={()=>trocarestadodojogo("placido")}>Referencias</button>
    </div>
</div>
<style>
@import url('https://fonts.cdnfonts.com/css/pixel12x10');
@import url('https://fonts.cdnfonts.com/css/amiga-forever');

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
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #p1{
    color: white;
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;    
    text-align: center;
    text-shadow: 0.1em 0.1em 0  black;
    font-size: 0em;
    transition: 1s;
  }
  #texto{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 85%;
  }
  #corpo{
    display: flex;
    width: 100%;
    height: 74%;
  }
  #h1{
    color: white;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;    
    font-size: 0em;
    text-shadow: 0.1em 0.1em 0  black;
    transition:1.5s;
  }
  #criadores{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 100%;
  }
  #alef{
    width:100%;
    height: 10%;
    display: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 15px;
  }
  #Ap{
    width: 100%;
    height:40%;
    color:white;
    font-family: 'Pixel12x10', sans-serif;
    font-family: 'Pixel12x10Mono', sans-serif;
    text-align: center;
    text-shadow: 0.1em 0.1em 0  black;
    font-size: 0em;
    transition:2s;
  }
  #Ap1{
    width: 100%;
    height:40%;
    color:white;
    font-family: 'Pixel12x10', sans-serif;
    font-family: 'Pixel12x10Mono', sans-serif;   
    text-align: center;
    text-shadow: 0.1em 0.1em 0 black;
    font-size: 0em;
    transition:2s;
  }
  #gitHub1{
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
    visibility: hidden;
  }
  #gitHub1:hover{
    background: white;
    color: black;
    box-shadow: 3px 3px 0 1px black;
    font-size: 1.5em;
  }
  #gitHub1:active{
    box-shadow: 0 0 0 0 black;
    transform: translate(5px, 5px);
  }
  #gitHub2{
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
    visibility: hidden;
  }
  #gitHub2:hover{
    background: white;
    color: black;
    box-shadow: 3px 3px 0 1px black;
    font-size: 1.5em;
  }
  #gitHub2:active{
    box-shadow: 0 0 0 0 black;
    transform: translate(5px, 5px);
  }
  #gitHub3{
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
    visibility: hidden;
  }
  #gitHub3:hover{
    background: white;
    color: black;
    box-shadow: 3px 3px 0 1px black;
    font-size: 1.5em;
  }
  #gitHub3:active{
    box-shadow: 0 0 0 0 black;
    transform: translate(5px, 5px);
  }
  a{
    text-decoration: none;
    color: black;
  }
  #cleiton{
    width:100%;
    height: 10%;
    text-align: center;
    display: row;
    justify-content: center;
    align-items: center;
  }
  #Cp{
    width: 100%;
    height:50%;
    color: white;
    font-family: 'Pixel12x10', sans-serif;
    font-family: 'Pixel12x10Mono', sans-serif;   
    text-align: center;
    text-shadow: 0.1em 0.1em 0 black;
    font-size: 0em;
    transition:2s;
  }
  #Cp1{
    width: 100%;
    height:50%;
    color: white;
    font-family: 'Pixel12x10', sans-serif;
    font-family: 'Pixel12x10Mono', sans-serif;   
    text-align: center;
    text-shadow: 0.1em 0.1em 0 black;
    font-size: 0em;
    transition:2s;
  }
  #emanuel{
    margin-top: 1%;
    width:100%;
    height: 10%;
    display: row;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  #Ep{
    width: 100%;
    height:50%;
    color: white;
    font-family: 'Pixel12x10', sans-serif;
    font-family: 'Pixel12x10Mono', sans-serif;
    text-align: center;
    text-shadow: 0.1em 0.1em 0 black;
    font-size: 0em;
    transition:2s;
  }
  #Ep1{
    width: 100%;
    height:50%;
    color: white;
    font-family: 'Pixel12x10', sans-serif;
    font-family: 'Pixel12x10Mono', sans-serif;   
    text-align: center;
    text-shadow: 0.1em 0.1em 0 black;
    font-size: 0em;
    transition:2s;
  }
  #fabio{
    width:100%;
    height: 10%;
    display: row;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  #Fp{
    width: 100%;
    height:50%;
    color: white;
    font-family: 'Pixel12x10', sans-serif;
    font-family: 'Pixel12x10Mono', sans-serif; 
    text-align: center;
    text-shadow: 0.1em 0.1em 0 black;
    font-size: 0em;
    transition:2s;
  }
  #Fp1{
    width: 100%;
    height:50%;
    color: white;
    font-family: 'Pixel12x10', sans-serif;
    font-family: 'Pixel12x10Mono', sans-serif;  
    text-align: center;
    text-shadow: 0.1em 0.1em 0 black;
    font-size: 0em;
    transition:2s;
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
#referencias{
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
#referencias:hover {
    background: white;
    color: black;
    box-shadow: 3px 3px 0 1px black;
    font-size: 1.5em;
}
#referencias:active{
    box-shadow: 0 0 0 0 black;
    transform: translate(5px, 5px);
}
</style>