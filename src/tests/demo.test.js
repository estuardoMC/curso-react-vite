test('Esta prueba no debe de fallar ', ()=>{ //la funcion test lleva como parametro el nombre de la prueba y un callback donde se ejecutara la prueba
    if(1 === 0){//dentro de la prueba se evaluara cierta condicion si se cumple la funcion pasara analizada 
        throw new Error("no se puede dividir entre cero")
    }
});