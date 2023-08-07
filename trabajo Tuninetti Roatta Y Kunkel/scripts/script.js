// Definimos una clase llamada "Datos" para almacenar los datos ingresados
class Datos {
    constructor(nombre, apellido, dni, edad, numeroDeCelular, correo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.edad = edad;
        this.numeroDeCelular = numeroDeCelular;
        this.correo = correo;
    }
}

// Variable para almacenar los datos ingresados
let datosIngresados;

// Función para obtener los valores ingresados y guardarlos en la variable datosIngresados
function enviar() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const dni = document.getElementById('dni').value;
    const edad = document.getElementById('edad').value;
    const numeroDeCelular = document.getElementById('telefono').value;
    const correo = document.getElementById('gmail').value;

    datosIngresados = new Datos(nombre, apellido, dni, edad, numeroDeCelular, correo);
}

// Función para mostrar los datos ingresados debajo del encabezado "Datos del Formulario"
function mostrar() {
    if (datosIngresados) {
        document.getElementById('nombreMostrado').innerText = datosIngresados.nombre;
        document.getElementById('apellidoMostrado').innerText = datosIngresados.apellido;
        document.getElementById('dniMostrado').innerText = datosIngresados.dni;
        document.getElementById('edadMostrada').innerText = datosIngresados.edad;
        document.getElementById('numeroMostrado').innerText = datosIngresados.numeroDeCelular;
        document.getElementById('correoMostrado').innerText = datosIngresados.correo;
    } else {
        alert('Aún no se han ingresado datos.');
    }
}
