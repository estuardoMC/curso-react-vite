import { render } from "@testing-library/react"
import { FirstApp } from "../../FirstApp"

describe('pruebas en </FirstApp>', () => {
    test('debe de hacer match con el snapshot', () => {
        const title = "hola soy estuardo";
        render(<FirstApp title={title}/>)
    })
})