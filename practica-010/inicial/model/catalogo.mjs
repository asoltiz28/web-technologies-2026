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
    let maxId = 0; // maxId vale 0 y el primer libro recibe el id 1.
    for (const l of libros){
      if(l.id > maxId){
        maxId = l.id;
      }
    }
    libro.id = maxId + 1;
    libros.push(libro);
  }

  function modificar(id, datos) {
    // TODO: localizar el libro y actualizar sus datos
    const libro = buscarPorId(id);
    if(libro){
      libro.titulo = datos.titulo;
      libro.precio = datos.precio; 
      libro.disponible = datos.disponible;
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
