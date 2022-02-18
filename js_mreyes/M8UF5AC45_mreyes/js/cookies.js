function validar(){
    var x=document.getElementById("psswd").value;
    var y=document.getElementById("confpsswd").value;
    var z=document.getElementById("usuari").value;
    if (z==''){
        alert('Dades incorrectes');
    }
    if (x==y) {
            alert('Dades correctes');
        }else {
            alert('Dades incorrectes');
        }
}

function guardar (){
    var nom=document.getElementById("nom").value;
    var cognom=document.getElementById("cognom").value;
    window.localStorage.setItem('nom', nom);
    window.localStorage.setItem ('cognom', cognom);
    console.log("Les dades han sigut guardades")
}
function recuperar (){
    var nom=localStorage.getItem("nom");
    var cognom=localStorage.getItem("cognom");
    document.getElementById('nom').value=nom;
    document.getElementById ('cognom').value=cognom;
    console.log("Les dades han sigut recuperades")
}

function esborrar (){
    localStorage.removeItem("nom");
    localStorage.removeItem("cognom");
}

