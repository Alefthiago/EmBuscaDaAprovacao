    <script>
    //@ts-nocheck
    import { estado } from "../Estado";
    import { Jogadora } from "../personagens/Protagonista";
    import { David } from "../personagens/David";
    import { writable } from "svelte/store";
    import Jogar from "../Jogar.svelte";
    import { trocarestadodojogo } from "../Estado";


let contadorAtq = 0;


setTimeout(() => {
    titulo1.style.fontSize = "1.4em";


    setTimeout(() => {
        titulo2.style.fontSize = "2em";

        setTimeout(() => {

        iniciarB.style.visibility = "visible";
        voltar1.style.visibility = "visible";            
        },3500 )
    },2000 )
},500 )
    
function iniciarLuta(){
    tela.style.zIndex = 0;
    telaB1.style.zIndex = 1;

    David.hp = 160;
    bossVida.style.width = David.hp + "px";

    Jogadora.hp = 158;
    Jogadora.Ataque = 14;
    Jogadora.Defesa = 4;
    Jogadora.cafe = 3;
    luizaVida.style.width = Jogadora.hp + "px";
    luizaCafe.style.width = "100px"
};
    /* Bloco Do Protagonista*/

function ataqueProta() {
    let dado6 = Math.floor(Math.random() * 7);
    botaoAtt1.style.visibility = "hidden";
    botaoAtt2.style.visibility = "hidden";
    botaoAtt3.style.visibility = "hidden";

    if (dado6 <= 4) {
        narrador.innerHTML = Jogadora.id + " Atacou com chuva da códigos.";
        Jogadora.ChuvaDeCodigos(David);
        contadorAtq++;

        if (contadorAtq >= 4) {
            luizaPoder.style.width = "118px";
            botaoAtt2.style.backgroundColor = "#0000FF";
        } else {
            luizaPoder.style.width = (contadorAtq / 4) * 118 + "px";
        }
            
        setTimeout(() => {

            if (David.hp <= 0) {
                bossVida.style.width = "0px";

                setTimeout(() => {
                proximaFase();
                }, 1000);
            } 
            else {
                bossVida.style.width = David.hp + "px";
            
                setTimeout(() => {
                    bossAtaque();
                }, 1000);
            }
        },2000);
    }
    else {
        narrador.innerHTML = Jogadora.id + " Errou o ataque.";

        setTimeout(() => {
            bossAtaque();
        },2000 );
    }
};

function ataqueProtaEspecial() {

    if (contadorAtq >= 4) { 
        botaoAtt1.style.visibility = "hidden";
        botaoAtt2.style.visibility = "hidden";
        botaoAtt3.style.visibility = "hidden";
        narrador.innerHTML = Jogadora.id + " utilizou o ataque recursão. ";
        Jogadora.Recursao(David); 
        contadorAtq = 0;
        luizaPoder.style.width = "0px";
        botaoAtt2.style.backgroundColor = "white";

        setTimeout(() => {     

            if (David.hp <= 0) {
                bossVida.style.width = "0px";

                setTimeout(() => {
                    proximaFase();
                }, 1000);
            }
            else {
                bossVida.style.width = David.hp + "px";

                setTimeout(() => {
                    bossAtaque();
                }, 1000);
            }
        }, 1000);
    } 
    else {
        narrador.innerHTML = Jogadora.id + " Não pode  utilizar o ataque ainda. ";
    }
};

