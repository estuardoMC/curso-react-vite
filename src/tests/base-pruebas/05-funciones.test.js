import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";
describe('Pruebas en 05-funciones', () => {
    test("getUser debe de reotnar un objeto", ()=>{
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser()
        expect( testUser ).toEqual( user );//para analizar objetos usamos toEqual en ves de toBe
    });
    test("getUsuarioActibo debe retornar un objeto", ()=>{
        const name = "Estuardo";//para usarlo como parametro en funcion getUsuarioActivo()
        const user = getUsuarioActivo(name);//guardarla en constante usuario
        expect( user ).toEqual({//lo que guardamos en la constante usuario debe ser igual al objeto que tenemos dentro 
            uid: 'ABC567',
            username: 'Estuardo'
        });
    });
});