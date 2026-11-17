
const preciosOnline = {
  30: 249,
  60: 299,
  120: 449
};

let carrito = [];

function agregarAlCarrito(nombre, tamano) {
  const precio = preciosOnline[tamano];

  const productoExistente = carrito.find(function(item) {
    return item.nombre === nombre &&
           item.tamano === tamano;
  });

  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carrito.push({
      nombre: nombre,
      tamano: tamano,
      precio: precio,
      cantidad: 1
    });
  }

  actualizarCarrito();
}

const perfumes = [

  {
    nombre: "Hawas Fire",
    categoria: "caballero",
    familia: "Aromática • Acuática • Ambarada",
    valoracion: 4.37,

    notas: {
      salida: ["Esclarea francesa"],
      corazon: ["Notas marinas", "Jazmín egipcio"],
      fondo: ["Ámbar", "Ámbar gris", "Notas minerales"]
    },

    descripcion:
      "Una fragancia aromática y acuática con una salida herbal y fresca. Su corazón combina notas marinas con jazmín egipcio, mientras que el fondo aporta una sensación cálida, mineral y ambarada."
  },

  {
    nombre: "Good Girl",
    categoria: "dama",
    familia: "Floral • Oriental",
    valoracion: 4.5,

    notas: {
      salida: ["Almendra", "Café"],
      corazon: ["Jazmín sambac", "Nardo"],
      fondo: ["Cacao", "Haba tonka"]
    },

    descripcion:
      "Una fragancia femenina intensa y elegante, con un contraste entre notas florales y un fondo cálido y dulce."
  },

  {
    nombre: "CK One",
    categoria: "unisex",
    familia: "Cítrica • Aromática",
    valoracion: 4.2,

    notas: {
      salida: ["Limón", "Bergamota"],
      corazon: ["Té verde", "Jazmín"],
      fondo: ["Almizcle", "Ámbar"]
    },

    descripcion:
      "Una fragancia fresca, limpia y versátil que combina notas cítricas con un corazón aromático y un fondo suave."
  },
  
{
  nombre: "Sauvage",
  categoria: "caballero",
  familia: "Aromática • Fougère",
  valoracion: 4.5,
  notas: {
    salida: ["Bergamota", "Pimienta"],
    corazon: ["Lavanda", "Pimienta de Sichuan", "Geranio"],
    fondo: ["Ambroxan", "Cedro", "Ládano"]
  },
  descripcion: "Fragancia inspirada en Sauvage de Dior. Un aroma fresco, especiado y amaderado, de carácter masculino y versátil."
},
{
  nombre: "Eros",
  categoria: "caballero",
  familia: "Aromática • Fougère",
  valoracion: 4.4,
  notas: {
    salida: ["Menta", "Manzana verde", "Limón"],
    corazon: ["Haba tonka", "Geranio", "Ambroxan"],
    fondo: ["Vainilla", "Cedro", "Vetiver"]
  },
  descripcion: "Fragancia inspirada en Eros de Versace. Aroma fresco y dulce con un fondo cálido y amaderado."
},
{
  nombre: "La Vie Est Belle",
  categoria: "dama",
  familia: "Floral • Frutal • Gourmand",
  valoracion: 4.3,
  notas: {
    salida: ["Grosella negra", "Pera"],
    corazon: ["Iris", "Jazmín", "Flor de azahar"],
    fondo: ["Praliné", "Vainilla", "Pachulí"]
  },
  descripcion: "Fragancia inspirada en La Vie Est Belle de Lancôme. Aroma femenino, dulce y elegante, con notas florales y un fondo cálido."
},
  
{
  nombre: "1 Million",
  categoria: "caballero",
  familia: "Amaderada • Especiada",
  valoracion: 4.4,
  notas: {
    salida: ["Mandarina roja", "Toronja", "Menta"],
    corazon: ["Canela", "Rosa", "Notas especiadas"],
    fondo: ["Cuero", "Ámbar", "Pachulí"]
  },
  descripcion: "Inspirado en 1 Million de Rabanne. Aroma dulce, especiado y cálido, con un fondo elegante de cuero y ámbar."
},
{
  nombre: "Libre",
  categoria: "dama",
  familia: "Floral • Aromática",
  valoracion: 4.4,
  notas: {
    salida: ["Lavanda", "Mandarina", "Grosella negra"],
    corazon: ["Flor de azahar", "Jazmín", "Lavanda"],
    fondo: ["Vainilla", "Almizcle", "Cedro"]
  },
  descripcion: "Inspirado en Libre de Yves Saint Laurent. Una fragancia floral y aromática con notas frescas de lavanda y un fondo cálido de vainilla."
},
{
  nombre: "Baccarat Rouge 540",
  categoria: "unisex",
  familia: "Ámbar • Floral • Amaderada",
  valoracion: 4.5,
  notas: {
    salida: ["Azafrán", "Jazmín"],
    corazon: ["Amberwood", "Ámbar gris"],
    fondo: ["Resina de abeto", "Cedro"]
  },
  descripcion: "Inspirado en Baccarat Rouge 540 de Maison Francis Kurkdjian. Aroma sofisticado, ambarado y ligeramente dulce, con un fondo amaderado."
},
  
{
  nombre: "Valentino Uomo Born In Roma",
  categoria: "caballero",
  familia: "Amaderada • Aromática",
  valoracion: "N/D",
  notas: {
    salida: ["Notas minerales", "Hojas de violeta", "Sal"],
    corazon: ["Salvia", "Jengibre"],
    fondo: ["Vetiver", "Notas amaderadas"]
  },
  descripcion: "Contratipo inspirado en Valentino Uomo Born In Roma. Aroma moderno, mineral, fresco y amaderado."
},
{
  nombre: "Valentino Uomo Born In Roma Coral Fantasy",
  categoria: "caballero",
  familia: "Amaderada • Aromática • Frutal",
  valoracion: "N/D",
  notas: {
    salida: ["Manzana roja", "Cardamomo", "Bergamota"],
    corazon: ["Lavanda", "Salvia", "Geranio"],
    fondo: ["Tabaco", "Pachulí", "Vetiver"]
  },
  descripcion: "Contratipo inspirado en Coral Fantasy. Aroma frutal y especiado con un fondo cálido de tabaco."
},
{
  nombre: "Valentino Uomo Born In Roma Intense",
  categoria: "caballero",
  familia: "Ámbar • Vainilla",
  valoracion: "N/D",
  notas: {
    salida: ["Vainilla"],
    corazon: ["Lavanda"],
    fondo: ["Vetiver"]
  },
  descripcion: "Contratipo inspirado en Born In Roma Intense. Aroma cálido, dulce y elegante, con lavanda y vainilla."
},
{
  nombre: "Invictus Parfum",
  categoria: "caballero",
  familia: "Aromática • Acuática • Amaderada",
  valoracion: "N/D",
  notas: {
    salida: ["Notas marinas", "Lavanda", "Pimienta rosa"],
    corazon: ["Jabón", "Hojas de violeta", "Mirto"],
    fondo: ["Almizcle", "Sándalo", "Cachemira"]
  },
  descripcion: "Contratipo inspirado en Invictus Parfum de Rabanne. Fresco, marino y amaderado."
},
{
  nombre: "Invictus Aqua",
  categoria: "caballero",
  familia: "Acuática • Cítrica",
  valoracion: "N/D",
  notas: {
    salida: ["Notas marinas", "Cítricos"],
    corazon: ["Notas aromáticas", "Acordes acuáticos"],
    fondo: ["Ámbar gris", "Notas amaderadas"]
  },
  descripcion: "Contratipo inspirado en Invictus Aqua. Aroma deportivo, cítrico y acuático. Pirámide orientativa; confirmar edición."
},
{
  nombre: "Invictus Platinum",
  categoria: "caballero",
  familia: "Aromática • Amaderada",
  valoracion: "N/D",
  notas: {
    salida: ["Absenta", "Toronja"],
    corazon: ["Menta", "Lavanda"],
    fondo: ["Ciprés", "Pachulí"]
  },
  descripcion: "Contratipo inspirado en Invictus Platinum. Fresco, herbal y energizante."
},
{
  nombre: "Invictus Victory",
  categoria: "caballero",
  familia: "Ámbar • Especiada",
  valoracion: "N/D",
  notas: {
    salida: ["Pimienta rosa", "Limón"],
    corazon: ["Incienso", "Lavanda"],
    fondo: ["Vainilla", "Haba tonka", "Ámbar"]
  },
  descripcion: "Contratipo inspirado en Invictus Victory. Aroma dulce, especiado y cálido."
},
{
  nombre: "Invictus Victory Elixir",
  categoria: "caballero",
  familia: "Ámbar • Amaderada • Especiada",
  valoracion: "N/D",
  notas: {
    salida: ["Lavanda", "Cardamomo", "Pimienta negra"],
    corazon: ["Incienso", "Pachulí"],
    fondo: ["Vainilla", "Haba tonka"]
  },
  descripcion: "Contratipo inspirado en Invictus Victory Elixir. Intenso, dulce y especiado."
},
{
  nombre: "Invictus Victory Absolu Parfum Intense",
  categoria: "caballero",
  familia: "Amaderada • Especiada • Ambarada",
  valoracion: "N/D",
  notas: {
    salida: ["Pimienta negra"],
    corazon: ["Ámbar"],
    fondo: ["Sándalo"]
  },
  descripcion: "Contratipo inspirado en Invictus Victory Absolu. Aroma especiado, ambarado y amaderado."
},

{
  nombre: "Le Labo Santal 33",
  categoria: "unisex",
  familia: "Amaderada • Aromática",
  valoracion: "N/D",
  notas: {
    salida: ["Cardamomo", "Violeta"],
    corazon: ["Sándalo", "Cedro", "Papiro"],
    fondo: ["Cuero", "Ámbar", "Almizcle"]
  },
  descripcion: "Contratipo inspirado en Santal 33 de Le Labo. Aroma amaderado, seco y elegante, con matices de cuero y sándalo."
},
{
  nombre: "Le Labo Bergamote 22",
  categoria: "unisex",
  familia: "Cítrica • Aromática",
  valoracion: "N/D",
  notas: {
    salida: ["Bergamota", "Toronja"],
    corazon: ["Petitgrain", "Flor de azahar"],
    fondo: ["Vetiver", "Almizcle", "Ámbar"]
  },
  descripcion: "Contratipo inspirado en Bergamote 22 de Le Labo. Aroma cítrico, luminoso y refrescante, con un fondo suave y amaderado."
},
{
  nombre: "Le Labo Thé Noir 29",
  categoria: "unisex",
  familia: "Amaderada • Aromática",
  valoracion: "N/D",
  notas: {
    salida: ["Higo", "Bergamota", "Laurel"],
    corazon: ["Té negro", "Cedro"],
    fondo: ["Vetiver", "Almizcle", "Tabaco"]
  },
  descripcion: "Contratipo inspirado en Thé Noir 29 de Le Labo. Aroma profundo y sofisticado, con té negro, higo y matices amaderados."
},
{
  nombre: "Le Labo Another 13",
  categoria: "unisex",
  familia: "Almizclada • Ambarada",
  valoracion: "N/D",
  notas: {
    salida: ["Pera", "Manzana"],
    corazon: ["Ambrox", "Jazmín"],
    fondo: ["Almizcle", "Ambreta"]
  },
  descripcion: "Contratipo inspirado en Another 13 de Le Labo. Aroma limpio, almizclado y ligeramente ambarado, con un carácter minimalista."
},
{
  nombre: "Le Labo Myrrhe 55",
  categoria: "unisex",
  familia: "Ambarada • Resinosa",
  valoracion: "N/D",
  notas: {
    salida: ["Acordes especiados"],
    corazon: ["Mirra", "Jazmín"],
    fondo: ["Pachulí", "Almizcle", "Notas ambaradas"]
  },
  descripcion: "Contratipo inspirado en Myrrhe 55 de Le Labo. Aroma resinoso, cálido y misterioso, con protagonismo de la mirra."
},
{
  nombre: "Le Labo Lavande 31",
  categoria: "unisex",
  familia: "Aromática • Floral",
  valoracion: "N/D",
  notas: {
    salida: ["Bergamota", "Neroli"],
    corazon: ["Lavanda"],
    fondo: ["Almizcle", "Ámbar", "Haba tonka"]
  },
  descripcion: "Contratipo inspirado en Lavande 31 de Le Labo. Aroma fresco y aromático, con lavanda, cítricos y un fondo cálido."
},

{
  nombre: "Jean Paul Gaultier Le Male",
  categoria: "caballero",
  familia: "Ámbar • Fougère",
  valoracion: "N/D",
  notas: {
    salida: ["Lavanda", "Menta", "Bergamota"],
    corazon: ["Canela", "Comino", "Flor de azahar"],
    fondo: ["Vainilla", "Haba tonka", "Sándalo"]
  },
  descripcion: "Contratipo inspirado en Le Male. Aroma clásico, fresco y especiado, con un fondo dulce de vainilla."
},
{
  nombre: "Jean Paul Gaultier Ultra Male",
  categoria: "caballero",
  familia: "Ámbar • Fougère",
  valoracion: "N/D",
  notas: {
    salida: ["Pera", "Lavanda", "Menta"],
    corazon: ["Canela", "Salvia", "Alcaravea"],
    fondo: ["Vainilla", "Ámbar", "Pachulí"]
  },
  descripcion: "Contratipo inspirado en Ultra Male. Aroma dulce, afrutado e intenso, ideal para quienes prefieren fragancias llamativas."
},
{
  nombre: "Jean Paul Gaultier Le Beau",
  categoria: "caballero",
  familia: "Amaderada • Aromática",
  valoracion: "N/D",
  notas: {
    salida: ["Bergamota"],
    corazon: ["Coco"],
    fondo: ["Haba tonka"]
  },
  descripcion: "Contratipo inspirado en Le Beau. Aroma tropical, dulce y cremoso, con coco y haba tonka."
},
{
  nombre: "Jean Paul Gaultier Scandal Pour Homme",
  categoria: "caballero",
  familia: "Ámbar • Amaderada",
  valoracion: "N/D",
  notas: {
    salida: ["Salvia", "Mandarina"],
    corazon: ["Caramelo", "Haba tonka"],
    fondo: ["Vetiver"]
  },
  descripcion: "Contratipo inspirado en Scandal Pour Homme. Aroma dulce y cálido, con caramelo y un fondo amaderado."
},
{
  nombre: "Jean Paul Gaultier Le Male Xmas Limited Edition",
  categoria: "caballero",
  familia: "Aromática • Ambarada",
  valoracion: "N/D",
  notas: {
    salida: ["Lavanda", "Menta"],
    corazon: ["Canela", "Notas aromáticas"],
    fondo: ["Vainilla", "Haba tonka"]
  },
  descripcion: "Contratipo inspirado en una edición navideña de Le Male. Perfil orientativo; confirmar el año y la versión para precisar las notas."
},
{
  nombre: "Jean Paul Gaultier Le Male Elixir",
  categoria: "caballero",
  familia: "Ámbar • Fougère",
  valoracion: "N/D",
  notas: {
    salida: ["Lavanda", "Menta"],
    corazon: ["Vainilla", "Benjuí"],
    fondo: ["Miel", "Haba tonka", "Tabaco"]
  },
  descripcion: "Contratipo inspirado en Le Male Elixir. Aroma intenso, dulce y cálido, con miel, vainilla y tabaco."
},
{
  nombre: "Jean Paul Gaultier Le Beau Paradise Garden",
  categoria: "caballero",
  familia: "Verde • Acuática • Amaderada",
  valoracion: "N/D",
  notas: {
    salida: ["Notas verdes", "Notas acuáticas", "Menta", "Jengibre"],
    corazon: ["Coco", "Higo", "Sal"],
    fondo: ["Sándalo", "Haba tonka"]
  },
  descripcion: "Contratipo inspirado en Le Beau Paradise Garden. Aroma tropical y verde, con coco, higo y un fondo amaderado."
},

 
{
  nombre: "Ralph Lauren Polo",
  categoria: "caballero",
  familia: "Amaderada • Chipre",
  valoracion: "N/D",
  notas: {
    salida: ["Pino", "Albahaca", "Enebro"],
    corazon: ["Cuero", "Manzanilla", "Pimienta"],
    fondo: ["Musgo de roble", "Tabaco", "Pachulí"]
  },
  descripcion: "Contratipo inspirado en Polo Green de Ralph Lauren. Aroma clásico, verde y amaderado, con matices de cuero y tabaco."
},
{
  nombre: "Ralph Lauren Polo Black",
  categoria: "caballero",
  familia: "Amaderada • Aromática",
  valoracion: "N/D",
  notas: {
    salida: ["Mango", "Mandarina", "Limón"],
    corazon: ["Salvia", "Ajenjo"],
    fondo: ["Sándalo", "Pachulí", "Haba tonka"]
  },
  descripcion: "Contratipo inspirado en Polo Black. Aroma fresco, frutal y amaderado, con un carácter elegante."
},
{
  nombre: "Ralph Lauren Polo Blue",
  categoria: "caballero",
  familia: "Aromática • Fougère",
  valoracion: "N/D",
  notas: {
    salida: ["Melón", "Pepino", "Mandarina"],
    corazon: ["Albahaca", "Salvia", "Geranio"],
    fondo: ["Almizcle", "Notas amaderadas", "Gamuza"]
  },
  descripcion: "Contratipo inspirado en Polo Blue. Aroma fresco, acuático y limpio, ideal para uso diario."
},
{
  nombre: "Ralph Lauren Polo Sport",
  categoria: "caballero",
  familia: "Aromática • Verde",
  valoracion: "N/D",
  notas: {
    salida: ["Limón", "Bergamota", "Mandarina"],
    corazon: ["Menta", "Lavanda", "Jengibre"],
    fondo: ["Almizcle", "Sándalo", "Cedro"]
  },
  descripcion: "Contratipo inspirado en Polo Sport. Aroma cítrico, fresco y deportivo, con un fondo aromático."
},
{
  nombre: "Ralph Lauren Big Pony 1",
  categoria: "caballero",
  familia: "Cítrica • Aromática",
  valoracion: "N/D",
  notas: {
    salida: ["Lima"],
    corazon: ["Toronja"],
    fondo: ["Notas amaderadas"]
  },
  descripcion: "Contratipo inspirado en Big Pony 1. Aroma cítrico, fresco y juvenil, con carácter deportivo."
},
{
  nombre: "Ralph Lauren Polo Red",
  categoria: "caballero",
  familia: "Amaderada • Especiada",
  valoracion: "N/D",
  notas: {
    salida: ["Toronja roja", "Arándano", "Limón"],
    corazon: ["Azafrán", "Salvia"],
    fondo: ["Ámbar", "Café", "Notas amaderadas"]
  },
  descripcion: "Contratipo inspirado en Polo Red. Aroma vibrante, frutal y especiado, con un fondo cálido."
},
{
  nombre: "Ralph Lauren Polo 67",
  categoria: "caballero",
  familia: "Amaderada • Aromática",
  valoracion: "N/D",
  notas: {
    salida: ["Piña", "Bergamota", "Limón"],
    corazon: ["Salvia", "Geranio", "Enebro"],
    fondo: ["Vetiver", "Pachulí", "Solidago"]
  },
  descripcion: "Contratipo inspirado en Polo 67. Aroma moderno, fresco y amaderado, con matices frutales."
}
 
];


