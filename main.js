
const nombreTienda = "Twice Fan Store";
const precioAlbum = 65000;
const precioPhotocards = 15000;
const costoEnvio = 12000;
const porcentajeDescuento = 0.1; // 10% de descuento para fans


const nombre = prompt("¿Cómo te llamas?");
const integranteFavorita = prompt("¿Cuál es tu integrante favorita de TWICE?");
const cantidadAlbumesTexto = prompt("¿Cuántos álbumes quieres comprar?");
const cantidadPhotocardsTexto = prompt("¿Cuántos packs de photocards quieres?");

// 2. PROCESAMIENTO

const cantidadAlbumes = parseInt(cantidadAlbumesTexto);
const cantidadPhotocards = parseInt(cantidadPhotocardsTexto);

// Operaciones 

const subtotalAlbumes = cantidadAlbumes * precioAlbum;
const subtotalPhotocards = cantidadPhotocards * precioPhotocards;
const subtotal = subtotalAlbumes + subtotalPhotocards;
const descuento = subtotal * porcentajeDescuento;


let total = subtotal;
total = total - descuento;
total = total + costoEnvio;


let mensaje = "¡Hola, " + nombre + "! Bienvenido/a a " + nombreTienda + ".";
mensaje = mensaje + "\nTu integrante favorita es " + integranteFavorita + ", ¡gran elección!";
mensaje = mensaje + "\n\nResumen de tu pedido:";
mensaje = mensaje + "\n- Álbumes: " + cantidadAlbumes + " x $" + precioAlbum + " = $" + subtotalAlbumes;
mensaje = mensaje + "\n- Photocards: " + cantidadPhotocards + " x $" + precioPhotocards + " = $" + subtotalPhotocards;
mensaje = mensaje + "\n- Subtotal: $" + subtotal;
mensaje = mensaje + "\n- Descuento fan (10%): -$" + descuento;
mensaje = mensaje + "\n- Envío: $" + costoEnvio;
mensaje = mensaje + "\nTOTAL A PAGAR: $" + total;

console.log(mensaje);
alert(mensaje);

