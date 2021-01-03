const { Router } = require("express");
const { VerificarRol } = require("../controllers/Security.controller");
const {
  listarEstados,
  consultarEstado,
  crearEstado,
  editarEstado,
} = require("../controllers/Estado.controller");
const routes = Router();

routes.get("/listar", VerificarRol , listarEstados);
routes.get("/consultar/:idEstado", VerificarRol , consultarEstado);
routes.post("/crear", VerificarRol , crearEstado);
routes.post("/editar", VerificarRol , editarEstado);

module.exports = routes;
