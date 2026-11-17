export function crearCatalogoProxy() {
  async function obtenerTodos() {
    // TODO: GET /libros con fetch, comprobar response.ok
    // y devolver await response.json()
    const response = await fetch('/libros');
    if(!response.ok){
      throw new Error(`Error HTTP ${response.status}`);
    }
    return await response.json();
  }
    // no usamos filter por que el servidor ya nos devuelve los datos filtrados

  async function obtenerDisponibles() {
    // TODO: GET /libros?disponible=true con fetch,
    // comprobar response.ok y devolver await response.json()
    const response = await fetch(`/libros?disponible=true`); // invertir comillas por ``
    if(!response.ok){
      throw new Error(`Error HTTP ${response.status}`);
    }
    return await response.json();
  }

  return {
    obtenerTodos,
    obtenerDisponibles
  };
}
