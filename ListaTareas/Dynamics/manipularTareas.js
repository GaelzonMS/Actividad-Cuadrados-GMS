// crear objetos de los elementos
let btnCrear = document.getElementById("crear");
let btcEliminar = document.getElementById("eliminar");
let espacioTareas = document.getElementById("recuadroTareas");

// creamos sus eventListeners
btnCrear.addEventListener("click", ()=>{
    console.log("Se creo una tarea");
    let nuevaTarea = document.createElement("div");
    nuevaTarea.setAttribute("class", "tarea");
    nuevaTarea.textContent = "Tarea";
    espacioTareas.appendChild(nuevaTarea);
})

btcEliminar.addEventListener("click", ()=>{
    if(document.getElementsByClassName("tarea") != null)
    {
        let ultimasTarea = document.getElementsByClassName("tarea");
        espacioTareas.removeChild(ultimasTarea[ultimasTarea.length - 1]);
    }
})