//MOSTRAR EL FORMULARIO Y ASIGNARLE UN BACKGROUND
document.getElementById("boton-form").addEventListener("click", function() { //ADDEVENTLISTENER, PARA QUE OCURRA UN EVENTO DE TIPO "CLICK"
    document.getElementById("formulario").style.display = "block"; //MOSTRAR EL FORMULARIO MEDIANTE EL DISPLAY "BLOCK" LUEGO DE QUE YA EL USUARIO HAYA DADO "CLICK"
    document.getElementById("body").style.background ="rgba(40, 80, 50, 0.9)" //AL HACER "CLICK" SE AGREGA UN FONDO DE COLOR OPACO PARA QUE SE VEA VISUALMENTE MUY BIEN EL FORMULARIO
});

//CANCELAR FORMULARIO
document.getElementById("cancelar").addEventListener("click", function() { //ADDEVENTLISTENER, PARA QUE OCURRA UN EVENTO DE TIPO "CLICK"
    document.getElementById("formulario").style.display = "none"; //LLAMOS EL ID FORMULARIO Y DESPUÉS APLICAMOS DISPLAY "NONE" PARA ESCONDER EL FORMULARIO LUEGO DE LA EJECUCIÓN
    document.getElementById("body").style.background = "#a8ffaf" //AL HACER "CLICK" SE AGREGA EL FONDO VERDE PARA QUE EL BODY SE VEA NUEVAMENTE COMO ESTABA 
    document.getElementById('evidencias').style.zIndex="1"
});

//ENVIAR EL FORMULARIO
document.getElementById("enviar").addEventListener("click", function(e) { //ADDEVENTLISTENER, PARA QUE OCURRA UN EVENTO DE TIPO "CLICK"
    e.preventDefault(); //PREVENTDEFAULT, EVITA QUE EL FORMULARIO SE ENVIÉ AUTOMATICAMENTE Y RECARGUE LA PÁGINA

    //OBTENER LAS VARIABLES PARA PODER VALIDAR O PROCESAR DEPUÉS
    let numero = document.getElementById("numero").value.trim(); //VALUE, OBTENER LO QUE EL USUARIO ESCRIBIÓ EN EL FORMULARIO - TRIM, ELIMINAR SI EL USUARIO HAYA DEJADO ESPACIOS EN BLANCO YA SEA EN EL INICIO O EL FINAL DEL TEXTO
    let departamento = document.getElementById("departamento").value.trim(); //VALUE, OBTENER LO QUE EL USUARIO ESCRIBIÓ EN EL FORMULARIO - TRIM, ELIMINAR SI EL USUARIO HAYA DEJADO ESPACIOS EN BLANCO YA SEA EN EL INICIO O EL FINAL DEL TEXTO
    let fecha = document.getElementById("fecha").value.trim(); //VALUE, OBTENER LO QUE EL USUARIO ESCRIBIÓ EN EL FORMULARIO - TRIM, ELIMINAR SI EL USUARIO HAYA DEJADO ESPACIOS EN BLANCO YA SEA EN EL INICIO O EL FINAL DEL TEXTO
    let foto = document.getElementById("foto").value.trim(); //VALUE, OBTENER LO QUE EL USUARIO ESCRIBIÓ EN EL FORMULARIO - TRIM, ELIMINAR SI EL USUARIO HAYA DEJADO ESPACIOS EN BLANCO YA SEA EN EL INICIO O EL FINAL DEL TEXTO
    let direccion = document.getElementById("direccion").value.trim(); //VALUE, OBTENER LO QUE EL USUARIO ESCRIBIÓ EN EL FORMULARIO - TRIM, ELIMINAR SI EL USUARIO HAYA DEJADO ESPACIOS EN BLANCO YA SEA EN EL INICIO O EL FINAL DEL TEXTO
    let queja = document.getElementById("queja").value.trim(); //VALUE, OBTENER LO QUE EL USUARIO ESCRIBIÓ EN EL FORMULARIO - TRIM, ELIMINAR SI EL USUARIO HAYA DEJADO ESPACIOS EN BLANCO YA SEA EN EL INICIO O EL FINAL DEL TEXTO

    if (numero === "" || departamento === "" || fecha === "" || foto === "" || direccion === "" || queja === "") { //SI EL USUARIO NO RELLENA UNA DE ESTAS VARIABLES LE SALE UNA ALERTA
        alert("Hay campos obligatorios que están vacíos.");
    } else {
        guardarDatos()
        alert("Tu denuncia ha sido registrada. Nos estás ayudando a proteger el medio ambiente."); //SI EL USUARIO INGRESA TODO, TODO ES EXITOSO
        document.getElementById("body").style.background = "#a8ffaf" //AL HACER "CLICK" SE AGREGA UN FONDO DE COLOR BLANCO PARA QUE EL BODY SE VEA NUEVAMENTE COMO ESTABA 
        document.querySelector("form").reset(); //LLAMAMOS LA ETIQUETA FORM Y DESPUÉS EL MÉTODO RESET PARA LIMPIAR EL FORMULARIO LUEGO DE LA EJECUCIÓN 
        document.getElementById("formulario").style.display = "none"; //LLAMOS EL ID FORMULARIO Y DESPUÉS APLICAMOS DISPLAY "NONE" PARA ESCONDER EL FORMULARIO LUEGO DE LA EJECUCIÓN
    }
});

//PARA GUARDAR LOS DATOS INGRESADOS POR EL USUARIO
function guardarDatos(){
    const datos = {
    numeros: document.getElementById('numero').value,
    departamentos:document.getElementById("departamento").value,
    fechas:document.getElementById("fecha").value,
    fotos:document.getElementById("foto").value,
    direcciones:document.getElementById("direccion").value,
    quejas:document.getElementById("queja").value
}
console.log(datos)
}

//USO DE LA API PARA LOS DEPARTAMENTOS
fetch('https://api-colombia.com/api/v1/Department')
.then(resp =>resp.json())
.then(array => {
    let select = document.getElementById('departamento')
    for(let i=0; i<array.length; i++){
        console.log(array[i].name)
        let option = document.createElement('option')
        option.textContent = array[i].name
        select.appendChild(option)
        }
});