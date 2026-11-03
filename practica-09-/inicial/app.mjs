import express from 'express';

const app = express();
const PORT = 3000;

// TODO: publicar la carpeta public
app.use(express.static('public'));

// TODO: crear GET /saludo y responder con 'Servidor LAB9 activo'
app.get('/saludo', (req, res) => {
  res.send('Servidor LAB9 activo');
});

// TODO: arrancar el servidor en PORT
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