function mostrarPerfumes(lista) {

  const catalogo = document.getElementById("catalogo");

  catalogo.innerHTML = "";

  lista.forEach(function(perfume) {

    const tarjeta = document.createElement("article");

    tarjeta.className = "ficha-perfume";

    tarjeta.innerHTML = `

      <div class="foto-perfume">

        <div class="imagen-placeholder">
          FOTO
        </div>

      </div>


      <div class="informacion-perfume">

        <p class="contratipo">
          CONTRATIPO ESENCIA 27
        </p>

        <h3>${perfume.nombre}</h3>

        <p class="inspirado">
          Categoría: ${perfume.categoria}
        </p>


        <div class="valoracion">

          <span class="estrellas">
            ★★★★★
          </span>

          <strong>
            ${perfume.valoracion} / 5
          </strong>

        </div>


        <div class="familia">

          <h4>
            Familia olfativa
          </h4>

          <p>
            ${perfume.familia}
          </p>

        </div>


        <div class="notas">

          <h4>
            Notas olfativas
          </h4>


          <div class="nota">

            <span>🌿</span>

            <div>

              <strong>
                Salida
              </strong>

              <p>
                ${perfume.notas.salida.join(" • ")}
              </p>

            </div>

          </div>


          <div class="nota">

            <span>🌊</span>

            <div>

              <strong>
                Corazón
              </strong>

              <p>
                ${perfume.notas.corazon.join(" • ")}
              </p>

            </div>

          </div>


          <div class="nota">

            <span>🟠</span>

            <div>

              <strong>
                Fondo
              </strong>

              <p>
                ${perfume.notas.fondo.join(" • ")}
              </p>

            </div>

          </div>

        </div>


        <div class="descripcion">

          <h4>
            Descripción del aroma
          </h4>

          <p>
            ${perfume.descripcion}
          </p>

        </div>


        
<div class="tamanos">
  <h4>Elige tu tamaño</h4>

  <button class="btn-tamano activo" data-ml="30">
    30 ml
  </button>

  <button class="btn-tamano" data-ml="60">
    60 ml
  </button>

  <button class="btn-tamano" data-ml="120">
    120 ml
  </button>
</div>

<div class="precio">
  $249 MXN
</div>

<p class="detalle-precio">
  IVA incluido · Envío nacional sujeto a confirmación
</p>



 
<button class="btn-agregar-carrito" type="button">
  🛒 Agregar al carrito
</button>
       
<button class="btn-whatsapp" type="button">
  Pedir por WhatsApp
</button>


      </div>

    `;


    catalogo.appendChild(tarjeta); 
    
const botonesTamano =
  tarjeta.querySelectorAll(".btn-tamano");

const precioElemento =
  tarjeta.querySelector(".precio");

botonesTamano.forEach(function(boton) {

  boton.addEventListener("click", function() {

    const tamano = boton.dataset.ml;

    const precio = preciosOnline[tamano];

    precioElemento.textContent =
      "$" + precio + " MXN";

    botonesTamano.forEach(function(b) {
      b.classList.remove("activo");
    });

    boton.classList.add("activo");

  });

});

const botonWhatsApp =
  tarjeta.querySelector(".btn-whatsapp");

botonWhatsApp.addEventListener("click", function() {

  const botonSeleccionado =
    tarjeta.querySelector(".btn-tamano.activo");

  const tamano = botonSeleccionado.dataset.ml;
  const precio = preciosOnline[tamano];

  const mensaje =
    "Hola, quiero realizar un pedido en Esencia 27.\n\n" +
    "Perfume: " + perfume.nombre + "\n" +
    "Presentación: " + tamano + " ml\n" +
    "Precio: $" + precio + " MXN\n\n" +
    "¿Me pueden ayudar a realizar mi compra?";

  const telefono = "525551635398";

  const enlace =
    "https://wa.me/" + telefono +
    "?text=" + encodeURIComponent(mensaje);

  window.open(enlace, "_blank");

});


const botonAgregar =
  tarjeta.querySelector(".btn-agregar-carrito");

botonAgregar.addEventListener("click", function() {

  const botonSeleccionado =
    tarjeta.querySelector(".btn-tamano.activo");

  const tamano = Number(botonSeleccionado.dataset.ml);

  agregarAlCarrito(perfume.nombre, tamano);

});

  });

}


