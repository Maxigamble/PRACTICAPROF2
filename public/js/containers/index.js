
import { NavBar } from "../components/navbar.js";

export const IndexRender = () => { //indicar que se ejecuta cuando inicia el index.html
      let root = document.getElementById ("navbar");
      root.innerHTML +=NavBar()
     
}

