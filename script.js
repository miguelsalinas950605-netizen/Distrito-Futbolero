const productos=[

{id:"p1",nombre:"Vardy Leicester 2017-2018",talla:"M",precio:949,imagen:"URL_IMAGEN"},
{id:"p2",nombre:"Messi Barcelona 2018-2019",talla:"M",precio:1349,imagen:"URL_IMAGEN"},
{id:"p3",nombre:"Del Piero Juventus 2011-2012",talla:"M",precio:1349,imagen:"URL_IMAGEN"}
{id:"p4",nombre:"Robben Países Bajos Mundial 2014",talla:"M",precio:999,imagen:"URL_IMAGEN"},

{id:"p5",nombre:"Mbappé PSG visitante 2020-2021",talla:"M",precio:1199,imagen:"URL_IMAGEN"},

{id:"p6",nombre:"Neymar PSG alternativa 2019-2020",talla:"M",precio:1249,imagen:"URL_IMAGEN"},

{id:"p7",nombre:"Mitrovic Fulham local 2019-2020",talla:"M",precio:949,imagen:"URL_IMAGEN"},

{id:"p8",nombre:"Kroos Alemania Mundial 2010",talla:"M",precio:1149,imagen:"URL_IMAGEN"},

{id:"p9",nombre:"Lampard Chelsea 2010-2011",talla:"M",precio:1249,imagen:"URL_IMAGEN"},

{id:"p10",nombre:"Kroos Real Madrid visitante 2018-2019",talla:"M",precio:1249,imagen:"URL_IMAGEN"},

{id:"p11",nombre:"Pirlo Italia 2012",talla:"M",precio:1499,imagen:"URL_IMAGEN"},

{id:"p12",nombre:"Pjanic Lyon tercera 2010-2011",talla:"M",precio:999,imagen:"URL_IMAGEN"},

{id:"p13",nombre:"Reus Borussia Dortmund 2012-2013",talla:"L",precio:1099,imagen:"URL_IMAGEN"},

{id:"p14",nombre:"Lampard Inglaterra 2012-2013",talla:"XL",precio:1049,imagen:"URL_IMAGEN"},

{id:"p15",nombre:"Nani Valencia tercera 2016-2017",talla:"L",precio:949,imagen:"URL_IMAGEN"},

{id:"p16",nombre:"Beckham Inglaterra Mundial 2010",talla:"L",precio:1099,imagen:"URL_IMAGEN"},

{id:"p17",nombre:"Jádson Corinthians visitante 2017",talla:"L",precio:849,imagen:"URL_IMAGEN"},

{id:"p18",nombre:"Gerrard Inglaterra visitante 2008-2010",talla:"2XL",precio:1049,imagen:"URL_IMAGEN"},

{id:"p19",nombre:"Azpilicueta Olympique Marseille tercera 2011-2012",talla:"M",precio:1049,imagen:"URL_IMAGEN"},

{id:"p20",nombre:"Krohn-Dehli Brøndby 2010-2012",talla:"M",precio:849,imagen:"URL_IMAGEN"},

{id:"p21",nombre:"Duda Málaga visitante 2008-2009",talla:"L",precio:949,imagen:"URL_IMAGEN"},

{id:"p22",nombre:"Shevchenko Ucrania Mundial 2006",talla:"L",precio:2199,imagen:"URL_IMAGEN"},

{id:"p23",nombre:"Schweinsteiger Alemania 2015-2016",talla:"M",precio:1049,imagen:"URL_IMAGEN"},

{id:"p24",nombre:"McKennie Schalke 2018-2019",talla:"M",precio:999,imagen:"URL_IMAGEN"},

{id:"p25",nombre:"Fábregas Chelsea visitante 2015-2016",talla:"L",precio:1149,imagen:"URL_IMAGEN"},

{id:"p26",nombre:"Xhaka Suiza 2016",talla:"XL",precio:999,imagen:"URL_IMAGEN"},

{id:"p27",nombre:"Bale Gales 2016",talla:"XL",precio:1099,imagen:"URL_IMAGEN"},

{id:"p28",nombre:"Robben Bayern 2015-2016",talla:"M",precio:1149,imagen:"URL_IMAGEN"},

{id:"p29",nombre:"Totti Roma visitante 2017-2018",talla:"M",precio:1149,imagen:"URL_IMAGEN"},

{id:"p30",nombre:"Minamino Japón 2020-2021",talla:"L",precio:1049,imagen:"URL_IMAGEN"},

{id:"p31",nombre:"Ronaldinho Barcelona visitante 2006-2008",talla:"L",precio:1599,imagen:"URL_IMAGEN"},

{id:"p32",nombre:"Gerrard Liverpool visitante 2011-2012",talla:"M",precio:1299,imagen:"URL_IMAGEN"},

{id:"p33",nombre:"Salah Liverpool visitante 2019-2020",talla:"XL",precio:1499,imagen:"URL_IMAGEN"},

{id:"p34",nombre:"Kroos Alemania Mundial 2014",talla:"L",precio:1499,imagen:"URL_IMAGEN"},

{id:"p35",nombre:"Ribéry Olympique Marsella 2006-2007",talla:"M",precio:1299,imagen:"URL_IMAGEN"},

{id:"p36",nombre:"Rooney Manchester United tercera 2015-2016",talla:"L",precio:1249,imagen:"URL_IMAGEN"},

{id:"p37",nombre:"Gerrard Inglaterra visitante Mundial 2010",talla:"M",precio:1099,imagen:"URL_IMAGEN"}

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
