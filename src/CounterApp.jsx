import { useState } from 'react'; //importando un hook useState
import PropTypes from 'prop-types';
export const CounterApp =({value})=>{//podemos usar el valor que desestructuramos de los props para usarlo como valor inicial del state
    const [ counter, setCounter ] = useState( value ); //desestructuramos lo que viene de la funcion useState(), y una funcion para modificar el state
    const handleAdd = (e) =>{
        //setCounter( counter + 1 );//esta funicon la llamamos mandandole el state modificado 
        //desde la version 18 de react solo se va a actualizar el estado una vez que haya terminado toda la funcion que llama al setCouter
        //otra forma de modificar el valor del state es mandando a llamar el setCouter mandando un callback que retorna el valor del state y despues podemos modificarlo
        setCounter((s) => s + 1)
    }
    const handleSubstract = ()=>{
        setCounter( counter -1 );
    }
    const handleReset = ()=>{
        //setCounter( counter = value );//saldra error

        //setCounter((s) => s = value) esta es una opcion pero es mejor solo mandarle el valor que queremos asignar
        setCounter( value )
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd } /*recibimos el e y lo mandamos a la funcion*/>
                +1
            </button>
            <button onClick={ handleSubstract }> -1</button>
            <button onClick={ handleReset }> reset </button>
        </>
    )
}
CounterApp.propTypes = {
    value: PropTypes.number
}
//notas: cuando hay un camio ya sea en el estado, nuestro functional component se va a volver a renderisar
//pero no cambiara el estado