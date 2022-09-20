import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('pruebas en promesas', () => {
    test('getHeroesById debe retornar un heroe', (done) => {//recivimos el done
        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero =>{ //queremos esperar la respuesta de esta promesa
                //expect( true ).toBe( false );
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                }); 
                done();//el done lo utilizamos para que espere un tiempo hasta que se haya cumplido la promesa
            });  
    })
})

//quermos evaluar si hay error en la promesa
//evaluaremos el .catch

describe('pruebas en promesas', () => {
    test('getHeroesById debe retornar un heroe', (done) => {//recivimos el done
        const id = 100;
        getHeroeByIdAsync( id )
        .then( heroe => {
            expect(hero).toBeFalsy();
            done();
        })
        .catch(error =>{
            expect( error ).toBe(`No se pudo encontrar el héroe`)
            done();
        });
    });
});