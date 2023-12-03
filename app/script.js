const btnIniciarRetirar= document.getElementById('iniciarRetirar');
const display = document.getElementById('box');
const displayCartas = document.getElementById('cartas-faltantes');
const modoNoturno = document.getElementById('alterar-modo-noturno');
const html = document.querySelector('html');
var carta = null;
let deck1 = null;


btnIniciarRetirar.addEventListener('click',()=>{
    console.log(deck1);
    if (!deck1) {
        deck1 = getDeck();
        shuffle(deck1);
        console.log(deck1);
        display.innerHTML=`
            <div id='carta'>
                <div id='valor-inicio'>Vamos começar </div>
                <hr>
                <div>Não pode passar mal</div>
            </div>
        `  
        btnIniciarRetirar.innerHTML='Retirar carta <i class="fa-solid fa-beer-mug-empty">';
        displayCartas.innerHTML=`Cartas faltando ${deck1.length}`

    } else {

        if(deck1.length<=0){
            fimDeJogo();
            btnIniciarRetirar.innerHTML='Iniciar jogo';
            deck1 = null;
            return
        }
        carta = dealCard(deck1);

        display.innerHTML=`
            <div id='carta'>
                <div id='valor-carta'>${carta.Value} ${carta.Suit} </div>
                <hr>
                <div>${carta.Descricao}</div>
            </div>
        `  
        displayCartas.innerHTML=`Cartas faltando ${deck1.length}`
        console.log(carta);
        
    }
    
})


function fimDeJogo(){
    display.innerHTML=`<div id='fim-de-jogo'> FIM DE JOGO </div>`; 
}

modoNoturno.addEventListener('change',()=>{
    if(html.getAttribute('data-contexto')=='light'){
        html.setAttribute('data-contexto','dark');
    } else {
        html.setAttribute('data-contexto','light');
    }
})