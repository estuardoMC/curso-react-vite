
export const getSaludo =(nombre) => {
    return 'Hola ' + nombre;
}
const nombre = "Estuardo"

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );