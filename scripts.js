console.log("IntegradorJs")

const nombre = document.getElementById("nombre");

const apellido = document.getElementById("apellido");

const correo = document.getElementById("correo");

const edad = document.getElementById("edad");

const mensajesNombre = document.getElementById("mensajesNombre");

const mensajesEmail = document.getElementById("mensajesEmail");

const botonResumen = document.getElementById("botonResumen");

const mensajesResultado = document.getElementById("mensajesResultado");

const expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

function validarNombre(){
    if(nombre.value.length < 2) {
        mensajesNombre.innerHTML = "Ingrese un Nombre válido";
    }
    else {
        mensajesNombre.innerHTML = "Nombre correcto!!";
    }
}

function validarApellido(){
    if(apellido.value.length < 2) {
        mensajesApellido.innerHTML = "Ingrese un Apellido válido";
    }
    else {
        mensajesApellido.innerHTML = "Apellido correcto!!";
    }
}

function validarEmail(){
    if(!expRegular.test(correo.value)) {
        mensajesEmail.innerHTML = "El email no es valido";
    }
    else {
        mensajesEmail.innerHTML = "Email correcto!!";
    }
}

function validarEdad(){
    if(edad.value <= 0) {
        mensajesEdad.innerHTML = "Ingrese una edad válida";
        mensajesResultado.style.display = 'none';
    }
    else {
        mensajesEdad.innerHTML = "Edad correcta!!";
        mensajesResultado.style.display = ''
    }
}


/*function validarResultado(){

        mensajesResultado.innerHTML = "Total a pagar: $ " + categoria.value * edad.value;
    }


       // resultado.innerHTML = "Total a pagar: $ " + categoria * cantidad;
     //   mensajeResultado.innerHTML = "Total a pagar ";
     //if(categoria.value.length < 2 && cantidad.value.length < 1) {

*/
botonResumen.addEventListener("click", validarNombre);

botonResumen.addEventListener("click", validarApellido);

botonResumen.addEventListener("click", validarEmail);

botonResumen.addEventListener("click", validarEdad);

// botonResumen.addEventListener("click", validarResultado);




        





//botonBorrar.addEventListener("click", );



//console.log(nombre);

//console.log(document.getElementById("nombre"));

//const mensajesNombre = document.getElementById("mensajesNombre");

//console.log(mensajeNombre);

//console.log(mensajesNombre.innerHTML);

//mensajeNombre.innerHTML = "lalala muqueño"
