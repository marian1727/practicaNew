//Template Literals o Template String
//Antes de Ecma6
function antesDeEs6(nombre, identidad){
    return("Este es: " + nombre + " y su identidad secreta es: " + identidad);
};
console.log(antesDeEs6("juan", "detective"));

//Con Ecmas6

function conEcma(nombre2, identidad2) {
    return (`Este es ${nombre2} y su identidad super secreta es ${identidad2}`)
    
}
console.log(conEcma("Carlos", "Pintor"));

//Scape Sequence

function imPrimir() {
    return("De esta forma  \n se hace un salto de linea ")
    
}
console.log(imPrimir());

function impriMir2() {
    return("A ver que hace \t seguis un año mas")
    
}
console.log(impriMir2());