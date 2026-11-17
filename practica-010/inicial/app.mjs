import express from 'express';
import { librosIniciales } from './model/seed.mjs';
import { crearCatalogo } from './model/catalogo.mjs';

const app = express();
const PORT = 3000;
const modelo = crearCatalogo(librosIniciales);

app.use(express.json());
app.use(express.static('public'));

// TODO: GET /libros
app.get('/libros', function(req, res) {  //con json, devuelve modelo.obtenerTodos() en formato json
  res.json(modelo.obtenerTodos());
});

// TODO: GET /libros/:id
  app.get('/libros/:id', function(req, res) {
  const libros = Number(req.params.id);
  const libro = modelo.buscarPorId(libros);
  if (libro) { // arreglar el error de que no se encuentra el libro, si no existe, devolver un 404
    res.json(libro);
  } else {
    res.status(404).json({ error: 'Libro no encontrado' });
  }
});

// TODO: POST /libros
app.post('/libros', function(req, res) {
  const libro = req.body;
  modelo.agregar(libro);
  res.status(201).json(libro);
});

// TODO: PUT /libros/:id
app.put('/libros/:id', function(req, res) {
  const id = Number(req.params.id);
  const libro = modelo.modificar(id, req.body);
  if(libro){
    res.json(libro);
  } else {
    res.status(404).json({ error: 'Libro no encontrado' });
  }
});

// TODO: DELETE /libros/:id
app.delete('/libros/:id', function(req, res) {
  const id = Number(req.params.id);
  const libro = modelo.eliminar(id);
  if(libro){
    res.json(libro);
  } else {
    res.status(404).json({ error: 'Libro no encontrado' });
  }
});

app.listen(PORT, function() {
  console.log(`Servidor disponible en http://localhost:${PORT}/`);
});
