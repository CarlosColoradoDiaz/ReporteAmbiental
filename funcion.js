//MOSTRAR EL FORMULARIO Y ASIGNARLE UN BACKGROUND
document.getElementById("boton-form").addEventListener("click", function() { //ADDEVENTLISTENER, PARA QUE OCURRA UN EVENTO DE TIPO "CLICK"
    document.getElementById("formulario").style.display = "block"; //MOSTRAR EL FORMULARIO MEDIANTE EL DISPLAY "BLOCK" LUEGO DE QUE YA EL USUARIO HAYA DADO "CLICK"
    document.getElementById("body").style.background = "rgba(5, 7, 12, 0.60)" //AL HACER "CLICK" SE AGREGA UN FONDO DE COLOR OPACO PARA QUE SE VEA VISUALMENTE MUY BIEN EL FORMULARIO
});

//CANCELAR FORMULARIO
document.getElementById("cancelar").addEventListener("click", function() { //ADDEVENTLISTENER, PARA QUE OCURRA UN EVENTO DE TIPO "CLICK"
    document.getElementById("formulario").style.display = "none"; //LLAMOS EL ID FORMULARIO Y DESPUÉS APLICAMOS DISPLAY "NONE" PARA ESCONDER EL FORMULARIO LUEGO DE LA EJECUCIÓN
    document.getElementById("body").style.background = "white" //AL HACER "CLICK" SE AGREGA UN FONDO DE COLOR BLANCO PARA QUE EL BODY SE VEA NUEVAMENTE COMO ESTABA 
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
        alert("Tu denuncia ha sido registrada. Nos estás ayudando a proteger el medio ambiente."); //SI EL USUARIO INGRESA TODO, TODO ES EXITOSO

        document.getElementById("body").style.background = "white" //AL HACER "CLICK" SE AGREGA UN FONDO DE COLOR BLANCO PARA QUE EL BODY SE VEA NUEVAMENTE COMO ESTABA 
        document.querySelector("form").reset(); //LLAMAMOS LA ETIQUETA FORM Y DESPUÉS EL MÉTODO RESET PARA LIMPIAR EL FORMULARIO LUEGO DE LA EJECUCIÓN 
        document.getElementById("formulario").style.display = "none"; //LLAMOS EL ID FORMULARIO Y DESPUÉS APLICAMOS DISPLAY "NONE" PARA ESCONDER EL FORMULARIO LUEGO DE LA EJECUCIÓN
    }
});