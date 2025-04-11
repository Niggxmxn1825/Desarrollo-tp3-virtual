const http = require('http');
const url = require('url');
const logica = require('./logica');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (path === '/agregar' && query.nombre) {
    const resultado = logica.agregar(query.nombre);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(resultado ? 'Producto agregado' : 'Nombre inválido');
  } else if (path === '/listar') {
    const lista = logica.obtenerLista();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(lista));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Ruta no encontrada');
  }
});

server.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});