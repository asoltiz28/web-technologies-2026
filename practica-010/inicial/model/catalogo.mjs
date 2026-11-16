export function crearCatalogo(librosIniciales) {
  const libros = [...librosIniciales];

  function obtenerTodos() {
    return libros;
  }

  function buscarPorId(id) {
    return libros.find((libro) => libro.id === id);
  }

  function agregar(libro) {
    // TODO: asignar un id y añadir el libro al array
    libro.id = libros.length + 1;
    libros.push(libro);
  }

  function modificar(id, datos) {
    // TODO: localizar el libro y actualizar sus datos
    const libro = buscarPorId(id);
    if(libro){
      libro.titulo = datos.titulo;
      libro.autor = datos.autor; 
      libro.precio = datos.precio;
    }
    return libro;
  }
  function eliminar(id) {
    // TODO: localizar el libro y eliminarlo del array
    const index = libros.findIndex((libro) => libro.id === id);
    if(index != -1){
      return libros.splice(index, 1)[0];
    }
    
  }

  return {
    obtenerTodos,
    buscarPorId,
    agregar,
    modificar,
    eliminar
  };
}
