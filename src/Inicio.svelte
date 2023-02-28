<script>
// @ts-nocheck

    import { trocarestadodojogo } from "./Estado";

setTimeout(() => {
    p1.style.fontSize = "1.8em";
    p2.style.fontSize = "2em";
    p3.style.fontSize = "2em";
    p4.style.fontSize = "2em";

    setTimeout(() => {
        iniciar.style.visibility = "visible";
        voltar.style.visibility = "visible";
    },6000 )
},1000 );

</script>
<div id= "principal" >
    <div id = "corpo">
        <div id = "texto">
            <div id = "p1">Após enfrentar os desafios para chegar ao campus do IFPE, nosso</div>
            <div id = "p2" >discente terá que enfrentar os poderosos instrutores da</div>
            <div id = "p3" >instituição para conseguir chegar ao tão desejado</div>
            <div id = "p4" >diploma e conseguir ingressar ao mercado de trabalho.</div>
        </div>
        <div id = "jogar" >
            <button id ="iniciar" on:click={() => (trocarestadodojogo("jogar")) } >Iniciar</button>
        </div>
 
    </div>
    <div id = "botao" >
        <button id = "voltar" on:click={() => (trocarestadodojogo("menu"))} >Voltar</button>
    </div>
</div>

<style>
 #principal {
    display: flex;
    flex-direction: column;
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
#corpo {
    width:100%;
    height:80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
}
#jogar {
    width:100%;
    height:20%;
    display: flex;
    justify-content: center;
    align-items: center;
}
#texto{
    width:100%;
    height: 50%;
    display: flex;
    flex-direction:column;
    text-align: center;
    
    align-items: center;
    justify-content: space-around;
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
    transition: 2s;
}
#p4{
    color: white;
    font-family: 'Pixel12x10', sans-serif;
    font-family: 'Pixel12x10Mono', sans-serif;  
    text-align: center;
    text-shadow: 0.1em 0.1em 0  black;
    font-size: 0em;
    height: 10%;
    width: 100%;
    transition: 2.5s;
}

#iniciar {
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
#iniciar:hover {
    background: white;
    color: black;
    box-shadow: 3px 3px 0 1px black;
    font-size: 1.5em;
}
#iniciar:active{
    box-shadow: 0 0 0 0 black;
    transform: translate(5px, 5px);
}
#botao {
    width: 100%;
    height: 19%;
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
</style>