const { Router } = require("express");
const {
  listarTipoServicios,
  consultarTipoServicio,
  crearTipoServicio,
  editarTipoServicio,
  eliminarTipoServicio,
  listarPapeleraTipoServicios,
} = require("../controllers/TipoServicio.controller");
const routes = Router();

routes.get("/listar", listarTipoServicios);
routes.get("/papelera/listar", listarPapeleraTipoServicios);
routes.get("/consultar/:idTipoServicio", consultarTipoServicio);
routes.post("/crear", crearTipoServicio);
routes.post("/editar", editarTipoServicio);
routes.post("/eliminar", eliminarTipoServicio);

module.exports = routes;
