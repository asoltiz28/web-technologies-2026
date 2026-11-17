import express from 'express';
import { librosIniciales } from './model/seed.mjs';
import { crearCatalogo } from './model/catalogo.mjs';

const app = express();
const PORT = 3000;
const modelo = crearCatalogo(librosIniciales);

app.use(express.json());
app.use(express.static('public'));

app.get('/libros', function (req, res) {
  // TODO: si req.query.disponible es 'true',
  // devolver modelo.obtenerDisponibles().
  // En caso contrario, devolver modelo.obtenerTodos().
  if (req.query.disponible === 'true'){
    res.json(modelo.obtenerDisponibles());
  } else {
    res.json(modelo.obtenerTodos());
  }
});

app.get('/libros/:id', function (req, res) {
  const id = Number(req.params.id);
  const libro = modelo.buscarPorId(id);

  if (libro === undefined) {
    res.status(404).json({ mensaje: 'Libro no encontrado' });
    return;
  }

  res.json(libro);
});

app.post('/libros', function (req, res) {
  const libro = modelo.agregar(req.body);
  res.status(201).json(libro);
});

app.put('/libros/:id', function (req, res) {
  const id = Number(req.params.id);
  const libro = modelo.modificar(id, req.body);

  if (libro === undefined) {
    res.status(404).json({ mensaje: 'Libro no encontrado' });
    return;
  }

  res.json(libro);
});

app.delete('/libros/:id', function (req, res) {
  const id = Number(req.params.id);
  const libro = modelo.eliminar(id);

  if (libro === undefined) {
    res.status(404).json({ mensaje: 'Libro no encontrado' });
    return;
  }

  res.json(libro);
});

app.listen(PORT, function () {
  console.log(`Servidor disponible en http://localhost:${PORT}/`);
});

export { app };
