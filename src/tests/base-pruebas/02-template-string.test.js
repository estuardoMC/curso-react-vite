import { getSaludo } from "../../base-pruebas/02-template-string";

describe('pruebas en 02-template-string', () => { 
    test('get saludao debe retornar "Hola Estuardo"', () => {
        const name = "Estuardo";
        const message = getSaludo( name );
        expect( message ).toBe(`Hola ${ name }`);
    })
})