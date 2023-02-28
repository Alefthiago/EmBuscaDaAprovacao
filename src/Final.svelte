<script>
    // @ts-nocheck
    
        import { trocarestadodojogo } from "./Estado";
    
    setTimeout(() => {
        titulo.style.fontSize = "3em";
    
        setTimeout(() => {
            p1.style.fontSize = "2.1em";
            p2.style.fontSize = "2.2em";
            p3.style.fontSize = "2em";
            p4.style.fontSize = "2em";
        },1000 );
    },1000);
    
    </script>
    
    <div id = "tela" >
        <div id = "texto">
            <div id= "titulo" >Parabéns!</div>
            <div id = "p1" >Após enfrentar todos seus poderosos instrutores Você</div> 
            <div id = "p2" >conseguiu sua aprovção com êxito,</div>
            <div id = "p3" >Mas sua jornada apenas está começando.</div>
            <div id = "p4">Obrigado por jogar!</div>
        </div>
    </div>
    <style>
    #tela{
        z-index: 1;
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
    #texto{
        display: flex;
        flex-direction: column;
        width:100%;
        height: 81.5%;
        justify-content: center;
        line-height: 500%;
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
        font-family: 'Pixel12x10', sans-serif;
        font-family: 'Pixel12x10Mono', sans-serif;
        color: white;
        text-shadow: 0.1em 0.1em 0  black;
        text-align: center;
        font-size: 0em;
        transition: 1s;
    }
    #p2{
        font-family: 'Pixel12x10', sans-serif;
        font-family: 'Pixel12x10Mono', sans-serif;
        color: white;
        text-shadow: 0.1em 0.1em 0  black;
        text-align: center;
        font-size: 0em;
        transition: 1.5s;
    }
    #p3{
        font-family: 'Pixel12x10', sans-serif;
        font-family: 'Pixel12x10Mono', sans-serif;
        color: white;
        text-shadow: 0.1em 0.1em 0  black;
        text-align: center;
        font-size: 0em;
        transition: 2s;
    }
    #p4{
        font-family: 'Pixel12x10', sans-serif;
        font-family: 'Pixel12x10Mono', sans-serif;
        color: white;
        text-shadow: 0.1em 0.1em 0  black;
        text-align: center;
        font-size: 0em;
        transition: 2.5s;
    }
    </style>