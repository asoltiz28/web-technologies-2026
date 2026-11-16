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

  function mostrarTodos() {
    renderizar(modelo.obtenerTodos());
  }

  function mostrarDisponibles() {
    renderizar(modelo.obtenerDisponibles());
  }

  function iniciar() {
    mostrarTodos();
    botonDisponibles.onclick = mostrarDisponibles;
  }

  return { iniciar };
}
