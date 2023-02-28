<script>
// @ts-nocheck

  import { estado } from "./Estado";
  import { trocarestadodojogo } from "./Estado";

  setTimeout(() => {
    title.style.fontSize = "1.5em";

    setTimeout(() => {
        mybutton1.style.visibility = "visible";
        
      setTimeout(() => {
        mybutton2.style.visibility = "visible";

        setTimeout(() => {
        mybutton3.style.visibility = "visible";
      },1000 )
      },1000 )
    },1500 )
  },1000 );


</script>
<link href="https://fonts.cdnfonts.com/css/amiga-forever" rel="stylesheet">
                                
                                                
<div id="principal" >
  <div id="title">
      <h1>BUSCA PARA A APROVAÇÃO</h1>
  </div>

  <div class="menu">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <button id = "mybutton1"  on:click={() => trocarestadodojogo("ajuda")} >
         Ajuda
      </button>

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <button id ="mybutton2" on:click={() => trocarestadodojogo("inicio")}>
        Jogar
      </button>

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <button id ="mybutton3" on:click={() => trocarestadodojogo("sobre")}>
       Sobre
      </button>
  </div>
</div>
<style>

@import url('https://fonts.cdnfonts.com/css/amiga-forever');

h1{
  
  font-family: 'Amiga Forever', sans-serif;
  font-family: 'Amiga Forever Pro2', sans-serif;
  font-family: 'Amiga Forever Pro', sans-serif;    
  color: white;
  text-shadow: 0.1em 0.1em 0  black;

  }
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
  #title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 0em;
      width:100%;
      height:20%;
      transition: 1.5s;
  }
  .menu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80%;
    width: 100%;
    align-items: center;
  }
  #mybutton1 {
    text-shadow: 0.1em 0.1em 0 #808080;
    position: relative;
    background: white;
    color:black;
    font-size: 1.2em;
    letter-spacing: 0.1em;
    padding: 15px 30px;
    cursor: help;
    border-radius: 10px;
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;
    box-shadow: 3px 3px 0 1px black;
    visibility: hidden;
  }
  #mybutton1:hover {
    background: white;
    color: black;
    box-shadow: 3px 3px 0 1px black;
    font-size: 1.5em;
  }
  #mybutton1:active{
    box-shadow: 0 0 0 0 black;
    transform: translate(5px, 5px);
  }
  #mybutton2 {
    text-shadow: 0.1em 0.1em 0 #808080;
    position: relative;
    background: white;
    color:black;
    font-size: 1.2em;
    letter-spacing: 0.1em;
    padding: 15px 30px;
    cursor: progress;
    border-radius: 10px;
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;
    box-shadow: 3px 3px 0 1px black;
    visibility: hidden;
  }
  #mybutton2:hover {
    background: white;
    color: black;
    box-shadow: 3px 3px 0 1px black;
    font-size: 1.5em;
  }
  #mybutton2:active{
    box-shadow: 0 0 0 0 black;
    transform: translate(5px, 5px);
  }
  #mybutton3 {
    text-shadow: 0.1em 0.1em 0 #808080;
    position: relative;
    background: white;
    color:black;
    font-size: 1.2em;
    letter-spacing: 0.1em;
    padding: 15px 30px;
    cursor: context-menu;
    border-radius: 10px;
    font-family: 'Amiga Forever', sans-serif;
    font-family: 'Amiga Forever Pro2', sans-serif;
    font-family: 'Amiga Forever Pro', sans-serif;
    box-shadow: 3px 3px 0 1px black;
    visibility: hidden;
  }
  #mybutton3:hover {
    background: white;
    color: black;
    box-shadow: 3px 3px 0 1px black;
    font-size: 1.5em;
  }
  #mybutton3:active{
    box-shadow: 0 0 0 0 black;
    transform: translate(5px, 5px);
  }
</style>