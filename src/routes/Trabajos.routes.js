const { Router } = require("express");
const { VerificarRol } = require("../controllers/Security.controller");
const {
  listarTrabajos,
  consultarTrabajo,
  crearTrabajo,
  editarTrabajo,
  eliminarTrabajo,
} = require("../controllers/Trabajos.controller");
const routes = Router();

routes.get("/listar", listarTrabajos);
routes.get("/consultar/:idTrabajo", VerificarRol , consultarTrabajo);
routes.post("/crear", VerificarRol , crearTrabajo);
routes.post("/editar", VerificarRol , editarTrabajo);
routes.post("/eliminar", VerificarRol , eliminarTrabajo);

module.exports = routes;
