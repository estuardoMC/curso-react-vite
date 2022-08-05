import React from 'react'//importacion de react
import ReactDOM from 'react-dom/client'//react dom

//comenzar con un functional component
const App =()=>{
    return (<h1>Hola mundo</h1>);
};

//creamos una raiz y luego renderizamos la aplicacion
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)//cuando se llaman o se pintan los componentes dentro de una etiqueda debe empezar el nombre del componente y terminar con /
//los componentes siempre empiezan con mayuscula