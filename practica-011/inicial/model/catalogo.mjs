export function crearCatalogo(librosIniciales) {
  const libros = [...librosIniciales];

  function obtenerTodos() {
    return libros;
  }

  function buscarPorId(id) {
    return libros.find((libro) => libro.id === id);
  }

  function obtenerDisponibles() {
    // TODO: devolver únicamente los libros con disponible === true
    return libros.filter((libro) => libro.disponible === true);
  }

  function agregar(libro) {
    const maxId = libros.reduce((maximo, actual) => Math.max(maximo, actual.id), 0);
    const nuevo = { ...libro, id: maxId + 1 };
    libros.push(nuevo);
    return nuevo;
  }

  function modificar(id, datos) {
    const libro = buscarPorId(id);
    if (libro === undefined) {
      return undefined;
    }

    Object.assign(libro, datos, { id });
    return libro;
  }

  function eliminar(id) {
    const indice = libros.findIndex((libro) => libro.id === id);
    if (indice === -1) {
      return undefined;
    }

    const [eliminado] = libros.splice(indice, 1);
    return eliminado;
  }

  return {
    obtenerTodos,
    buscarPorId,
    obtenerDisponibles,
    agregar,
    modificar,
    eliminar
  };
}
