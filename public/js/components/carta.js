export const Carta = (img, title, currency, value) => `<div id= "cartita" class="row carta mx-2">
<!--mx = margin:auto;-->
<div class="col-md-4 min-vh-150">
    <!--Foto-->
    <img src="${img}" class="img-fluid" alt="Fotocripto" />
</div>
<div class="col-md-8">
    <!--Contenido-->
    <div class="row">
        <div id="card-title" class="col-md-12 text-center">
            <!--Nombre-->
            ${title}
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <!--Moneda-->
            ${currency}
        </div>
        <div id="crypto-value"class="col-md-6">
            <!--Valor-->
            ${value}
        </div>
    </div>
</div>
</div>`