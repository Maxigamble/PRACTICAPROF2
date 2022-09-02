
import { NavBar } from "../components/navbar.js";
import { Footer } from "../components/footer.js";


export const IndexRender = () => { //indicar que se ejecuta cuando inicia el index.html
      FooterRender()
      NavBarRender ()
     
}


const FooterRender = () => {
      let root = document.getElementById ("footer-root");
      root.innerHTML +=Footer()
}

const NavBarRender = () => {
      let root = document.getElementById ("navbar-root");
      root.innerHTML +=NavBar()      
}

