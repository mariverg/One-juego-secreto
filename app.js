/*let titulo = document.querySelector('h1');
titulo.innerHTML = "Juego del número secreto";

let parafaro = document.querySelector('p');
parafaro.innerHTML = "Indica un número del 1 al 10";*/
let numbSecreto;
let intentos;
let listaNumeroSorteo = [];
let numero = 10;
console.log (numbSecreto);

function textos(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function verificarIntento() {
    let numeroUsurauio = parseInt(document.getElementById('valorUsuario').value);
    
    //console.log (numbSecreto);
    if (numeroUsurauio == numbSecreto){
        textos('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? "intento" : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        //el usuario no acerto
        if (numeroUsurauio > numbSecreto){
            textos ('p', "El número secreto es menor");
        } else
            textos('p', "El número secreto es mayor");
    }
        intentos++;
        limpiarCaja();
    return;
}

function limpiarCaja()
{
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function numeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random() * numero) +1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteo);
    // si ya sorteamos todos los numeros
    if (listaNumeroSorteo.length == numero){
        textos('p', "Ya se sortearon todos los números posibles");
    }
    else{
    //Si el numero generado esta incluido en la lista
    if(listaNumeroSorteo.includes(numeroGenerado)){
        return numeroSecreto();
    }
    // cuando el numero ya existe
    else{
        listaNumeroSorteo.push(numeroGenerado);
    return numeroGenerado;
    }
}
}

function condicionesInicio()
{
    textos('h1', "Juego del número secreto!");
    textos('p', `Indica un número del 1 al ${numero}`);
    numbSecreto = numeroSecreto();
    intentos =  1;

}

function reiniciarJuego()
{
    //liampiar la caja 
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar numero aletorio
    //Inializar numero de intentos
    condicionesInicio();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

 
}

condicionesInicio();
