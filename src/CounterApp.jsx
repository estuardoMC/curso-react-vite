import PropTypes from 'prop-types';
export const CounterApp =({value})=>{
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
            <button onClick={ ()=>{console.log("hola")} /*los eventos click se declaran dentro del elemento html*/}>
                +1
            </button>
        </>
    )
}
CounterApp.propTypes = {
    value: PropTypes.number
}