function curaProtagonista() {
    botaoAtt1.style.visibility = "hidden";
    botaoAtt2.style.visibility = "hidden";
    botaoAtt3.style.visibility = "hidden";

    if (Jogadora.cafe <= 0) {
        narrador.innerHTML = "Ops, parece que você utilizou todos os seus cafezinhos.";

        setTimeout(() => {
            bossAtaque();
        },1000 );
    }
    else {
        if (Jogadora.hp >= 158) {
            narrador.innerHTML = "Vida cheia, mais 2 de Defesa.";
            Jogadora.Defesa += 2;
            Jogadora.cafe--

            setTimeout(() => {

                if (Jogadora.cafe <= 0) {
                    luizaCafe.style.width = "0px";
                }
                else {
                    luizaCafe.style.width = (Jogadora.cafe / 3) * 100 + "px";
                }

                setTimeout(() => {
                    bossAtaque();
                },1000 );
        },1000 )
        }
        else {
            narrador.innerHTML = Jogadora.id +" tomou um cafezinho.";
            Jogadora.HoraDoCafe();
            Jogadora.cafe--

            setTimeout(() => {

                if (Jogadora.hp >= 158) {
                    Jogadora.hp = 158;
                    luizaVida.style.width = "158px"

                    if (Jogadora.cafe <= 0) {
                        luizaCafe.style.width = "0px";
                    }
                    else {
                        luizaCafe.style.width = (Jogadora.cafe / 3) * 100 + "px";
                    }
                }
                else {
                    luizaVida.style.width = Jogadora.hp + "px";

                    if (Jogadora.cafe <= 0) {
                        luizaCafe.style.width = "0px";
                    }
                    else {
                        luizaCafe.style.width = (Jogadora.cafe / 3) * 100 + "px";
                    }
                }
            },1000 );

            setTimeout(() => {
                bossAtaque();
            },1000 );
        }
    }
};

/*Bloco Boss*/

function bossAtaque() {
    let dado6 = Math.round(Math.random() * 7);

    if (dado6 <= 4) { 
        aleatorioAtaque();

        setTimeout(() => {

        if (Jogadora.hp <= 0) {
            luizaVida.style.width = "0px";

            setTimeout(() => {
                bossGanhouJogo();
            },1000);
        }
        else {
            luizaVida.style.width = Jogadora.hp + "px";
        }
        }, 1000);
    } 
    else {
        narrador.innerHTML = David.id + " Errou o ataque.";
    }
    
    setTimeout(() => {
        narrador.innerHTML = "Sua vez"
        botaoAtt1.style.visibility = "visible";
        botaoAtt2.style.visibility = "visible";
        botaoAtt3.style.visibility = "visible";
    },2000);
};


function aleatorioAtaque() {
    let dado12 = Math.floor(Math.random() * 13);
    
    if (dado12 <= 8) {
        narrador.innerHTML = David.id + " usou Packet Tracer.";
        David.PacketTracer(Jogadora);
    } 
    else {
        narrador.innerHTML = David.id + " Usou o ataque, partiu Crossfit.";
        David.PartiuCrossfit(Jogadora);
    }
};

function proximaFase() {
    alert("Aprovado!");
    Jogadora.certificadoDavid = true;
    trocarestadodojogo("john");
};

function bossGanhouJogo() {
    alert("Reprovado!");
    trocarestadodojogo("jogar");
};

</script>
<link href="https://fonts.cdnfonts.com/css/amiga-forever" rel="stylesheet">
<link href="https://fonts.cdnfonts.com/css/pixel12x10" rel="stylesheet">
       
<div id="tela">
    <div id="parteCima">
        <div id="texto">
            <div id = "titulo1" >Quantos softwares são necessários para trocar uma lâmpada?</div>
            <div id = "titulo2"> Nenhum, isso é problema de Hardware.</div>
        </div>
        <div id="botaoInicar">
            <button id="iniciarB" on:click={() => iniciarLuta()}>Iniciar</button>
        </div>
    </div>
    <div id="parteBaixo">
        <div>
            <button id="voltar1" on:click={() => trocarestadodojogo("jogar")}>Voltar</button>
        </div>
    </div>