mostrarPerfumes(perfumes);
let categoriaActual = "todos";

const botones = document.querySelectorAll(
  "section:first-of-type button"
);

botones.forEach(function(boton) {

  boton.addEventListener("click", function() {

    categoriaActual = boton.textContent.toLowerCase();

    aplicarFiltros();

  });

});


const buscador = document.getElementById("busqueda");

buscador.addEventListener("input", function() {

  aplicarFiltros();

});


function aplicarFiltros() {

  const texto = buscador.value.toLowerCase().trim();

  const filtrados = perfumes.filter(function(perfume) {

    const coincideCategoria =
      categoriaActual === "todos" ||
      perfume.categoria === categoriaActual;

    const coincideBusqueda =
      perfume.nombre.toLowerCase().includes(texto);

    return coincideCategoria && coincideBusqueda;

  });

  mostrarPerfumes(filtrados);

}

botones.forEach(function(boton) {

  boton.addEventListener("click", function() {

    const categoria = boton.textContent.toLowerCase();

    const filtrados = perfumes.filter(function(perfume) {

      return perfume.categoria === categoria;

    });

    mostrarPerfumes(filtrados);

  });

});

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const totalElemento = document.getElementById("total-carrito");

  if (!lista || !totalElemento) return;

  lista.innerHTML = "";
  let total = 0;

  carrito.forEach(function(item, indice) {
    const subtotal = item.precio * item.cantidad;
    total += subtotal;

    const fila = document.createElement("div");
    fila.className = "producto-carrito";

    const descripcion = document.createElement("span");
    descripcion.textContent =
      item.nombre + " · " + item.tamano + " ml · " +
      item.cantidad + " × $" + item.precio +
      " = $" + subtotal;

    // Botón para disminuir cantidad
const disminuir = document.createElement("button");
disminuir.type = "button";
disminuir.textContent = "−";
disminuir.className = "boton-cantidad";

disminuir.addEventListener("click", function() {
    if (item.cantidad > 1) {
        item.cantidad--;
        actualizarCarrito();
    }
});

// Número de unidades
const cantidadTexto = document.createElement("span");
cantidadTexto.textContent = item.cantidad;
cantidadTexto.className = "cantidad-carrito";

// Botón para aumentar cantidad
const aumentar = document.createElement("button");
aumentar.type = "button";
aumentar.textContent = "+";
aumentar.className = "boton-cantidad";

aumentar.addEventListener("click", function() {
    item.cantidad++;
    actualizarCarrito();
});
    const quitar = document.createElement("button");
    quitar.type = "button";
    quitar.textContent = "Quitar";
    quitar.addEventListener("click", function() {
      carrito.splice(indice, 1);
      actualizarCarrito();
    });

   fila.appendChild(descripcion);
fila.appendChild(disminuir);
fila.appendChild(cantidadTexto);
fila.appendChild(aumentar);
fila.appendChild(quitar);
lista.appendChild(fila);
  });

  totalElemento.textContent = "Total: $" + total + " MXN";
  
