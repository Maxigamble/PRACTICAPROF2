
import { NavBar } from "../components/navbar.js";
import { Footer } from "../components/footer.js";
import { Carta } from "../components/carta.js";


export const IndexRender = () => { //indicar que se ejecuta cuando inicia el index.html
      FooterRender()
      NavBarRender ()
      CartaRender ()
      
      
     
}


const FooterRender = () => {
      let root = document.getElementById ("footer-root");
      root.innerHTML +=Footer()
}

const NavBarRender = () => {
      let root = document.getElementById ("navbar-root");
      root.innerHTML +=NavBar()      
}

const CartaRender = () => {
      let root = document.getElementById ("content-root");
      root.innerHTML +=Carta ()
      for (let index = 0; index < 10; index++) {
            root.innerHTML +=Carta ();
            
      }
}