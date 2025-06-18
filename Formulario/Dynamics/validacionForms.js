let mainForm = document.getElementById("mainForm");
let inputName = document.getElementById("nombre");
let inputEdad = document.getElementById("edad");
let inputCP = document.getElementById("cp");
let inputGenero= document.querySelector("input[name='genero']:checked");
let inputIntereses = document.querySelector("input[name='intereses']:checked");

mainForm.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Seguro que los datos son correctos?");

    // obtenemos los datos con respuesta multiple
    let inputGenero= document.querySelector("input[name='genero']:checked");
    let inputIntereses = document.querySelector("input[name='intereses']:checked");
    let inputPais = document.querySelector("option:checked");

    //validamos el nombre
    if(inputName.value == ""){
        console.log("Error en el nombre");
        errorName = document.createElement("label");
        errorName.textContent = "Ingrese un nombre";
        errorName.setAttribute("class", "error");
        errorName.innerHTML += "<br>";
        mainForm.insertBefore(errorName, document.querySelector("label[for='edad']"));
    }

    //validamos edad
    if(inputEdad.value > 108 || inputEdad.value < 8){
        console.log("Error edad");
        errorName = document.createElement("label");
        errorName.textContent = "Edad inválida";
        errorName.setAttribute("class", "error");
        errorName.innerHTML += "<br>";
        mainForm.insertBefore(errorName, document.querySelector("label[for='cp']"));
    }

    //validamos codigo postal
    if(inputCP.value.length != 5){
        console.log("Error en el cp");
        errorName = document.createElement("label");
        errorName.textContent = "Código postal inválido";
        errorName.setAttribute("class", "error");
        errorName.innerHTML += "<br>";
        mainForm.insertBefore(errorName, document.querySelector("label[for='genero']"));
    }

    //validamos el genero
    let generos = ["masculino", "femenino", "otro"];
    if(generos.indexOf(inputGenero.value) == -1){
        console.log("Error en el genero");
        errorName = document.createElement("label");
        errorName.textContent = "Genero ingresado desconocido";
        errorName.setAttribute("class", "error");
        errorName.innerHTML += "<br>";
        mainForm.insertBefore(errorName, document.querySelector("label[for='intereses']"));
    }

    //validamos los intereses
    let intereses = ["tecnologia", "deportes", "arte", "musica"];
    if(intereses.indexOf(inputIntereses.value) == -1){
        console.log("Error en el interes");
        errorName = document.createElement("label");
        errorName.textContent = "Interés ingresado desconocido";
        errorName.setAttribute("class", "error");
        errorName.innerHTML += "<br>";
        mainForm.insertBefore(errorName, document.querySelector("label[for='pais']"));
    }

    //validamos el pais
    let paises = ["mexico", "Venezuela", "Argentina", "España"];
    if(paises.indexOf(inputPais.value) == -1){
        console.log("Error en el pais");
        errorName = document.createElement("label");
        errorName.textContent = "País inválido";
        errorName.setAttribute("class", "error");
        errorName.innerHTML += "<br>";
        mainForm.insertBefore(errorName, document.querySelector("label[for='comentarios']"));
    }
})