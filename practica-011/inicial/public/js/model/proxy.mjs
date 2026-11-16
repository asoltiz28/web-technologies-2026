export function crearCatalogoProxy() {
  async function obtenerTodos() {
    // TODO: GET /libros con fetch, comprobar response.ok
    // y devolver await response.json()
  }

  async function obtenerDisponibles() {
    // TODO: GET /libros?disponible=true con fetch,
    // comprobar response.ok y devolver await response.json()
  }

  return {
    obtenerTodos,
    obtenerDisponibles
  };
}
