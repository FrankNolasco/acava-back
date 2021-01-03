const { Router } = require("express");
const { VerificarRol } = require("../controllers/Security.controller");
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
routes.get("/papelera/listar", VerificarRol , listarPapeleraTipoServicios);
routes.get("/consultar/:idTipoServicio", VerificarRol , consultarTipoServicio);
routes.post("/crear", VerificarRol , crearTipoServicio);
routes.post("/editar", VerificarRol , editarTipoServicio);
routes.post("/eliminar", VerificarRol , eliminarTipoServicio);

module.exports = routes;
