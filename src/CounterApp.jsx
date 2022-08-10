import { useState } from 'react'; //importando un hook useState
import PropTypes from 'prop-types';
export const CounterApp =({value})=>{
    const [ counter, setCounter ] = useState( 0 ); //desestructuramos lo que viene de la funcion useState(), y una funcion para modificar el state
    const handleAdd = (e) =>{
        setCounter( counter + 1 );//esta funicon la llamamos mandandole el state modificado 
        //desde la version 18 de react solo se va a actualizar el estado una vez que haya terminado toda la funcion que llama al setCouter
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd } /*recibimos el e y lo mandamos a la funcion*/>
                +1
            </button>
        </>
    )
}
CounterApp.propTypes = {
    value: PropTypes.number
}