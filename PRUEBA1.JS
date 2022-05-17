class Catalogo{
  constructor(id, producto, precio) {
      this.id = id
      this.producto = producto
      this.precio = precio
  }
};
const listaDePrecios = [

new Catalogo (1, "Auriculares", 8000),
new Catalogo (2, "Gabinetes", 10000),
new Catalogo (3, "Discos duros", 5000),
new Catalogo (4, "Procesadores", 30000),
new Catalogo (5, "Placas graficas", 60000),
new Catalogo (6, "Teclados", 7000),
new Catalogo (7, "Placas madre", 9000),
new Catalogo (8, "Monitores", 25000),
new Catalogo (9, "Mouses", 3000),
new Catalogo (10, "Memorias RAM", 4000),
new Catalogo (11, "Cable HDMI", 400),
new Catalogo (12, "Coollers", 1000),
new Catalogo (13, "Mouse pads", 2200),
new Catalogo (14, "Antenas WIFI", 400),
new Catalogo (15, "Fuente de potencia", 5300),
new Catalogo (16, "Parlantes", 3800),
new Catalogo (17, "Pasta termica", 200),
new Catalogo (18, "Sillas gamer", 35000),
new Catalogo (19, "Micofonos", 12000),
new Catalogo (20, "Cable VGA", 250)
];

const carrito = [];

Window.localStorage

  localStorage.setItem("listaDePrecios", JSON.stringify(listaDePrecios));
  JSON.parse(localStorage.getItem("listaDePrecios"));

  listaDePrecios.forEach((producto )=>{
   
  let listaDeProductos = document.createElement("div");
  listaDeProductos.innerHTML = producto.producto + " a " + producto.precio ;

  let botonAgregar = document.createElement("button");
  botonAgregar.innerHTML = " + " 
  botonAgregar.id = producto.id
  botonAgregar.addEventListener("click", 


  function() {
    let productito = document.createElement("h4");
    productito.innerHTML = producto.producto + " a " + producto.precio
    document.body.append(productito);
    
    precioCarrito()


  }
  )
  let botonQuitar = document.createElement("button");
  botonQuitar.innerHTML = " - " 
  botonQuitar.id = producto.id
  botonQuitar.addEventListener("click", 

  
  function() {
    let productito = document.createElement("h4");
    productito.innerHTML = producto.producto + producto.precio
    document.body.append(productito);
    precioCarrito()


  }
  )

  
  listaDeProductos.append(botonQuitar)

  listaDeProductos.appendChild(botonAgregar);

  document.body.append(listaDeProductos);
 })
    






function precioCarrito(){
  let precioTotal = 0
  localStorage.setItem("productito", JSON.stringify(productito))
  JSON.parse(localStorage.getItem("productito"));

  let respuesta = productito

  let indentificarProducto = listaDePrecios.find ( producto => producto.precio && producto.producto === respuesta);

  indentificarProducto = respuesta

  precioTotal += respuesta.precio

  console.log(respuesta);

  carrito.push(respuesta.toUpperCase());

  const carritoCompleto = carrito.concat(["Precio a pagar: " + "$ " + precioTotal]);

  localStorage.setItem("carritoLleno", JSON.stringify(carritoCompleto));
  JSON.parse(localStorage.getItem("carritoLleno")); 

  let mostrarCarrito = document.getElementById("precioCarrito");
  mostrarCarrito.innerHTML = carritoCompleto 
  document.body.append(mostrarCarrito);
  console.log(carritoCompleto);

 
}


/*
let respuesta = ""
let indentificarProducto = listaDePrecios.find ( elem => elem.precio && elem.producto === respuesta);

precioTotal += indentificarProducto.precio

carrito.push(respuesta.toUpperCase());


const carritoCompleto = carrito.concat(["Precio a pagar: " + "$ " + precioTotal]);

localStorage.setItem("carritoLleno", JSON.stringify(carritoCompleto));
JSON.parse(localStorage.getItem("carritoLleno"));

let mostrarCarrito = document.getElementById("precioCarrito");
mostrarCarrito.innerHTML = respuesta
document.body.append(mostrarCarrito);

*/


    