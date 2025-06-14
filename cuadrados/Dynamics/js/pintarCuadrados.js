/* En este archivo se encargarán de generar el código que hará dinámica la página */

// Interruptores de los cuadrados
let active_par = false;
let active_impar = false;
let active_primo = false;

// crear objetos elements
let btnPar = document.getElementById("pares");
let btnImpar = document.getElementById("impares");
let btnPrimo = document.getElementById("primos");

// obtenemos el HTML collection de los cuadrados
let listaCuadrados = document.getElementsByClassName("cuadrado");

// incluir los eventsListeners y sus funciones
btnPar.addEventListener("click", ()=>{
    if(!active_par){
        for (let i = 0; i < 100; i++){
            let numActual = listaCuadrados[i].textContent;
            if (numActual%2 == 0){
                listaCuadrados[i].setAttribute("id", "pares");
            }
        }
        active_par = true;
    }
    else{
        for (let i = 0; i < 100; i++){
            let numActual = listaCuadrados[i].textContent;
            if (numActual%2 == 0){
                listaCuadrados[i].setAttribute("id", i+1);
            }
        }
        active_par = false;
    }
})

btnImpar.addEventListener("click", ()=>{
    if(!active_impar){
        for (let i = 0; i < 100; i++){
            let numActual = listaCuadrados[i].textContent;
            if (numActual%2 != 0){
                listaCuadrados[i].setAttribute("id", "impares");
            }
        }
        active_impar = true;
    }
    else{
        for (let i = 0; i < 100; i++){
            let numActual = listaCuadrados[i].textContent;
            if (numActual%2 != 0){
                listaCuadrados[i].setAttribute("id", i+1);
            }
        }
        active_impar = false;
    }
})

btnPrimo.addEventListener("click", () =>{
    if(!active_primo){
        for (let i = 1; i < 100; i++){
            listaCuadrados[i].setAttribute("id", "primos");
        }
        for(let i = 2; i <= 100; i++){
            for(let j = i+1; j < 100; j++){
                let numActual = listaCuadrados[j].textContent;
                if (numActual%i == 0){
                    listaCuadrados[j].setAttribute("id", j);
                }
            }
        } active_primo = true;
    } 
    else{
        for (let i = 0; i < 100; i++){
            listaCuadrados[i].setAttribute("id", i+1);
        }
        active_primo = false;
    }
})