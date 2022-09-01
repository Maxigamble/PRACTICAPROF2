
import { footerRoot } from "../components/footer";

export const IndexRender = () => { //indicar que se ejecuta cuando inicia el index.html
      let root = document.getElementById ("footerRoot");
      root.innerHTML +=footerRoot()
     
}

