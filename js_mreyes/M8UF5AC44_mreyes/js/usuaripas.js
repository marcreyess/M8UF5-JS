function validar(){
    var x=document.getElementById("psswd").value;
    var y=document.getElementById("confpsswd").value;
    var z=document.getElementById("usuari").value;
    if (z=="ibai") {
        if (x=="1234" && y==x) {
            alert('Has accedit');
        }else {
            alert('No coincideix')
        }
    }else {
        alert('No coincideix')
    }
}