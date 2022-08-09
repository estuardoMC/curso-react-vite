import PropTypes from 'prop-types';
export const CounterApp =({value})=>{

    const handleAdd = (e) =>{
        console.log(e);
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
            <button onClick={ handleAdd } /*recibimos el e y lo mandamos a la funcion*/>
                +1
            </button>
        </>
    )
}
CounterApp.propTypes = {
    value: PropTypes.number
}