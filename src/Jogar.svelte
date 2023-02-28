<script>
// @ts-nocheck

    import { Jogadora } from "./personagens/Protagonista";

setTimeout(() => {
    if(!Jogadora.certificadoLili){
        luizaBarra1.style.width = "118px";
        luizaVida.style.width = "100%";
        luizaBarra2.style.width = "120px";
        luizaBarra3.style.width = "100px";
        luizaCura.style.width = "100px";
    }
    if(Jogadora.certificadoLili){
        luizaBarra1.style.width = "158px";
        luizaVida.style.width = "100%";
        luizaBarra2.style.width = "120px";
        luizaBarra3.style.width = "100px";
        luizaCura.style.width = "100px";
    }       
    if(Jogadora.certificadoDavid){
        luizaBarra1.style.width = "199px";
        luizaVida.style.width = "100%";
        luizaBarra2.style.width = "120px";
        luizaBarra3.style.width = "100px";
        luizaCura.style.width = "100px";
    }
    if(Jogadora.certificadoRanieri){
        luizaBarra1.style.width = "241px";
        luizaVida.style.width = "100%";
        luizaBarra2.style.width = "120px";
        luizaBarra3.style.width = "100px";
        luizaCura.style.width = "100px";
    }
},500 ) 
</script>

<div id ="principal" >
    <div id = "status" >
        <div id="luizaBarra1">
            <div id="luizaVida"> </div>
        </div>
        <div id = "luizaBarra2">
            <div id = "luizaPoder"></div>
        </div>
        <div id="luizaBarra3" >
            <div id="luizaCura"></div> 
        </div>
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
      border-radius: 10px;
}
#status{
    margin-top:3%;
    margin-left: 17%;
    width:50%;
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
#luizaBarra1{
    background-color: #fff;
    width: 0px;
    height:19px;
    border-radius: 5px;
    background-color: #8B0000;
    border: 3px solid black;
    transition: 1.0s ease; 
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
    width:0px;
    height:15px;
    border: 3px solid black;
    background-color: #00008B;
    transition: 1.0s ease; 
}
#luizaPoder{
    height: 100%;
    background-color: #0000FF;
    width: 0px;
    transition: 1.0s ease; 
}
#luizaBarra3{
    width:0px;
    height:15px;
    border: 3px solid black;
    background-color:#008000;
    transition: 1.0s ease; 
}
#luizaCura{
    height: 100%;
    width: 0px;
    background-color: #00FF00;
    transition: 1.0s ease;   
}
</style>