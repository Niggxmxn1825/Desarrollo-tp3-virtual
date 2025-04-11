const datos = require('./datos');

function agregar(nombre) {
  if (nombre && nombre.trim() !== '') {
    datos.agregarProducto(nombre.trim());
    return true;
  }
  return false;
}

function obtenerLista() {
  return datos.listarProductos();
}

module.exports = { agregar, obtenerLista };