console.log(x)
var x = 5;
console.log(x)

let y = 7;
console.log(y);
/*objetos literales*/
/**Asi se hacia antes de actualizacion de ecma */
var obj = new Object();
obj.propiedad = "valor";
console.log(obj);
 
/**Asi se hace ahira con la actualizacion de ecma */
let ob = {
    propiedad: "valor1"
};
console.log(ob);

//Otra forma de utilizarlo es la siguiente, tenemos variables y en base a ellas hacemos el objeto

const nombre = "Alfredo"
const apellido ="Quiroga"

const persona = {
    nombre: nombre,
    apellido: apellido
}
//tambien se puede utilizar simplemente poniendo clave del objeto y su valor sera la variable ya declarada
const nombre1 = "Zulema"
const apellido1 = "Azcurra"

const persona2 = {
    nombre1,
    apellido1,
}
console.log(persona2);
//Ejemplo de utilizar en una funcion

function otroEjempli(nombre3,apellido3,edad) {
    const persona3 = {

        nombre3,
        apellido3,
        edad,   
    };
    return persona3;
};
console.log(otroEjempli('Alberto','Serrani',23));
