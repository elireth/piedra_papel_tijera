
    let puntajeJugador = 0;
    let puntajeMaquina = 0;
    let partida = 1;
 	
    function computerPlay()
   {
     //Aqui jugara la maquina
    //Debe realizarse una tirada aleatoria de 1 a 3. el resultado debe ser piedra, papel o tijera y retornarse.

    let resultado = Math.floor(Math.random() * 3) +1;

    if (resultado == 1) {
            
            return "piedra";
    } else if (resultado == 2){

        return "papel";
    } else if (resultado == 3 ){

        return "tijera";
}
}

function playerPlay()
   {
     let seleccion = prompt("Ingrese piedra, papel o tijeras", "piedra, papel o tijera");
     let conversion = seleccion.toLowerCase();

        if (conversion == "piedra") {
            
            return "piedra";
    } else if (conversion == "papel"){

        return "papel";
    } else if (conversion == "tijera" ){

        return "tijera";
} else {
    alert("Introduce una opcion valida");

}
}



    function logicajuego()
   {

    let decisionplayer = playerPlay();
    let decisionpc = computerPlay();
    
    
    if (decisionplayer == "papel" && decisionpc == "tijera" || decisionplayer == "piedra" && decisionpc == "papel" || decisionplayer == "tijera" && decisionpc == "piedra"){
        alert("Perdiste. Has usado: " + decisionplayer + " La computadora ha usado: " + decisionpc + " Ronda: " + partida);
} else if (decisionplayer == "tijera" && decisionpc == "papel" || decisionplayer == "papel" && decisionpc == "piedra" || decisionplayer == "tpiedra" && decisionpc == "tijera"){   
    alert("Ganaste. Has usado: " + decisionplayer + " La computadora ha usado: " + decisionpc + " Ronda: " + partida);
} else if (decisionplayer == decisionpc){
            alert("Empate, has usado: " + decisionplayer + " La computadora ha usado: " + decisionpc + " Ronda: " + partida);
}
}

    function final(){

    if (puntajeJugador < puntajeMaquina ){
        alert("Pierdes, la maquina obtuvo " + puntajeMaquina + " y tu obtuviste " + puntajeJugador);
    } else if (puntajeJugador > puntajeMaquina ){
        alert("Ganas, la maquina obtuvo " + puntajeMaquina + " y tu obtuviste " + puntajeJugador);
    } else if (puntajeJugador == puntajeMaquina ){
        alert("Empate, la maquina obtuvo " + puntajeMaquina + " y tu obtuviste " + puntajeJugador);
    } 

}

    function ronda(){
            
            
                while (partida < 6) {
            
              logicajuego()
            partida++
}
if (partida == 6){
    final();
} 
        
}


ronda();
