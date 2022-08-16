test('Esta prueba no debe de fallar ', ()=>{ //la funcion test lleva como parametro el nombre de la prueba y un callback donde se ejecutara la prueba
    //1) inicializacion 
    const message1 = "hola mundo";

    // 2) estimulo 
    const message2 = message1.trim();

    //3) observar el comportamiento... esperando
    expect( message1 ).toBe( message2 );//condicion: con esto decimos que message1 debe ser igual a meesage2
});