</div>
<div id="telaB1">
    <div id="batalha">
        <div id="d1">
            <div id="luiza">
                <div id="status">
                    <p>{Jogadora.id}:</p>
                    <div id="luizaBarra1">
                        <div id="luizaVida"></div>
                    </div>
                    <div id="luizaBarra2">
                        <div id="luizaPoder"></div>
                    </div>
                    <div id="luizaBarra3">
                        <div id="luizaCafe"></div>
                    </div>
                </div>
                <div id="luizaImg">
                    <div id="luizaSrc">
                        <img src="public/jogadoraLadoB.png" alt="Protagonista"/>
                    </div>
                </div>
            </div>
            <div id="luizaAtt">
                <div id="attFila1">
                    <div id="att1">
                        <button id="botaoAtt1" on:click={() => ataqueProta()}>Chuva De Codigos</button>
                    </div>
                    <div id="att2">
                        <button id="botaoAtt2" on:click={() => ataqueProtaEspecial()}>Recursão</button>
                    </div>
                </div>
                <div id="attFila2">
                    <div id="att1">
                        <button id="botaoAtt3" on:click={() => curaProtagonista()}>Hora Do Café ☕</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="d2">
            <div id="boss">
                <div id="statusBoss">
                    <p>{David.id}:</p>
                    <div id="bossBarra">
                        <div id="bossVida">
                        </div>
                    </div>
                </div>
                <div id="bossImg">
                    <div id="bossSrc">
                        <img src="public/DavidAB.png" alt="David"/>
                    </div>
                </div>
            </div>
            <div id="falas">
                <div id="narrador">
                </div>
            </div>
        </div>
    </div>
    <div id="botaoVoltar">
        <button id="voltar2" on:click={() => trocarestadodojogo("jogar")}>Voltar</button>
    </div>
</div>

  
<style>
    @import url('https://fonts.cdnfonts.com/css/pixel12x10');
