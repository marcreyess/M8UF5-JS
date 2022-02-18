function operation(operacion) {
    console.log("numero");
    document.getElementById('result').value+=operacion
}
function _resultado(operacion) {
    var resultado=document.getElementById('result').value
    document.getElementById('result').value=eval(resultado)
}
function neteja() {
    console.log("neteja");
    document.getElementById('result').value=" ";
}

