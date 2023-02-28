<script>
// @ts-nocheck

    import { trocarestadodojogo } from "./Estado";


    setTimeout(() => {
        p1.style.fontSize = "1.5em";
        p2.style.fontSize = "1.5em";
        titulo.style.fontSize = "2.5em";
        nomeCanal1.style.fontSize = "2em";
        nomeCanal2.style.fontSize = "2em";
        nomeCanal3.style.fontSize = "2em";
        nomeCanal4.style.fontSize = "2em";
        
        setTimeout(() => {
            link1.style.visibility = "visible";
            link2.style.visibility = "visible";
            link3.style.visibility = "visible";
            link4.style.visibility = "visible";
            link5.style.visibility = "visible";
            link6.style.visibility = "visible";
            voltar.style.visibility = "visible";
        },2500 );
    },500)
</script>
<div id = "principal">
    <div id = "p1"> Nomes dos canais e links para videos/playlist que nossa</div>
    <div id = "p2"> equipe utilizou para criação do projeto.</div>
    <div id = "titulo">
        Referencias
    </div>
    <div id = "corpo">
        <div id = "referencias1">
            <div id = "canal1">
                <a href="https://www.youtube.com/@ScottBlenkhorne" target="_blank" rel="noreferrer" ><div id = "nomeCanal1">Scott Blenkhorne</div></a>
                <a href="https://www.youtube.com/watch?v=sr8bJKSUYwE" target="_blank" rel="noreferrer" > <div id="link1">Making a Battle Game with HTML/JS/CSS - Part 1</div></a>
                <a href="https://www.youtube.com/watch?v=cHq31ocqREU" target="_blank" rel="noreferrer" > <div id="link2">Making a Battle Game with HTML/JS/CSS - Part 2</div></a>
                <a href="https://www.youtube.com/watch?v=GnNaK4QD4Ew" target="_blank" rel="noreferrer" > <div id="link3">Making a Battle Game with HTML/JS/CSS - Part 3</div></a>
            </div>
            <div id = "canal2">
                <a href=  "https://www.youtube.com/@ITVDN" target="_blank" rel="noreferrer"> <div id ="nomeCanal2">ITVDN</div></a>
                <a href="https://www.youtube.com/watch?v=5emyO5Nb1OU&list=PLAnQWjhxcCMA3wZVc3v7f908-rVLJLyO1&index=3" target="_blank" rel="noreferrer" ><div id ="link4">Пишем пошаговую боевую систему на JavaScript с нуля. На примере игры Final Fantasy в 2D.</div></a>
            </div>
        </div>
        <div id = "referencias2">
            <div id = "canal3">
                <a href="https://www.youtube.com/watch?v=k887x45_R4w&list=PLclUTiUoLCbAHv7L2x4BzHdWRmhv1Hs63" target="_blank" rel="noreferrer" ><div id = "nomeCanal3">Gustavo Silveira</div></a>
                <a href="https://www.youtube.com/watch?v=k887x45_R4w&list=PLclUTiUoLCbAHv7L2x4BzHdWRmhv1Hs63" target="_blank" rel="noreferrer" ><div id = "link5">Canvas Básico</div></a>
            </div>
            <div id = "canal4">
                <a href="https://www.youtube.com/@WiltonFilho" target="_blank" rel ="noreferrer"> <div id= "nomeCanal4">Wilton Filho</div></a>
                <a href="https://www.youtube.com/watch?v=HA0XIaIh8OI" target="_blank" rel="noreferrer"> <div id = "link6">Detecção de colisão em JavaScript [HTML5] para jogos</div></a>
            </div>
        </div>
    </div>
    <div id = "botoes">
        <button id = "voltar" on:click={() => trocarestadodojogo("sobre")} > <span>Voltar</span></button>
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
#p1{
    width: 100%;
    height: 7%;
    color: white;
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;    
    text-align: center;
    text-shadow: 0.1em 0.1em 0em  black;
    font-size: 0em;
    margin-top: 10px;
    transition: 1s;
}
#p2{
    width: 100%;
    color: white;
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;    
    text-align: center;
    text-shadow: 0.1em 0.1em 0em  black;
    font-size: 0em;
    transition: 1.5s;
}

#titulo{
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;    
    text-align: center;
    text-shadow: 0.1em 0.1em 0 black;
    font-size: 0em;
    transition: 2s;
}
#corpo{
    width: 100%;
    height: 68.6%;
    display: flex;
}
#referencias1{
    width: 50%;
    height: 100%;
}
#canal1{
    width:100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
#nomeCanal1{
    text-align: center;
    color: white;
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;    
    text-align: center;
    text-shadow: 0.1em 0.1em 0 black;
    font-size: 0em;
    transition: 2.5s;
}
#link1{
    color:white;
    font-family: 'Pixel12x10', sans-serif;
    font-family: 'Pixel12x10Mono', sans-serif;
    text-align: center;
    text-shadow: 0.1em 0.1em 0 black;
    font-size: 1.1em; 
    visibility: hidden;
}
#link2{
    color:white;
    font-family: 'Pixel12x10', sans-serif;
    font-family: 'Pixel12x10Mono', sans-serif;
    text-align: center;
    text-shadow: 0.1em 0.1em 0 black;
    font-size: 1.1em; 
    visibility: hidden;
}
#link3{
    color:white;
    font-family: 'Pixel12x10', sans-serif;
    font-family: 'Pixel12x10Mono', sans-serif;
    text-align: center;
    text-shadow: 0.1em 0.1em 0 black;
    font-size: 1.1em; 
    visibility: hidden;
}
#link4{
    color:white;
    font-family: 'Pixel12x10', sans-serif;
    font-family: 'Pixel12x10Mono', sans-serif;
    text-align: center;
    text-shadow: 0.1em 0.1em 0 black;
    font-size: 1.1em; 
    visibility: hidden;
}
#link5{
    color:white;
    font-family: 'Pixel12x10', sans-serif;
    font-family: 'Pixel12x10Mono', sans-serif;
    text-align: center;
    text-shadow: 0.1em 0.1em 0 black;
    font-size: 1.1em; 
    visibility: hidden;
}
#link6{
    color:white;
    font-family: 'Pixel12x10', sans-serif;
    font-family: 'Pixel12x10Mono', sans-serif;
    text-align: center;
    text-shadow: 0.1em 0.1em 0 black;
    font-size: 1.1em; 
    visibility: hidden;
}
a{
    text-decoration: none;
}
#canal2{
    width:100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
#nomeCanal2{
    text-align: center;
    color: white;
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;    
    text-align: center;
    text-shadow: 0.1em 0.1em 0 black;
    font-size: 0em;
    transition: 2.5s;
}
#referencias2{
    width: 50%;
    height: 100%;
}
#canal3{
    width:100%;
    height:50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
#nomeCanal3{
    text-align: center;
    color: white;
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;    
    text-align: center;
    text-shadow: 0.1em 0.1em 0 black;
    font-size: 0em;
    transition: 2.5s;
}
#canal4{
    widows: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
#nomeCanal4{
    text-align: center;
    color: white;
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;    
    text-align: center;
    text-shadow: 0.1em 0.1em 0 black;
    font-size: 0em;
    transition: 2.5s;
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
    visibility:hidden;
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
</style>