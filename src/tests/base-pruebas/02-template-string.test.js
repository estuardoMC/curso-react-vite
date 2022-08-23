import { getSaludo } from "../../base-pruebas/02-template-string";//importamos el componente

describe('pruebas en 02-template-string', () => { //de estar forma describimos nuestra prueba
    test('get saludao debe retornar "Hola Estuardo"', () => {//la funcion test ejecuta o manda a llamar la funcion que queremos probar
        const name = "Estuardo";
        //ejecutamos nuestra funcion de cualquier forma, en este caso la estamos asignando 
        const message = getSaludo( name );
        /*con la funcion expect nosotros decimos que esperamos que cierto valor (en este caso seria lo que 
        retorne la funcion get saludo) sea identico a lo que mandamos como parametro en el metodo 
        toBe(parametro) si no es identico al dato que mandamos en el metodo toBe() que en este caso es 
        "hola + el valor de {name}"*/ 
        expect( message ).toBe(`Hola ${ name }`);
    })
})