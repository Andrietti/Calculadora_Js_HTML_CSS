function insert(num) {

    let numero = document.getElementById('resultado').innerHTML;
    if (document.getElementById('resultado').innerHTML.length <= 15) {
        document.getElementById('resultado').innerHTML = numero + num
    }

}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}


function back() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    if (resultado && resultado.length <= 15) {
        document.getElementById('resultado').innerHTML = eval(resultado)
    }

    else {
        document.getElementById('resultado').innerHTML = 'Error'
    }
}