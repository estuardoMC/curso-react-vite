import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe("pruebas en 08-imp-exp",()=>{
    test('getHeroeById debe de retornar un heroe  por id', () => {
        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);
        expect(hero).toEqual({id: 1, name: "Batman", owner: "DC"})
    })
    test('getHeroeById debe de retornar undefined si no exite el id', () => {
        //evaluar que un dato sea falso o nulo 
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();
    })

    //tarea: 
    //debe retornar un array con los heroes de DC
    //length === 3
    //toEqual al array filtrado

    //debe retornar un array con los heroes de marvel
    //lenght === 2

    test('getHeroesByOWner debe regresar heroes de DC', () => {
        const owner = "DC"; 
        const heroes = getHeroesByOwner(owner);
        expect(heroes).toEqual([
            { id: 1, name: "Batman", owner: "DC"},
            { id: 3, name: "Superman", owner: "DC"},
            { id: 4, name: "Flash", owner: "DC"}
        ]);
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner))
    })
    test('getHeroesByOWner debe regresar heroes de DMarvel', () => {
        const owner = "Marvel"; 
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner))
    })
});