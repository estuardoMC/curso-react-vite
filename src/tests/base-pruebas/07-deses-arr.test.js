import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {
    test('debe retornar un string y un numero', () => {
        const [letters, numbers] = retornaArreglo();
        //esperar a que la funcion retorne valores especificos
        expect( letters ).toBe("ABC");
        expect( numbers ).toBe(123);
        //esperar a que retorne valores de tipos generales
        expect(typeof letters).toBe("string");//esperamos que el tipo de dato que retorne letters sea de tipo string
        expect(typeof numbers).toBe("number");
        //forma dos de esperar tipos de datos
        expect(letters).toEqual(expect.any(String));
    });
}); 