const contador =
  document.getElementById("contador-carrito");

if (contador) {
  const cantidadTotal = carrito.reduce(
    function(suma, item) {
      return suma + item.cantidad;
    },
    0
  );

  contador.textContent = cantidadTotal;
}

}

document.getElementById("enviar-carrito")
  .addEventListener("click", function() {

    if (carrito.length === 0) {
      alert("Agrega al menos un perfume al carrito.");
      return;
    }

    let total = 0;
    let mensaje = "🛍️ *PEDIDO ESENCIA 27*\n\n";

    carrito.forEach(function(item, indice) {
      const subtotal = item.precio * item.cantidad;
      total += subtotal;

      mensaje +=
        (indice + 1) + ". " + item.nombre + "\n" +
        "Presentación: " + item.tamano + " ml\n" +
        "Cantidad: " + item.cantidad + "\n" +
        "Subtotal: $" + subtotal + " MXN\n\n";
    });

    mensaje +=
      "*TOTAL: $" + total + " MXN*\n\n" +
      "Hola, quiero confirmar mi pedido y consultar el envío.";

    const enlace =
      "https://wa.me/525551635398?text=" +
      encodeURIComponent(mensaje);

    window.open(enlace, "_blank");
  });

const botonCarritoFlotante =
  document.getElementById("carrito-flotante");