@import url('https://fonts.cdnfonts.com/css/amiga-forever');

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
#batalha{
    display: flex;
    height: 91%;
}
#botaoVoltar{
    width: 100%;
    height:5%
}
#texto{
    width:100%;
    height:30%;
}
#botaoInicar{
    width:100%;
    height: 50%;
    display: flex;
    justify-content: center;
}
#titulo1{
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;    
    color: white;
    text-shadow: 0.1em 0.1em 0  black;
    font-size: 0em;
    text-align: center;
    line-height: 150%;
    transition: 1s;
}
#titulo2{
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;    
    color: white;
    text-shadow: 0.1em 0.1em 0  black;
    margin-top: 5%;
    font-size: 0em;
    text-align: center;
    line-height: 150%;
    transition: 1s;
}
#parteCima{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 91%;
    justify-content: space-around;
}
#parteBaixo{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 7.8%;
}
#iniciarB {
    height: 17%;
    text-shadow: 0.1em 0.1em 0 #808080;
    background: white;
    color:black;
    font-size: 0.9em;
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
#iniciarB:hover {
    background: white;
    color: black;
    box-shadow: 3px 3px 0 1px black;
    font-size: 1.2em;
}
#iniciarB:active{
    box-shadow: 0 0 0 0 black;
    transform: translate(5px, 5px);
}
#voltar1{
    text-shadow: 0.1em 0.1em 0 #808080;
    background: white;
    color:black;
    font-size: 0.9em;
    letter-spacing: 0.1em;
    padding: 15px 30px;
    cursor: pointer;
    border-radius: 10px;
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;
    box-shadow: 3px 3px 0 1px black;
    margin-bottom: 5px;
    visibility: hidden;
}
#voltar1:hover {
    background: white;
    color: black;
    box-shadow: 3px 3px 0 1px black;
    font-size: 1.2em;
}
#voltar1:active{
    box-shadow: 0 0 0 0 black;
    transform: translate(5px, 5px);
}
#voltar2{
    text-shadow: 0.1em 0.1em 0 #808080;
    background: white;
    color:black;
    font-size: 0.9em;
    letter-spacing: 0.1em;
    padding: 15px 30px;
    cursor: pointer;
    border-radius: 10px;
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;
    box-shadow: 3px 3px 0 1px black;
    margin-bottom: 5px;
}
#voltar2:hover {
    background: white;
    color: black;
    box-shadow: 3px 3px 0 1px black;
    font-size: 1.2em;
}
#voltar2:active{
    box-shadow: 0 0 0 0 black;
    transform: translate(5px, 5px);
}
#telaB1{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    width: 90%;
    height: 90%;
    box-shadow: 5px 5px 0 4px black;
    border-radius: 10px;
    z-index: 0;
    background: #66CDAA;

}
#falas{
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    border: 5px solid black;
    text-shadow: 0.1em 0.1em 0  black;
    font-family: 'Pixel12x10', sans-serif;
    font-family: 'Pixel12x10Mono', sans-serif;
}
#narrador{
      color: #fff
}
#d1{
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 95%;
    border: 5px solid black;
}
#d2{
   
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 95%;
    border: 5px solid black;
}
#luiza{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 72%;
    border: 5px solid black;
}
#luizaImg{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:100%;
}
img{
    width: 250%;
}
#status{
    display: flex;
    flex-direction: column;
    margin-left: 20%;
    justify-content: space-around;
    width: 100%;
    height: 80%;
}
#status p{
    text-shadow: 0.1em 0.1em 0  black;
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;
    color: white;
    font-size: 1.2em;
}
#luizaBarra1{
    background-color: #fff;
    width: 158px;
    height:10%;
    border-radius: 5px;
    background-color: #8B0000;
    border: 3px solid black;
}
#luizaVida{
    display: block;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #FF0000;
    width: 0px;
    transition: 1.0s ease; 
}
#luizaBarra2{
    width:120px;
    height:7%;
    border: 3px solid black;
    background-color: #00008B;
}
#luizaPoder{
    height: 100%;
    background-color: #0000FF;
    width: 0px;
    transition: 1.0s ease; 
}
#luizaBarra3{
    width:100px;
    height:7%;
    border: 3px solid black;
    background-color:#008000;
}
#luizaCafe{
    height: 100%;
    width: 0px;
    background-color: #00FF00;
    transition: 1.0s ease;    
}
#luizaAtt{
    width: 100%;
    height: 30%;
    border: 5px solid black;
}
#attFila1{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50%;
}
#attFila2{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
#botaoAtt1{
    text-shadow: 0.1em 0.1em 0 #808080;
    background: white;
    color:black;
    font-size: 0.8em;
    letter-spacing: 0.1em;
    padding: 15px 30px;
    cursor: pointer;
    border-radius: 10px;
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;
    box-shadow: 3px 3px 0 1px black;
}
#botaoAtt1:hover {
    background: white;
    color: black;
    box-shadow: 3px 3px 0 1px black;
    font-size: 1em;
}
#botaoAtt1:active{
    box-shadow: 0 0 0 0 black;
    transform: translate(5px, 5px);
}
#botaoAtt2{
    text-shadow: 0.1em 0.1em 0 #808080;
    background: white;
    color:black;
    font-size: 0.8em;
    letter-spacing: 0.1em;
    padding: 15px 30px;
    cursor: pointer;
    border-radius: 10px;
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;
    box-shadow: 3px 3px 0 1px black;
}
#botaoAtt2:hover {
    background: white;
    color: black;
    box-shadow: 3px 3px 0 1px black;
    font-size: 1em;
}
#botaoAtt2:active{
    box-shadow: 0 0 0 0 black;
    transform: translate(5px, 5px);
}
#botaoAtt3{
    text-shadow: 0.1em 0.1em 0 #808080;
    background: white;
    color:black;
    font-size: 0.8em;
    letter-spacing: 0.1em;
    padding: 15px 30px;
    cursor: pointer;
    border-radius: 10px;
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;
    box-shadow: 3px 3px 0 1px black;
}
#botaoAtt3:hover {
    background: white;
    color: black;
    box-shadow: 3px 3px 0 1px black;
    font-size: 1em;
}
#botaoAtt3:active{
    box-shadow: 0 0 0 0 black;
    transform: translate(5px, 5px);
}
#attFila2{
    width: 100%;
    height: 50%;

}
#statusBoss{
    width: 100%;
    height: 90%;
}
#statusBoss p{
    text-shadow: 0.1em 0.1em 0  black;
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;
    color: white;
    font-size: 1.2em;
    margin-left: 25%;
}
#boss{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 72%;
    border: 5px solid black;
}
#bossBarra{
    width:160px;
    height:8%;
    border-radius: 6px;
    border: 3px solid black;
    background-color: #8B0000;
    margin-top: 5%;
    margin-left: 25%;
}
#bossVida{
    display: block;
    justify-content: center;
    align-items: center;
    height: 100%;
    width:0px;
    border-radius: 6px;
    background-color: #FF0000;
    transition: 1.0s ease; 
}
#bossImg{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:90%;

}
#bossSrc{
    margin-right: 40%;
}
</style>