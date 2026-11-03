import { librosIniciales } from './data/seed.mjs';
import { crearCatalogo } from './model/catalogo.mjs';
import { crearCatalogoPresenter } from './presenter/catalogo-presenter.mjs';

const modelo = crearCatalogo(librosIniciales);
const presentador = crearCatalogoPresenter(modelo);

presentador.iniciar();
