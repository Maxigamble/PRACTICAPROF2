export const NavBar = () => `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid ">
  <a class="navbar-brand" href="#">CRYPTOHELPER</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <div class="select">
    <select id="select-currency">
    </select>
  </div>
    </ul>
	 <div id="search-div" class="search d-flex justify-content-end">
		 <input id="search-input" type="text" name="q" placeholder="Buscar criptomonedas..." />
		 <ul id="results" class="results" >
		 </ul>
	 </div>
</section>
    </form>
  </div>
</div>
</nav>
`

export const Result = (url, name, tag) => `
  <li><a href="#">${name}<br /><span>${tag}</span></a></li>
`

export const Option = (value, currency) => {
  let op = document.createElement("option");
  op.value = value;
  op.innerHTML = currency;
  return op;
}