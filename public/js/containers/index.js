import { ComponentEjemplo } from "../components/example1.js"
export const IndexRender = () => { //indicar que se ejecuta cuando inicia el index.html
      let root = document.getElementById ("root");
      root.innerHTML +=ComponentEjemplo()
     
}
