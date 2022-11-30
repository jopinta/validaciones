/*const inputBirth = document.querySelector("#birth");

inputBirth.addEventListener("blur", (evento) => {
    validarBirth(evento.target);
});
*/
export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = ""
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDEError(tipoDeInput, input)

    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "paternMismAtch",
    "customError",
]

const mensajesError = {
    nombre: {
        valueMissing: "Rellenar"
    },
    email: {
        valueMissing: "Rellenar",
        typeMismatch: "Chequearlo"
    },
    password: {
        valueMissing: "Rellenar",
        paternMismAtch: "combinedpassword"
    },
    nacimiento: {
        valueMissing: "Rellenar",
        customError: "Menor"
    },
    numero: {
        valueMissing: "Rellenar",
        paternMismAtch: "XXXXXXXXXX"
    },
    direccion: {
    valueMissing: "Rellenar",
    customError: "direccion"
    },
    ciudad: {
    valueMissing: "Rellenar",
    customError: "ciudad"
    },
    estado: {
    valueMissing: "Rellenar",
    customError: "estado"
},

}

const validadores = {
    nacimiento: (input) => validarBirth(input),
}

function mostrarMensajeDeError(input) {
    let mensaje = "";
    tipoDeErrores.forEach( error => {
        if(input.validity[error]) {
            mensaje = mensajesError[tipoDeInput][error]
        }
    });

    return mensaje
}
function validarBirth(input) {
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    if (mayorEdad(fechaCliente)) {
        mensaje = "Menor";
    };

    input.setCustomValidity(mensaje)
};

function mayorEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());

return diferenciaFechas <= fechaActual;  
}