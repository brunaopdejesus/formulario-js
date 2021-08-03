const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const resultado = document.getElementById("resultado");

const somar = document.getElementById("somar");
const subtrair = document.getElementById("subtrair");
const multiplicar = document.getElementById("multiplicar");
const dividir = document.getElementById("dividir");

const formulario = document.getElementById("formulario");

// -------------------------------------------------------------------------------

function soma() {
    if (numero1.value !== '' && numero2.value !== '') {
        resultado.value = parseInt(numero1.value) + parseInt(numero2.value);
        formulario.classList.add("somar");
        formulario.classList.remove("subtrair");
        formulario.classList.remove("multiplicar");
        formulario.classList.remove("dividir");
    } else {
        alert("Preencha todos os campos!");
    }
}

somar.addEventListener("click", soma);

// -------------------------------------------------------------------------------

function subtracao() {
    if (numero1.value !== '' && numero2.value !== '') {
        resultado.value = parseInt(numero1.value) - parseInt(numero2.value);
        formulario.classList.add("subtrair");
        formulario.classList.remove("somar");
        formulario.classList.remove("multiplicar");
        formulario.classList.remove("dividir");
    } else {
        alert("Preencha todos os campos!");
    }
}

subtrair.addEventListener("click", subtracao);

// -------------------------------------------------------------------------------

function multiplicacao() {
    if (numero1.value !== '' && numero2.value !== '') {
        resultado.value = parseInt(numero1.value) * parseInt(numero2.value);
        formulario.classList.add("multiplicar");
        formulario.classList.remove("subtrair");
        formulario.classList.remove("somar");
        formulario.classList.remove("dividir");
    } else {
        alert("Preencha todos os campos!");
    }
}

multiplicar.addEventListener("click", multiplicacao);

// -------------------------------------------------------------------------------

function divisao() {
    if (numero1.value !== '' && numero2.value !== '') {
        resultado.value = parseInt(numero1.value) / parseInt(numero2.value);
        formulario.classList.add("dividir");
        formulario.classList.remove("subtrair");
        formulario.classList.remove("multiplicar");
        formulario.classList.remove("somar");
    } else {
        alert("Preencha todos os campos!");
    }
}

dividir.addEventListener("click", divisao);
