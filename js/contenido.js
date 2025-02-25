
function nuevoParrafo() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("texto").value;
    contenido.innerHTML = contenido.innerHTML + '<p>' + texto + '</p>';
}
function nuevoTitulo() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("texto").value;
    contenido.innerHTML = contenido.innerHTML + '<p>' + texto + '</p>';
}
function nuevoEnlace() {

    var contenido = document.getElementById('contenido');


    var texto = document.getElementById("texto").value;


    var enl = texto.split(",");


    if (enl.length === 2) {
        var url = enl[0].trim();
        var textoEnlace = enl[1].trim();


        contenido.innerHTML += '<a href="' + url + '" target="_blank">' + textoEnlace + '</a><br>';
    } else {

        alert("Por favor, ingrese la URL y el texto del enlace separados por una coma.");
    }
}






function imprimir() {
    var divContents = document.getElementById("contenido").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />');
    a.document.write('<body > <h1>Resultado</h1> <br>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}

document.getElementById('imagen').onchange = function (evt) {
    var entradaArchivo = evt.target,
        archivos = entradaArchivo.files;
    if (FileReader && archivos && archivos.length) {
        var imagen = new FileReader();
        imagen.onload = function () {
            var etiquetaImg = document.createElement("img");
            etiquetaImg.setAttribute('src', imagen.result);
            etiquetaImg.setAttribute('width', '200px');
            etiquetaImg.setAttribute('height', '180px');
            var contenido = document.getElementById('contenido');
            contenido.appendChild(etiquetaImg);
        }
        imagen.readAsDataURL(archivos[0]);
    }
}
