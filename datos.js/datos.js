const productos = [];

function agregarProducto(nombre) {
  productos.push(nombre);
}

function listarProductos() {
  return productos;
}

module.exports = { agregarProducto, listarProductos };
