export function crearCatalogoPresenter(modelo) {
  const lista = document.getElementById('catalogo');
  const botonDisponibles = document.getElementById('mostrar-disponibles');

  function renderizar(libros) {
    lista.innerHTML = '';

    for (const libro of libros) {
      const li = document.createElement('li');
      li.textContent = `${libro.titulo} · ${libro.precio} €`;
      lista.append(li);
    }
  }

  async function mostrarTodos() { // async para poder usar await
    const libros = await modelo.obtenerTodos();
    renderizar(libros);
  }

  async function mostrarDisponibles() {
    const libros = await modelo.obtenerDisponibles();
    renderizar(libros);
  }

  function iniciar() {
    mostrarTodos();
    botonDisponibles.onclick = mostrarDisponibles;
  }

  return { iniciar };
}
