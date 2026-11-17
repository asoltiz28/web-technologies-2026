import { crearCatalogoPresenter } from './presenter/catalogo-presenter.mjs';
import { crearCatalogoProxy } from './model/proxy.mjs';

const modelo = crearCatalogoProxy();
const presentador = crearCatalogoPresenter(modelo);

presentador.iniciar();