const seccionCarrito =
  document.getElementById("seccion-carrito");

if (botonCarritoFlotante && seccionCarrito) {

  botonCarritoFlotante.setAttribute(
    "aria-expanded", "false"
  );

  botonCarritoFlotante.addEventListener("click", function() {

    const abierto =
      !seccionCarrito.classList.contains("carrito-oculto");

    if (abierto) {
      seccionCarrito.classList.add("carrito-oculto");
    } else {
      seccionCarrito.classList.remove("carrito-oculto");
    }

    botonCarritoFlotante.setAttribute(
      "aria-expanded",
      String(!abierto)
    );

  });

}

const botonCerrarCarrito = document.getElementById("cerrar-carrito");

if (botonCerrarCarrito) {
  botonCerrarCarrito.addEventListener("click", function() {
    const seccion = document.getElementById("seccion-carrito");
    const boton = document.getElementById("carrito-flotante");

    if (seccion) {
      seccion.classList.add("carrito-oculto");
    }

    if (boton) {
      boton.setAttribute("aria-expanded", "false");
    }
  });
}

const WHATSAPP_ESENCIA27 = "525551635398";

function abrirWhatsAppEsencia27(mensaje) {
  const enlace = "https://wa.me/" +
    WHATSAPP_ESENCIA27 +
    "?text=" + encodeURIComponent(mensaje);

  window.open(enlace, "_blank");
}


function enviarCarritoPorWhatsApp() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }
  

  let mensaje = "🛍️ *PEDIDO ESENCIA 27*\n\n";
  mensaje += "Hola, quiero realizar el siguiente pedido:\n\n";

  let total = 0;

  carrito.forEach((producto, index) => {
    const subtotal = producto.precio * producto.cantidad;
    total += subtotal;

    mensaje += `${index + 1}. *${producto.nombre}*\n`;
    mensaje += `Presentación: ${producto.tamano} ml\n`;
    mensaje += `Cantidad: ${producto.cantidad}\n`;
    mensaje += `Subtotal: $${subtotal.toFixed(2)} MXN\n\n`;
  });

  mensaje += `*TOTAL: $${total.toFixed(2)} MXN*\n\n`;
  mensaje += "Quisiera confirmar disponibilidad, pago y entrega.";

  const telefono = "525551635398";
  const enlace = "https://wa.me/" + telefono +
    "?text=" + encodeURIComponent(mensaje);

  window.open(enlace, "_blank");
}


const botonEnviarCarrito =
  document.getElementById("enviar-carrito");

if (botonEnviarCarrito) {
  botonEnviarCarrito.addEventListener(
    "click",
    enviarCarritoPorWhatsApp
  );
}



  