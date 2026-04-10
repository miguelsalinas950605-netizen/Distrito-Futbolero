const productos=[

{id:"p1",nombre:"Vardy Leicester 2017-2018",talla:"M",precio:949,imagen:"URL_IMAGEN"},
{id:"p2",nombre:"Messi Barcelona 2018-2019",talla:"M",precio:1349,imagen:"URL_IMAGEN"},
{id:"p3",nombre:"Del Piero Juventus 2011-2012",talla:"M",precio:1349,imagen:"URL_IMAGEN"}

]

const catalogo=document.getElementById("catalogo")

productos.forEach(p=>{

catalogo.innerHTML+=`

<div class="producto">

<img src="${p.imagen}">

<h3>${p.nombre}</h3>

<p>Talla ${p.talla}</p>

<p class="precio">$${p.precio}</p>

<button onclick="agregar('${p.nombre}',${p.precio})">
Agregar al carrito
</button>

</div>

`

})

let carrito=[]

function agregar(nombre,precio){

carrito.push({nombre,precio})

actualizar()

}

function actualizar(){

let lista=document.getElementById("listaCarrito")

lista.innerHTML=""

let total=0

carrito.forEach(p=>{

lista.innerHTML+=`<p>${p.nombre} - $${p.precio}</p>`

total+=p.precio

})

document.getElementById("total").innerText=total
document.getElementById("contador").innerText=carrito.length

}

function pagarPayPal(){

let total=document.getElementById("total").innerText

window.open("https://www.paypal.com/paypalme/RodrigoMiguelSalOlv/"+total)

}

function pagarMP(){

window.open("LINK_MERCADOPAGO")

}
