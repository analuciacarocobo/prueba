let nombreproducto = prompt("Ingrese el producto");
let validacion = nombreproducto.includes("_");
let precioproducto = prompt("Ingrese el precio del producto");
let validacionpro = precioproducto >=1000 && precioproducto <=30000;
switch (validacion && validacionpro) {
    case true:
        console.log("El producto es valido");
        break;

    default:
        console.log("El producto no es valido");
        break;
}