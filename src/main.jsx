import React from 'react'//importacion de react
import ReactDOM from 'react-dom/client'//react dom
import { FirstApp } from './FirstApp'
//import { App } from './HelloWordlApp'//importamos nuestro componente 
import './estilo.css';//importamos estilos que afecten de manera global para eso lo importamos aqui en el main.jsx
//creamos una raiz y luego renderizamos la aplicacion

const numeroo = 123;//podemos mandar una variable como prop
ReactDOM.createRoot(document.getElementById("root")).render(//mandamos a llamar el componente firstApp mandandole como parametro props
    <React.StrictMode>
        <FirstApp title={"Hola"} numero={numeroo}/>
    </React.StrictMode>
)//cuando se llaman o se pintan los componentes dentro de una etiqueda debe empezar el nombre del componente y terminar con /
//los componentes siempre empiezan con mayuscula