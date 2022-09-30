
import { NavBar, Result, Option } from "../components/navbar.js";
import { Footer } from "../components/footer.js";
import { Carta } from "../components/carta.js";
import { GetCryptos, GetMonedas, GetSearch } from "../services/coingecko.js";

let priceList;
let currency = "ARS"

export const IndexRender = () => { //indicar que se ejecuta cuando inicia el index.html
      NavBarRender()
      FooterRender()
      GetCryptos(CartaRender)
}

const CartaRender = (result) => {
      priceList = result;
      let root = document.getElementById("content-root");
      root.innerHTML = ""
      result.forEach(element => {
            root.innerHTML += Carta(element.image.small, element.name, currency, element.market_data.current_price[`${currency.toLowerCase()}`])
      });
}


const NavBarRender = () => {
      let root = document.getElementById("navbar-root");
      root.innerHTML += NavBar()
      GetMonedas(SelectRender)
      SearchConfig()
}



const SelectRender = (currencyes) => {
      //Ordeno el listado de monedas aceptadas
      currencyes.sort()
      //Renderizo todas las monedas aceptadas en el select
      let select = document.getElementById("select-currency")
      for (let index = 0; index < currencyes.length; index++) {
            select.appendChild(Option(currencyes[index].toUpperCase(), currencyes[index].toUpperCase()))
      }
      //DEFINO QUE EL DEFAULT DEL SELECT SEA EL CURRENCY (currency = "ARS")
      for (var i, j = 0; i = select.options[j]; j++) {
            if (i.value == currency) {
                  select.value = currency;
                  break;
            }
      }
      //Hago que cuando cambie el valor del select, tambien se vuelvan a renderizar
      //las cartas con su nueva moneda que la almaceno en la variable currency
      select.onchange = function () {
            currency = select.value
            CartaRender(priceList)
      };
}

//Footer
const FooterRender = () => {
      let root = document.getElementById("footer-root");
      root.innerHTML += Footer()
}

//BARRA DE BUSQUEDA
const SearchConfig = () => {
      //Traigo el input
      let searchInput = document.getElementById("search-input");
      //
      searchInput.addEventListener('keyup', debounce(() => {
            //Indico que hay que hacer al terminar de escribir
            let valor = document.getElementById('search-input').value;
            GetSearch(valor, RenderResult)
            //indico cuanto tiempo hay que esperar al terminar de escribir
      }, 700))
}

const RenderResult = (json) => {
      let root = document.getElementById("results")
      json.splice(10)
      root.innerHTML = ""
      json.forEach(element => {
            root.innerHTML += Result("", element.symbol, element.name)
      });
}

function debounce(callback, wait) {
      let timeout;
      return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(function () { callback.apply(this, args); }, wait);
      };
}